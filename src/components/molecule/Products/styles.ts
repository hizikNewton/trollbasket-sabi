import { styled } from "globalStyles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${(props) => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.gray};
  text-align: center;
  width: 100px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
`;
export const ProductDetailWrapper = styled.div.attrs({
  className: "pdw",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Desc = styled.h4`
  padding: 0px 10px;
  color: #627483;
  line-height: 21px;
  font-size: 1.2rem;
  font-weight: normal;
  ${textProps}
`;

export const Price = styled.p<{ padding?: string }>`
  padding: ${(props) => props.padding};
  ${textProps}
`;
export const Qty = styled.p`
  ${textProps}
`;
export const Image = styled.div<{ width?: string; height?: string }>`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: auto;
  > img {
    flex-grow: 1;
    object-fit: contain;
    max-width: 100%;
  }
`;

export const User = styled.div`
  display: inline-flex;
  align-content: center;
  padding: 10px;
  img {
    width: 24px;
    height: 24px;
    flex-grow: 1;
    object-fit: contain;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const Brief = styled.div`
  padding: 4px;
`;
export const Title = styled.div.attrs({
  className: "title",
})`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  line-height: 2.1rem;
`;

export const Review = styled.div`
  background: ${(props) => props.theme.colors.white};
  padding: 10px 0px;
  margin: 10px 0px;
`;
export const StarRating = styled.div`
  padding: 0px 10px;
  display: flex;
`;
