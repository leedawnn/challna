import React from 'react';
import styled from 'styled-components';
import useLazyImageObserver from '../../../hooks/useLazyImageObserver';

type Props = {
  src: string;
  alt: string;
};

const LazyImage = React.memo(({ src, alt }: Props) => {
  const { imageSrc, imageRef } = useLazyImageObserver({ src });

  return <Image ref={imageRef} src={imageSrc as string} alt={alt} />;
});

export default LazyImage;

const Image = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  cursor: pointer;
`;
