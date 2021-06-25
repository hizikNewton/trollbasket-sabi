
import styled from "styled-components";

const BannerStyle = styled.div`
    height:100%;
    width:100%;`

export const FirstBanner = styled(BannerStyle)`
    background: #003277;
    div{
        background:white;
        height:50%;
        font-size:2rem;
    }
`
export const SecondBanner = styled(BannerStyle)`
    background:#227EFF;
    div{
        background:white;
        height:50%;

        font-size:2rem;
    }
`

export const ThirdBanner = styled(BannerStyle)`
    background:#EE6F44;
    div{
        background:white;
        height:50%;

        font-size:2rem;
    }
`