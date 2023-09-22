import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(100%);
  }
`;

const SkeletonImage = () => {
  return (
    <Wrapper>
      <AnimationBar />
    </Wrapper>
  );
};

export default SkeletonImage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f5f5f5;
`;

const AnimationBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: linear-gradient(90deg, #f5f5f5 0%, #ffffffae 30%, #f5f5f5 60%);
  animation: ${loading} 1.5s infinite linear;
`;
