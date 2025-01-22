import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 0;
  margin-bottom: 16px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;

export const Header = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Username = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #000;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ShopName = styled.p`
  margin: 0;
  font-size: 14px;
  color: #0095F6;
  font-weight: 500;

  &:after {
    content: ' · 1h';
    color: #65676B;
  }
`;

export const PostText = styled.p`
  margin: 0;
  padding: 0 16px 12px;
  font-size: 14px;
  color: #000;
  line-height: 1.5;
`;

export const PostImage = styled.img`
  object-fit: cover;
  height: 300px;
  transition: opacity 0.3s ease;
`;


export const Stats = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  gap: 8px;
  font-size: 14px;
  color: #65676B;
`;

export const LikeIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const LikeIconWrapper = styled.div`
  width: 18px;
  height: 18px;
  background: #0095F6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
`;

export const CommentCount = styled.span`
  margin-left: auto;
  color: #65676B;
  
  &:after {
    content: ' Comments';
  }
`;
export const Separator = styled.div`
  border-top: 1px solid #ccc;
  margin-left: 16px;
  margin-right: 16px;
`;


export const Actions = styled.div`
  display: flex;
  padding: 10px 16px 10px;
`;

export const ActionButton = styled.button<{ liked?: boolean }>`
  flex: 1;
  background: none;
  border: none;
  padding: 6px;
  font-size: 14px;
  color: #65676B;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s color;

  &:hover {
    background-color: #F2F2F2;
  }

  ${props => props.liked && `
    color: #0095F6;
  `}

  svg {
    transition: 0.2s all;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const FeedContainer = styled.div`
  max-width: 580px;
  margin: 0 auto;
  background: #FAFAFA;
  `;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 20px;
  color: #65676B;
  font-size: 13px;
`;


export const ImagesContainer = styled.div`
  display: flex;
  gap: 2px;
  margin: 0 -1px;
`;

