import { styled } from "globalStyles";

export const Home = styled.div`
  z-index: 0;
`;

export const BtnGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  font-size: ${(props) => props.theme.typography.baseFontSize};
`;
export const Location = styled.div`
  height: 40px;
  padding: 15px;
  flex: 1;
`;
export const SSubNav = styled.div`
  font-size: 1.2rem;
  width: 100vw;
  justify-content: space-around;
  height: 25px;
  display: flex;
  button {
    flex: 1;
    text-align: center;
    line-height: 25px;
    border: none;
  }
`;
export const InputContainer = styled.div`
  z-index: 3;
  position: relative;
  height: 50px;
  button {
    border: 0px;
    padding: 5px;
  }
  margin: 12px;
  background-color: #edf2f7;
`;
