import { useCallback, useEffect, useState } from 'react';

import { InfiniteQueryObserverResult } from '@tanstack/react-query';

type Props = {
  threshold?: number;
  hasNextPage?: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
};

const useInfinityObserver = ({ threshold = 0.1, hasNextPage, fetchNextPage }: Props) => {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);

  // 추후 fetchNextPage에 대한 에러 핸들링 부분 추가
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    },
    [hasNextPage],
  );

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    observer.observe(target);

    return () => observer.unobserve(target);
  }, [threshold, target]);

  return { setTarget };
};

export default useInfinityObserver;
