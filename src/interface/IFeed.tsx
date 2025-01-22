export interface IFeedItem {
  id: string;
  username: string;
  avatar: string;
  shopName: string;
  text?: string;
  images?: string[];
  likes: number;
  comments: number;
  didLike: boolean;
}

export interface FeedItemProps {
  item: IFeedItem;
  onView: () => void;
}

export interface FeedResponse {
  data: IFeedItem[];
  hasMore: boolean;
}

export interface ActionButtonProps {
  liked?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

