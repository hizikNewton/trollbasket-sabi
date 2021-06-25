import { useEffect, useState } from "react";
import * as S from "./styles";
import { IconButton } from "../../IconButton";
import {
  WalletIcon,
  HomeIcon,
  BuyIcon,
  DealsIcon,
  MoreIcon,
} from "assets/icons";
import { blue } from "globalStyles/constants";

export const Nav = () => {
  const [windowDimension, setWindowDimension] = useState(0);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [selected, setselected] = useState("buy");

  const handleClick = (id: any) => {
    setselected(id);
  };
  const isMobile = windowDimension <= 640;

  return (
    <>
      {isMobile ? (
        <S.MobileNavbarWrapper>
          <S.MobileNavBarItems>
            <S.MobileNavBarItem onClick={() => handleClick("home")}>
              <IconButton
                selected={selected === "home"}
                type={"footer"}
                text={"Home"}
                svg={<HomeIcon fill={selected === "home" ? blue : "none"} />}
              />
            </S.MobileNavBarItem>

            <S.MobileNavBarItem onClick={() => handleClick("buy")}>
              <IconButton
                selected={selected === "buy"}
                type={"footer"}
                text={"Buy"}
                svg={<BuyIcon fill={selected === "buy" ? blue : "#718596"} />}
              />
            </S.MobileNavBarItem>

            <S.MobileNavBarItem onClick={() => handleClick("deals")}>
              <IconButton
                selected={selected === "deals"}
                type={"footer"}
                text={"Deals"}
                svg={<DealsIcon fill={selected === "deals" ? blue : "none"} />}
              />
            </S.MobileNavBarItem>

            <S.MobileNavBarItem onClick={() => handleClick("wallet")}>
              <IconButton
                selected={selected === "wallet"}
                type={"footer"}
                text={"Wallet"}
                svg={
                  <WalletIcon fill={selected === "wallet" ? blue : "none"} />
                }
              />
            </S.MobileNavBarItem>

            <S.MobileNavBarItem onClick={() => handleClick("more")}>
              <IconButton
                selected={selected === "more"}
                type={"footer"}
                text={"More"}
                svg={<MoreIcon fill={selected === "more" ? blue : "#718596"} />}
              />
            </S.MobileNavBarItem>
          </S.MobileNavBarItems>
        </S.MobileNavbarWrapper>
      ) : (
        <>
          <S.NavbarItems>
            <S.NavBarItem>Home</S.NavBarItem>
            <S.NavBarItem>Blog</S.NavBarItem>
            <S.NavBarItem>About</S.NavBarItem>
          </S.NavbarItems>
        </>
      )}
    </>
  );
};
