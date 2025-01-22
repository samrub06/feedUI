import { useCallback, useEffect, useRef, useState } from 'react';
import { IFeedItem } from '../../interface/IFeed';
import { FeedContainer } from '../../style';
import FeedItem from '../FeedItem';
import FeedItemSkeleton from '../Skeleton';

const Feed = () => {
  const [feedItems, setFeedItems] = useState<IFeedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [skip, setSkip] = useState<number>(0);
  const viewedItems = useRef(new Set());

  const fetchFeedItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://backend.tedooo.com/hw/feed.json?skip=${skip}`);
      const data = await response.json();
      
      setFeedItems(prev => [...prev, ...data.data]);
      setHasMore(data.hasMore);
      setSkip(prev => prev + 6);
    } catch (error) {
      console.error('Error fetching feed items:', error);
    } finally {
      setLoading(false);
    }
  };

  const trackImpression = async (itemId: string) => {
    if (!viewedItems.current.has(itemId)) {
      try {
        await fetch(`https://backend.tedooo.com/?itemId=${itemId}`);
        viewedItems.current.add(itemId);
      } catch (error) {
        console.error('Error tracking impression:', error);
      }
    }
  };

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight) {
      if (hasMore && !loading) {
        fetchFeedItems();
      }
    }
  }, [hasMore, loading]);

  useEffect(() => {
    fetchFeedItems();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <FeedContainer>
      {loading && feedItems.length === 0 ? (
        <>
          <FeedItemSkeleton />
          <FeedItemSkeleton />
          <FeedItemSkeleton />
        </>
      ) : (
        feedItems.map((item: IFeedItem) => (
          <FeedItem 
            key={item.id} 
            item={item}
            onView={() => trackImpression(item.id)}
          />
        ))
      )}
    </FeedContainer>
  );
};

export default Feed; 