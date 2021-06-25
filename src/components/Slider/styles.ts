import styled from "styled-components";

/* :root {
    --blue-color: #227EFF
}
 */
export const MainBanner = styled.div`
  min-width: calc((250vw / 3));
  height: 100%;
  border-radius: 10px;
  display: flex;
  text-align: left;
  font-weight: bold;
  color: white;
  position: relative;
  overflow: hidden;

  * {
    margin: auto;
    z-index: 2;
  }

  div:not(:first-child) {
    z-index: 0;
  }

  p {
    font-size: 12px;
  }
  button {
    height: 31px;
    width: 91px;
    background-color: var(--blue-color);
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 10px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  width: 100%;
`;

export const Fade1 = styled.div`
  /* Rectangle 405 */

  position: absolute;
  width: 76.87px;
  height: 250.85px;
  left: 50px;
  top: -65.47px;

  background: linear-gradient(
    179.33deg,
    #0350bb 0.57%,
    rgba(3, 80, 187, 0) 114.02%
  );
  opacity: 0.3;
  transform: matrix(0.82, -0.32, 0.76, 0.9, 0, 0);
`;

export const Fade2 = styled.div`
  position: absolute;
  width: 76.87px;
  height: 219.2px;
  left: calc((250vw / 3) - 70px);
  top: 0px;

  background: linear-gradient(
    179.33deg,
    #0350bb 0.57%,
    rgba(3, 80, 187, 0) 114.02%
  );
  opacity: 0.3;
  transform: matrix(-0.82, 0.32, -0.76, -0.9, 0, 0);
`;

export const Star = styled.div`
  position: absolute;
  width: 1.7px;
  height: 1.7px;
  left: 1.26px;
  top: 56.6px;

  background: #ff705e;
  opacity: 0.84;
  transform: rotate(43deg);
`;

export const Slider = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  height: 20vh;
  padding: 10px;
  margin-top: 15px;
  margin-bottom: 0px;
  z-index: 1;

  #info-slider * {
    margin: auto;
  }
`;

export const Space = styled.div`
  min-width: 10px;
  height: 10px;
`;
/* 




.info-slider>div:nth-child(3) {
  margin: auto 10px;
}

.star2 {

    position: absolute;
    width: 2.28px;
    height: 2.28px;
    left: 14.26px;
    top: 108.2px;

    background: #EE6F44;
    transform: rotate(105deg);

}

.star3 {

    position: absolute;
    width: 2.1px;
    height: 2.1px;
    left: 56.26px;
    top: 16px;

    background: #07D571;
    opacity: 0.72;
    transform: rotate(-18deg);

}

.star4 {

    position: absolute;
    width: 2.12px;
    height: 2.12px;
    left: 135.26px;
    top: 78.4px;

    background: #FFC042;
    opacity: 0.82;
    transform: rotate(92deg);

}

.star5 {

    position: absolute;
    width: 2.1px;
    height: 2.1px;
    left: 82.26px;
    top: 20.8px;

    background: #07D571;
    opacity: 0.95;
    transform: rotate(22deg);

}

.star6 {

    position: absolute;
    width: 1.62px;
    height: 1.62px;
    left: 148.26px;
    top: 35.8px;

    background: #07D571;
    opacity: 0.81;
    transform: rotate(54deg);

}

.star7 {

    position: absolute;
    width: 2.12px;
    height: 2.12px;
    left: 172.26px;
    top: 4px;

    background: #07D571;
    opacity: 0.71;
    transform: rotate(-76deg);

}

.star8 {

    position: absolute;
    width: 2.4px;
    height: 2.4px;
    left: 184.26px;
    top: 65.6px;

    background: #FFD175;
    opacity: 0.91;
    transform: rotate(-14deg);

}

.star9 {

    position: absolute;
    width: 1.24px;
    height: 1.24px;
    left: 196.26px;
    top: 91.4px;

    background: #07D571;
    opacity: 0.78;
    transform: rotate(118deg);

}

.star10 {

    position: absolute;
    width: 1.24px;
    height: 1.24px;
    left: 196.26px;
    top: 91.4px;

    background: #07D571;
    opacity: 0.78;
    transform: rotate(118deg);

} */
