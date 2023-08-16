import { StyledContainer, StyledContainerElement, StyledMainBackground } from "./IndexStyle";


interface PropInterface{
    logo:string,
    list:any
}
const Header = function (data:PropInterface){
    console.log(data)
    return <StyledMainBackground>
        <StyledContainer>
            <StyledContainerElement></StyledContainerElement>
        </StyledContainer>
    </StyledMainBackground>
}

export default  Header