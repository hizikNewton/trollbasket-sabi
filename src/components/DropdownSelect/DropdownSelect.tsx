import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchAction } from "redux/actions/types";
import { products } from "redux/data/products";
import DropDownArrow from "../../assets/icons/DropDown";
import { LocationIcon } from "assets/icons";
import * as S from "./styles";
import { Icon } from "components/Icon";

interface Props {
  text?: string;
  svg?: React.ReactNode;
  type?: string;
  handleClick: (arg: string) => void;
}

export const DropDownSelect: React.FC<Props> = ({
  text,
  type,
  handleClick,
}: Props) => {
  const [dropVisible, setDropVisible] = useState(false);
  const main = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleDropDownVisibility = () => {
    setDropVisible((prev) => !prev);
  };

  const locations = [...new Set(products.map(({ location }) => location))];

  useEffect(() => {
    const toggleDropDown = (e: TouchEvent) => {
      let check;

      setDropVisible((prev) => (check = prev));

      if (check) {
        handleDropDownVisibility();
      }

      const el = e.target as HTMLDivElement;
      if (main && main.current) {
        if (el.id === main.current.id) {
          handleDropDownVisibility();
        }
      }
    };

    window.addEventListener("touchend", toggleDropDown);

    return () => {
      window.removeEventListener("touchend", toggleDropDown);
    };
  }, []);

  const updateLocation = (str: string) => {
    handleClick(str);
    dispatch({
      type: SearchAction.FILTER_LOCATION,
      payload: str,
    });
  };

  return (
    <S.LocationDropdownContainer
      ref={main}
      id="main"
      onTouchEnd={(e) => {
        if (type === "drop-down") {
          e.stopPropagation();
          handleDropDownVisibility();
        }
      }}
    >
      <S.OptionSelector>
        <Icon svg={<LocationIcon />} text={text} />
        <DropDownArrow />
      </S.OptionSelector>
      <div>
        {dropVisible && (
          <S.LocationDropdown>
            {[
              <p onTouchEnd={() => updateLocation("All")} key="All">
                All
              </p>,
              ...locations.map((location) => (
                <p onTouchEnd={() => updateLocation(location)} key={location}>
                  {location}
                </p>
              )),
            ]}
          </S.LocationDropdown>
        )}
      </div>
    </S.LocationDropdownContainer>
  );
};
