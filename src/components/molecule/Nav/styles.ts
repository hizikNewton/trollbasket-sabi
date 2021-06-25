import styled from "styled-components";

export const Navbar = styled.nav`
  flex: 1;

  align-self: flex-start;

  padding: 1rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
`;
export const Logo = styled.h1`
  border: 1px solid gray;
  padding: 0.5rem 1rem;
`;

export const NavbarItems = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavBarItem = styled.li`
  padding: 0 1rem;
  cursor: pointer;
`;

export const MobileNavbarWrapper = styled(Navbar)`
  position: fixed;
  width: 100vw;
  bottom: 0;

  justify-content: center;
`;
export const MobileNavBarItems = styled(NavbarItems)`
  flex: 1;
  justify-content: space-evenly;
`;

export const MobileNavBarItem = styled(NavBarItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: baseline;
  font-size: 1.2rem;
`;
export const Icon = styled.span``;
