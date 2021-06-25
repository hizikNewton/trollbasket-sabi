import { Button } from "components/Button";
import { Icon } from "components/Icon";
import React, { FC, useState } from "react";
import * as S from "./style";
import { MoreArrow } from "assets/icons";

interface Props {
  color?: string;
}
const Accordion: FC<Props> = ({ color }: Props) => {
  const [opened, setState] = useState(false);

  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setState(opened ? false : true);
  };

  return (
    <form>
      {data.map((tab, index) => (
        <S.Collapsible rotate={opened} color={color} key={index}>
          <Button fullWidth={true} onClick={onClickHandler}>
            <span className="title-wrapper">
              <h3>{tab.title}</h3>
              <Icon svg={MoreArrow} name="none"></Icon>
            </span>
          </Button>
          {opened && <S.Content>{tab.description}</S.Content>}
        </S.Collapsible>
      ))}
    </form>
  );
};

export default Accordion;

const data = [
  {
    title: "Product Description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum sollicitudin eros, non sagittis sapien consequat vel. Praesent vel tortor ac mi placerat condimentum. Donec dictum posuere odio vel feugiat. Aenean sed sem tincidunt, rhoncus magna sit amet, convallis justo. Curabitur vitae imperdiet magna, non pharetra est. Proin eget auctor.",
  },
];
