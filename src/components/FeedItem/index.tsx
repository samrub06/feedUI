import { useEffect, useRef, useState } from 'react';
import { FeedItemProps } from '../../interface/IFeed';
import { ActionButton, Actions, Avatar, Card, CommentCount, Header, ImagesContainer, LikeIconWrapper, LikeIndicator, PostImage, PostText, Separator, ShopName, Stats, UserDetails, Username } from '../../style';

const LikeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

const LikeFilledIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const FeedItem = ({ item, onView }: FeedItemProps) => {
  const [liked, setLiked] = useState(item.didLike);
  const [likesCount, setLikesCount] = useState(item.likes);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onView();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [onView]);

  const handleLike = () => {
    setLiked(prev => !prev);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };




  return (
    <Card ref={itemRef}>
      <Header>
        <Avatar src={item.avatar} alt={item.username} />
        <UserDetails>
          <Username>{item.username}</Username>
          <ShopName>{item.shopName}</ShopName>
        </UserDetails>
      </Header>

      {item.text && <PostText>{item.text}</PostText>}

      {item.images && item.images.length > 0 && (
        <ImagesContainer>
          {item.images.slice(0, 2).map((image: string, index: number) => (
            <PostImage 
              key={index}
              src={image} 
              alt={`Post ${index + 1} by ${item.username}`}
              style={{ 
                width: item.images?.length === 2 ? '50%' : '100%'
              }}
            />
          ))}
        </ImagesContainer>
      )}

      <Stats>
        <LikeIndicator>
          <LikeIconWrapper>👍</LikeIconWrapper>
          <span>{likesCount.toLocaleString()} Likes</span>
        </LikeIndicator>
        <CommentCount>{item.comments.toLocaleString()} </CommentCount>
      </Stats>
      <Separator />
      <Actions>
        <ActionButton
          liked={liked}
          onClick={handleLike}
        >
          {liked ? <LikeFilledIcon /> : <LikeIcon />}
          {liked ? 'Liked' : 'Like'}
        </ActionButton>
        <ActionButton>
          <CommentIcon />
        </ActionButton>
      </Actions>
    </Card>
  );
};

export default FeedItem; 