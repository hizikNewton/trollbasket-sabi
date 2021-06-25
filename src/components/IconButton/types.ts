import { IIconProps } from "../Icon";

export interface IProps extends IIconProps {
  onClick?: () => void;
  /**
   * Used as marker for writing e2e tests
   */
  bgColor?:string;
}
