//todo: update docs? (also _app missing theme={theme})
// todo: also add big docs explanation to docs
// import '@emotion/react';

import { CoreTheme } from '@codecademy/gamut-styles';

declare module '@emotion/react' {
  export interface Theme extends CoreTheme {}
}

// todo y u no intellisense
