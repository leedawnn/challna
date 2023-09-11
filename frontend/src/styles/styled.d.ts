import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      medium: string;
      light: string;
      bold: string;
    };
    fontStyle: {
      regular: number;
      bold: number;
    };
    typography: {
      body1: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      body2: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      body3: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      subHead: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      subHead2: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      subHead3: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      headline: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      display: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      display2: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      display3: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
      display4: {
        fontFamily: string;
        fontStyle: string;
        fontSize: string;
        lineHeight: string;
      };
    };
    colors: {
      point: string;
      subPoint: string;
      pointPurple: string;
      subPurple: string;
      red: string;
      blue: string;
      kakao: string;
      white: string;
      lightGray: string;
      lightGray2: string;
      lightGray3: string;
      lightGray4: string;
      lightGray5: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      darkGray: string;
      darkGray2: string;
      black: string;
    };
  }
}
