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
 * point: '#92B5D9'
 * subPoint: '#00A3FF'
 * pointPurple: '#66648B'
 * subPurple: '#4B10AC'
 * red: '#F45959'
 * blue: '#1164CD'
 * kakao: '#FEE500'
 * white: '#ffffff'
 * lightGray: '#F5F5F5'
 * lightGray2: '#ECECEC'
 * lightGray3: '#D7D7D7'
 * lightGray4: '#CECECE'
 * lightGray5: '#B4B4B4'
 * gray1: '#949494'
 * gray2: '#787878'
 * gray3: '#5C5C5C'
 * gray4: '#434343'
 * darkGray: '#2F2F2F'
 * darkGray2: '#1B1B1B'
 * black: '#000000'
 */

export const themeDefault: DefaultTheme = {
  colors: {
    // Brand Colors
    point: '#92B5D9',
    subPoint: '#00A3FF',
    pointPurple: '#66648B',
    subPurple: '#4B10AC',
    red: '#F45959',
    blue: '#1164CD',
    kakao: '#FEE500',

    // Grayscale Colors
    white: '#ffffff',
    lightGray: '#F5F5F5',
    lightGray2: '#ECECEC',
    lightGray3: '#D7D7D7',
    lightGray4: '#CECECE',
    lightGray5: '#B4B4B4',
    gray1: '#949494',
    gray2: '#787878',
    gray3: '#5C5C5C',
    gray4: '#434343',
    darkGray: '#2F2F2F',
    darkGray2: '#1B1B1B',
    black: '#000000',
  },
};
