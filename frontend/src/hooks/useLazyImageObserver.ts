import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
};

const useLazyImageObserver = ({ src }: Props) => {
  const [imageSrc, setImageSrc] = useState<string>();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (!imageSrc) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            if (observer && imageRef.current) {
              observer.unobserve(imageRef.current);
            }
          }
        },
        { threshold: [0.25] },
      );

      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
    }

    return () => {
      observer && observer.disconnect();
    };
  }, [imageSrc, imageRef]);

  return { imageSrc, imageRef };
};

export default useLazyImageObserver;
