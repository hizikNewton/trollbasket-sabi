import { styled } from "globalStyles";

export const SList = styled.div`
  display: flex;
  padding: 5px;
  margin: 5px;
  background-color: ${(props) => props.theme.colors.gray};
  flex-direction: row;
  img {
    height: 48px;
    width: 48px;
    margin-right: 10px;
  }
`;

export const Item = styled.div`
  display: flex;
  h4 {
    font-size: ${(props) => props.theme.typography.h4FontSize};
  }
  p {
    font-size: ${(props) => props.theme.typography.baseFontSize};
  }
`;

export const SearchContainer = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  background-color: ${(props) => props.theme.colors.gray};
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  left: 0;
  text-align-last: left;
`;
