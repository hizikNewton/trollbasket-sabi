import Accordion from "components/Accordion/Accordion";
import React from "react";
import * as S from "./styles";

interface IProps {
  product: Product;
}

export const ProductDetail: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <S.Image width="312px" height="206px">
        {<img src={product.url} alt="product-thumb" />}
      </S.Image>

      <S.Brief>
        <S.Title>{product.name}</S.Title>
        <S.Desc>{product.desc}</S.Desc>
        <S.Price padding="17px 0px">
          {product.price}
          <span>{"/Piece"}</span>
        </S.Price>
      </S.Brief>
      <Accordion />
    </>
  );
};
