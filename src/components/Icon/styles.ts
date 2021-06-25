import { styled } from "globalStyles";

export const StyledIcon = styled.div`
  display: flex;
  p {
    font-size: ${(props) => props.theme.typography.baseFontSize};
  }
`;
export const SvgContainer = styled.div`
  margin-right: 0;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50%;
  display: flex;
  overflow: visible;
  .svg-container * {
    margin: auto;
  }
`;
