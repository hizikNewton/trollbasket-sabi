import React, { useEffect, useRef } from "react";
import { theme } from "../../globalStyles/constants";
import * as S from "./styles";

export const Slider = () => {
  return (
    <S.Slider>
      <S.Space />
      <Banner backgroundColor={theme.blue} />
      <Banner
        numberID={1}
        question={
          <p>
            Having any <span style={{ color: theme.orange }}>issues</span> with{" "}
            <br></br> your order?
          </p>
        }
        action="Contact Us"
        backgroundColor={theme.blueDark}
      />
      <Banner backgroundColor={theme.orange} />
      <S.Space></S.Space>
    </S.Slider>
  );
};

const Banner: React.FC<{
  question?: React.ReactNode;
  action?: string;
  backgroundColor?: string;
  numberID?: number;
}> = ({ question, action, backgroundColor, numberID }) => {
  const middleBanner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (middleBanner && middleBanner.current) {
      middleBanner.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
    }
  }, []);

  return (
    <S.MainBanner
      ref={numberID === 1 ? middleBanner : undefined}
      style={{ backgroundColor, margin: "0 5px" }}
    >
      <S.MainContent>
        {question}
        {action && <button>{action}</button>}
      </S.MainContent>
      {numberID === 1 && [
        <S.Fade1 key="white-fade1"></S.Fade1>,
        <S.Fade2 key="white-fade2"></S.Fade2>,
        ...Array(10)
          .fill(true)
          .map((_, index) => (
            <S.Star key={index} className={`star${index + 1}`}></S.Star>
          )),
      ]}
    </S.MainBanner>
  );
};
