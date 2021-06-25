import styled, { css } from "styled-components";

const textProps = css`
  font-size: ${(props) => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.light};
  text-align: center;
  width: 100px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.theme.colors.hoverLightBackground};
  }
`;
export const ProductDetailWrapper = styled.div.attrs({
  className: "pdw",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Desc = styled.h4`
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
  font-size: 1.2rem;
  line-height: 2.1rem;
`;
