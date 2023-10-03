import albumIcon from '../assets/icons/AlbumIcon';
import messageIcon from '../assets/icons/MessageIcon';
import myPageIcon from '../assets/icons/MyPageIcon';

// Web Responsive Constatns

export const SCREEN_BREAKPOINT = {
  sm: 576,
  lg: 1200, // 배너가 보여야함
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
 *   ${mediaQuery.lg} {
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
  lg: `@media screen and (min-width: ${SCREEN_BREAKPOINT.lg}px)`,
};

export const FOOTER_MENUS = [
  {
    id: 1,
    name: '앨범',
    path: '/',
    icon: albumIcon,
  },
  {
    id: 2,
    name: '메시지',
    path: '/message',
    icon: messageIcon,
  },
  {
    id: 3,
    name: '마이',
    path: '/mypage',
    icon: myPageIcon,
  },
] as const;
