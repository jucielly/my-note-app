import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeProps {
    children: ReactNode
}

const theme = {
    colors: {
        primary: '#F47B7C',
        secondary: '#CC444B',
        terciary: "#918F92",
        inputColor: "#DED8D0",
        defaultWhite: "#fff",
        fontColor: '#070610',
        success: '#659B5E',
        danger: '#E33D2F',
    },
    cardColors: {
        lightPink: "#FCADAE",
        babyBlue: "#9FC8FD",
        orangeYellow: "#FCCE68",
        greysh: "#DED8D0"
    },

    fonts: {
        default: 'Roboto, sans-serif;',
        fontSizes: {
            small: '1em',
            mediumSmall: '1.2em',
            medium: '2em',
            large: '3em',
        },
    }

}





const Theme = ({ children }: ThemeProps) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}


export default Theme