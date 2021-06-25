import { Icon } from "../Icon";
import * as S from "./styles";
import { Link, useHistory } from "react-router-dom";
import { IconButton } from "pages/Cart/styles";
import { connect, ConnectedProps } from "react-redux";
import { Back, NavCart, Search } from "assets/icons";

type Props = PropsFromRedux & IProps;
interface IProps {
  location: string;
  text: string;
  carts?: IAppState["cart"];
}

const Header = ({ location, text, totalItem }: Props) => {
  const home = location !== "Home";
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <S.Header cart={location === "carts"}>
      {home && (
        <IconButton onClick={goBack}>
          <Icon svg={<Back />} />
        </IconButton>
      )}
      <S.Text>{text}</S.Text>
      {location === "Detail" && (
        <>
          <S.BtnGroup>
            <IconButton>
              <Icon svg={<Search />} />
            </IconButton>
            <Link to="/cart">
              <IconButton>
                <Icon svg={<NavCart />} />
                <S.Badge>{totalItem}</S.Badge>
              </IconButton>
            </Link>
          </S.BtnGroup>
        </>
      )}
    </S.Header>
  );
};

interface IRootState {
  store: {
    totalItem: number;
  };
}

const mapStateToProps = (state: IRootState) => {
  return {
    totalItem: state.store.totalItem || 0,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Header);
