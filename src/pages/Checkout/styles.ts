import styled from "styled-components";
/* 
export const Background = styled.div`
background:linear-gradient(110deg,rgb(0,0,0,.1),transparent 85px 100px,rgb(0,0,0,.1) 100px),
linear-gradient(285deg,rgb(0,0,0,.1),transparent 100px 120px,rgb(0,0,0,.1) 120px);
background-size:145px 145px;
height:100vh;
` */
export const Background = styled.div`
   background: 
   linear-gradient(-45deg,rgb(0,0,0,.1) 0 48%,rgb(0 0 0 / 7%) 45% 52%,rgb(0,0,0,.1)50%),
   linear-gradient(45deg,rgb(0,0,0,.1) 0 48%,rgb(0 0 0 / 7%) 45% 52%, rgb(0,0,0,.1)50%), 
    radial-gradient(circle at center,rgb(236 238 241 / 0.1) 12px,transparent 16px),
    radial-gradient(circle at bottom left,rgb(236 238 241 / 0.1) 12px,transparent 16px),
    radial-gradient(circle at bottom right,rgb(236 238 241 / 0.1) 12px,transparent 16px),
    radial-gradient(circle at top left,rgb(236 238 241 / 0.1) 12px,transparent 16px),
    radial-gradient(circle at top right,rgb(236 238 241 / 0.1) 12px,transparent 16px);
    background-size:200px 200px;
    background-color: #227EFF;
    min-height: 100vh;
    display:flex;
`
export const OuterCircle = styled.div`
    background: linear-gradient(45deg,rgba(0,0,0,0.8) 0 10%,transparent 10% 90%, rgba(255,255,255));
    background-color:#0350BB;
    border-radius:50%;
    width:150px;
    height:150px;
    margin:auto;
    display:flex;
`
export const InnerCircle = styled.div`

background-color: #46bcaa;
border-radius: 50%;
width: 120px;
height: 120px;
margin: auto;
border: 10px solid #46bcaa;
background: linear-gradient(left top, crimson 0%, #f90 100%);
box-shadow:  0 1rem 1.25rem 0 rgb(22 75 195 / 50%), 0 0 0rem rgb(70 188 170), -0.5px -0.1rem 0.2rem rgb(255 255 255) inset, 0.5px 0.1rem 0.4rem 0 rgb(21 20 21) inset,
-0.5px -0.1rem 0.2rem rgb(255 255 255) inset,
1.6px -0.1rem 0.4rem  rgb(21 20 21),
-0.5px -0.1rem 0.2rem rgb(255 255 255);

`

export const Dm = styled.div`

`
export const Container = styled.div`
    max-width:100vw;
    max-height:100vh;
`