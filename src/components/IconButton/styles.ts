import { styled } from "../../globalStyles";

export const IconButton = styled.div<{ selected: boolean | undefined }>`
  border-top: ${(props) =>
    props.selected ? `1px solid ${props.theme.colors.blue}` : ""};
  pointer-events: none;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const SVGContainer = styled.div<{ backgroundColor: string | undefined }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : ""};
  pointer-events: none;
`;
export const PText = styled.p<{
  type: string | undefined;
}>`
  margin-top: ${({ type }) => (type === "footer" ? 0 : undefined)};
  color: ${(props) =>
    props.type === "footer"
      ? props.theme.colors.gray
      : props.theme.colors.dark};
  pointer-events: none;
  font-size: ${(props) => props.theme.typography.baseFontSize};
`;
