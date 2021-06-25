import styled from "styled-components";

export const LocationDropdownContainer = styled.div`
  margin-right: 0;
  position: relative;
  top: 5px;
`;

export const LocationDropdown = styled.div`
  z-index: 4;
  width: 100px;
  height: 150px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  border: 20px solid white;
  text-align-last: left;

  p {
    padding: 10px 0;
    margin: auto;
  }
  p:hover {
    background-color: #f8f8f8;
  }
`;

export const OptionSelector = styled.div`
  display: inline-flex;
`;
