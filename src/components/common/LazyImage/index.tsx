import React, { useState } from 'react';

import styled from 'styled-components';
import * as Skeleton from '../Skeleton';
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
      {isLoading && <Skeleton.AlbumImage />}
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
