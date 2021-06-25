import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductList: React.FC<IProps> = ({ products }: IProps) => {
  return (
    <>
      {products && products.length && (
        <S.Container>
          {products?.map((product) => (
            <S.Wrapper key={product.id}>
              <Link to={`/product-detail/${product.id}`}>
                <S.Image>
                  {<img src={product.thumbnail} alt="product-thumbnail" />}
                </S.Image>
                <S.Desc>{product.name}</S.Desc>
                <S.Price>{product.price}</S.Price>
                <S.Qty>{product.qty}</S.Qty>
              </Link>
            </S.Wrapper>
          ))}
        </S.Container>
      )}
    </>
  );
};
