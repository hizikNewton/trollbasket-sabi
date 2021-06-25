import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.light};

  font-size: 1.5rem;
  padding: 10px;
`;
export const AddActions = styled.div`
  position: fixed;
  width: 95%;
  bottom: 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding-bottom: 10px;
`;
export const Spacer = styled.div`
  width: 20px;
`;
