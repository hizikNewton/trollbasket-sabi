import React from "react";
import * as S from "./styles";
import { blue } from "../../globalStyles/constants";

interface Props {
  svg: React.ReactNode;
  backgroundColor?: string;
  text: string;
  type?: string;
  id?: string;
  clickFn?: () => void;
  selected?: boolean;
}

export const IconButton: React.FC<Props> = ({
  svg,
  backgroundColor,
  text,
  type,
  selected,
}) => {
  return (
    <S.IconButton selected={selected}>
      <S.SVGContainer backgroundColor={backgroundColor}>{svg}</S.SVGContainer>
      <S.PText type={type} style={{ color: selected ? blue : "" }}>
        {text}
      </S.PText>
    </S.IconButton>
  );
};
