import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Magnum';
        src: url('/fonts/magnum/magnum.ttf'), format('truetype');
    }

    @font-face {
        font-family: 'Akkurat';
        src: url('/fonts/akkurat/Akkurat.ttf'), format('truetype');
    }

    @font-face {
        font-family: 'Akkurat-Bold';
        src: url('/fonts/akkurat/Akkurat-Bold.ttf'), format('truetype');
    }

    @font-face {
        font-family: 'Akkurat-Light';
        src: url('/fonts/akkurat/Akkurat-Light.ttf'), format('truetype');
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