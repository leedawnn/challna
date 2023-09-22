import React, { useState } from 'react';

import SkeletonImage from '../../ui/SkeletonImage';
import styled from 'styled-components';
import useLazyImageObserver from '../../../hooks/useLazyImageObserver';

type Props = {
  src: string;
  alt: string;
};

const LazyImage = React.memo(({ src, alt }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { imageSrc, imageRef } = useLazyImageObserver({ src });

  return (
    <>
      <Image
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        style={{ visibility: !isLoading ? 'visible' : 'hidden' }}
      />
      {isLoading && <SkeletonImage />}
    </>
  );
});

export default LazyImage;

const Image = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;

  object-fit: cover;

  cursor: pointer;
`;
