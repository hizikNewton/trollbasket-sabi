import styled from "styled-components";

export const Header = styled.div<{ cart: boolean }>`
  display: flex;
  font-size: 1.4rem;
  justify-content: space-between;
  margin: 16px;
  width: ${(props) => (props.cart ? "50vw" : "calc(100vw - 32px)")};
`;
export const Text = styled.div``;
export const Badge = styled.div`
  position: relative;
  top: -5px;
  right: 5px;
  border-radius: 50%;
  background-color: red;
  font-size: 1rem;
  width: 15px;
  height: 15px;
`;
export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    margin-left: 16px;
  }
`;
