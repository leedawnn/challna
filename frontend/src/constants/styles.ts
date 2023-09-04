// Web Responsive Constatns

export const SCREEN_BREAKPOINT = {
  sm: 375,
  md: 1023,
  lg: 1024,
} as const;


/**
 * css에서 반응형 디자인을 할 때 사용합니다.
 *
 * @example
 * css`
 *   font-size: 24px;
 *   display: grid;
 *   grid-template-columns: repeat(6, 1fr);
 *
 *   ${mediaQuery.md} {
 *     font-size: 20px;
 *     grid-template-columns: repeat(4, 1fr);
 *   }
 *
 *   ${mediaQuery.sm} {
 *     font-size: 16px;
 *     grid-template-columns: repeat(2, 1fr);
 *   }
 * `
 */
export const MEDIA_QUERY: Readonly<Record<keyof typeof SCREEN_BREAKPOINT, string>> = {
  sm: `@media screen and (max-width: ${SCREEN_BREAKPOINT.sm}px)`,
  md: `@media screen and (max-width: ${SCREEN_BREAKPOINT.md}px)`,
  lg: `@media screen and (min-width: ${SCREEN_BREAKPOINT.lg}px)`,
};