import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
    };

    metrics: {
      baseMargin: number;
      basePadding: number;
      baseRadius: number;

      screenWidth: number;
      screenHeight: number;
    };
  }
}
