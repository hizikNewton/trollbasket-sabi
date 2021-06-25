import styled from "styled-components";

export const Items = styled.div`
  padding: 11px;
  background-color: white;
  margin: 16px;
  hr {
    margin: 11px;
    border: 1px solid #f6f2f2;
  }
`;

export const Item = styled.div`
  display: inline-flex;
  align-items: center;
  img {
    padding-right: 16px;
    height: 48px;
    flex-grow: 1;
    object-fit: contain;
    max-width: 100%;
  }
  p {
    font-size: 1.2rem;
  }
`;
export const Delete = styled.div`
  display: flex;
  align-items: center;
`;
export const ActionBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Increment = styled.div`
  display: inline-flex;
  margin-right: 7px;
  align-items: center;

  span {
    margin: 0px 7px;
  }
`;
export const Summary = styled.div``;
export const SubTotal = styled.div``;
export const Total = styled.div``;
export const IconButton = styled.button`
  display: flex;
  margin-left: 5px;
  border: none;
  p {
    text-align: center;
  }
`;
