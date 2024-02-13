import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Superfly';
        src: url('/fonts/superfly/superfly.ttf'), format('truetype');
    }

    @font-face {
        font-family: 'Akkurat';
        src: url('/fonts/akkurat/Akkurat.ttf'), format('truetype');
    }

    @font-face {
        font-family: 'Akkurat-Bold';
        src: url('/fonts/akkurat/Akkurat-Bold.ttf'), format('truetype');
    }

    body, html, #root {
        margin: 0;
        padding: 0;
        width: 100vw;
        overflow-x: hidden;
        font-family: 'Akkurat';
    }

    
`;

export default GlobalStyle;