import styled, { ThemeConsumer } from "styled-components"

export const Container = styled.header`
    grid-area:header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid ;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flax;
    justify-content: space-between;

    padding: 0 80px;
    background: red;
`