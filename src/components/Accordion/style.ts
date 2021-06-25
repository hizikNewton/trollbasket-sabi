import styled from "styled-components";


export const Collapsible = styled.div<{rotate:boolean}>`
.title-wrapper {
    display:flex;
    margin-left:-50vw;
    color:black;
}
img{position:absolute;
    right:0px;
    transition: all 0.3s ease-out;
    transform: rotate(0deg);
    transform: ${props => (props.rotate ? `rotate(90deg)` : "")};
}
`
export const Content =  styled.div`
    &:active{
        transition-timing-function: ease-in;
        transition: all 1s;
    }
`