import { DefaultTheme } from 'styled-components';

/**
 * css 컬러 변수들입니다.
 * 
 * @example
 * css`
 *  small {
    color: ${(props) => props.theme.colors.point} 
  }
 * `
 *
 * point (moment Blue)
 *
 * subPoint (Sub blue)
 *
 * pointPurple (moment Purple)
 *
 * subPurple (Sub Purple)
 *
 * red (Red)
 *
 * blue (Blue)
 * 
 * kakao (kakao 색상)
 */

export const themeDefault: DefaultTheme = {
  colors: {
    point: '#92B5D9',
    subPoint: '#00A3FF',
    pointPurple: '#66648B',
    subPurple: '#4B10AC',
    red: '#F45959',
    blue: '#1164CD',
    kakao: '#FEE500',
  },
};
