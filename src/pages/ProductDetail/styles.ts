import { styled } from "globalStyles";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.gray};

  font-size: 1.5rem;
`;
export const AddActions = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
  justify-content: space-evenly;
`;
export const Spacer = styled.div`
  width: 20px;
`;
