import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      point: string;
      subPoint: string;
      pointPurple: string;
      subPurple: string;
      red: string;
      blue: string;
    };
  }
}
