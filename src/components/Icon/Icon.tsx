import React from "react";
import { IProps } from "./types";
import { StyledIcon, SvgContainer } from "./styles";

export const Icon: React.FC<IProps> = ({ svg, text }: IProps) => {
  //const icon = icons[name as keyof typeof icons];
  return (
    <StyledIcon>
      <SvgContainer>{svg}</SvgContainer>
      <p>{text}</p>
    </StyledIcon>
  );
};
