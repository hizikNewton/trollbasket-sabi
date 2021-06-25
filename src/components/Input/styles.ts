import styled from "styled-components";
import { DefaultTheme } from "../../globalStyles/themes";
import { activeLabelStyles } from "../InputLabel";

type WrapperProps = {
  active: boolean;
  error: boolean;
  disabled: boolean;
  theme: DefaultTheme;
};

const getEdgeColor = (
  { active, error, disabled, theme }: WrapperProps,
  hovered = false
) => {
  if (disabled) {
    return theme.colors.blue;
  }

  if (error) {
    return theme.colors.dark;
  }

  if (hovered) {
    return theme.colors.secondary;
  }

  return active ? theme.colors.secondary : theme.colors.dark;
};

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  color: ${(props) => getEdgeColor(props)};
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => getEdgeColor(props, true)};
    outline-width: ${(props) => (props.disabled ? 0 : 1)}px;
    outline-style: solid;
    border-color: ${(props) => getEdgeColor(props, true)};
    outline-color: ${(props) => getEdgeColor(props, true)};
  }
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ labelBackground: string | null }>`
  padding: 0.8rem 1rem;
  margin: 0;
  border: none;
  width: 100%;
  font-size: ${(props) => props.theme.typography.baseFontSize};
  outline: none;
  background-color: transparent;
  &:-webkit-autofill {
    & + label {
      ${(props) => activeLabelStyles(props.theme, props.labelBackground)};
    }
  }
`;
