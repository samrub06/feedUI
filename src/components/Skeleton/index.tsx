import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonWrapper = styled.div`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 100%;
  animation: ${shimmer} 1.2s linear infinite;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const SkeletonHeader = styled.div`
  display: flex;
  padding: 16px;
  gap: 12px;
`;

const SkeletonAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

const SkeletonText = styled.div`
  flex: 1;
  > div {
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    margin-bottom: 8px;
    border-radius: 4px;
    &:last-child {
      width: 70%;
    }
  }
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
`;

const FeedItemSkeleton = () => (
  <SkeletonWrapper>
    <SkeletonHeader>
      <SkeletonAvatar />
      <SkeletonText>
        <div />
        <div />
      </SkeletonText>
    </SkeletonHeader>
    <SkeletonImage />
  </SkeletonWrapper>
);

export default FeedItemSkeleton; 