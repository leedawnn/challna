import { useEffect, useMemo, useState } from 'react';

import { SCREEN_BREAKPOINT } from '../../constants/styles';

type ScreenKey = `is${Capitalize<keyof typeof SCREEN_BREAKPOINT>}`;
type Screen = Map<ScreenKey, MediaQueryList>;

/**
 * React 컴포넌트에서 스크린 사이즈에 따라 실행해야 할 코드가 다를 때
 * 이 훅을 사용하여 분기 처리를 할 수 있다.
 *
 * @example
 * const { isSm, isLg } = useMediaQuery();
 * if (isSm) { // 모바일 디바이스에서 처리할 로직
 *   // ...
 * }
 */
const useMediaQuery = () => {
  const mediaQueries = useMemo<Screen>(() => {
    const addIsPrefix = (name: string) => `is${name[0].toUpperCase() + name.slice(1)}`;

    return new Map(
      Object.entries(SCREEN_BREAKPOINT).map(([name, breakpoint]) => {
        return [addIsPrefix(name) as ScreenKey, matchMedia(`(max-width: ${breakpoint}px)`)];
      }),
    );
  }, []);

  const [screen, setScreen] = useState(
    new Map([...mediaQueries].map(([name, mediaQuery]) => [name, mediaQuery.matches])),
  );

  useEffect(() => {
    const cleanHandlers = [...mediaQueries].map(([name, mediaQuery]) => {
      const handleMediaQueryChange = ({ matches }: MediaQueryListEvent) => {
        setScreen((screen) => new Map([...screen]).set(name, matches));
      };

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
    });

    return () => cleanHandlers.forEach((cleanHandler) => cleanHandler());
  }, []);

  return Object.fromEntries(screen);
};

export default useMediaQuery;
