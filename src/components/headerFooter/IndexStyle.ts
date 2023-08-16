import styled from 'styled-components'


export const StyledMainBackground = styled.div`
    background-color:${props=>props.theme.MainThemeColor};
`
export const StyledContainer = styled.div`
    width:${props=>props.theme.MainContainerWidth};
    margin: 0 auto;
`
export const StyledContainerElement = styled.div`
    display: flex;
    justify-content: space-between;
`

interface LogoInterface {
    link:string
}

export const StyledLogo:LogoInterface = styled.div`
    display: flex;
    justify-content: space-between;
`