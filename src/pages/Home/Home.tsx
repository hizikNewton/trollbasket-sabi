import { Nav } from "components/molecule/Nav";
import React, { ReactElement, useState } from "react";
import { DropDownSelect } from "../../components/DropdownSelect";
import Header from "../../components/Header";
import { Icon } from "../../components/Icon";
import { IconButton } from "../../components/IconButton";
import { Input } from "../../components/Input";
import { ProductList } from "../../components/molecule/Products";
import { Slider } from "../../components/Slider";
import * as S from "./styles";
import { connect, ConnectedProps } from "react-redux";
import { countCartItems, searchProduct } from "redux/actions";
import { IRootState } from "pages/ProductDetail";
import {
  PopularProductsIcon,
  ShopsIcon,
  ProductCategoriesIcon,
  RecommendedProductsIcon,
  BuyIcon,
  MyOrdersIcon,
  Close,
  Search,
} from "../../assets/icons";
import SearchList from "components/SearchList/search";

type IProps = PropsFromRedux;

const Home = (props: IProps) => {
  const [showClearBtn, setClearState] = useState(false);
  const [inputValue, setvalue] = useState("Search");
  const { searchResult, search, products, locationFilter } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClearState(true);
    setvalue(e.target.value);
    search(inputValue);
  };

  const clear = () => {
    setvalue("");
    setClearState(false);
  };

  return (
    <S.Home>
      <Nav />
      <Header location={"Home"} text={"Trollbasket"} />

      <SubNav />
      <S.InputContainer>
        <Input
          contentLeft={
            showClearBtn && (
              <button onClick={clear}>
                <Icon svg={<Close />}></Icon>
              </button>
            )
          }
          value={inputValue}
          contentRight={
            <button onClick={() => props.search(inputValue)}>
              <Icon svg={<Search />}></Icon>
            </button>
          }
          onChange={(e) => handleChange(e)}
        />
        {searchResult && searchResult.length && (
          <SearchList data={searchResult} />
        )}
      </S.InputContainer>
      <Slider />
      <S.BtnGroup>
        <IconButton
          svg={<ProductCategoriesIcon />}
          text={"product categories"}
        />
        <IconButton svg={<PopularProductsIcon />} text={"Popular product"} />
        <IconButton
          svg={<RecommendedProductsIcon />}
          text={"Recommended Products"}
        />
        <IconButton svg={<ShopsIcon />} text={"shops"} />
      </S.BtnGroup>
      <ProductList
        products={
          locationFilter && locationFilter.length ? locationFilter : products
        }
      />
    </S.Home>
  );
};

const SubNav = (): ReactElement => {
  const [selected, setSelected] = useState("Lagos");

  const handleClick = (selVal: string) => {
    setSelected(selVal);
  };
  return (
    <>
      <S.SSubNav>
        <DropDownSelect
          text={selected}
          type={"drop-down"}
          handleClick={handleClick}
        />
        <S.BtnGroup>
          <Icon svg={<MyOrdersIcon />} text={"my orders"} />
        </S.BtnGroup>
        <S.BtnGroup>
          <Icon svg={<BuyIcon />} text="Carts" />
          {"9"}
        </S.BtnGroup>
      </S.SSubNav>
    </>
  );
};

function mapStateToProps(state: IRootState) {
  return {
    products: state.store.products,
    searchResult: state.search.searchResult,
    locationFilter: state.search.locationFilter,
    cart: state.store.cart,
  };
}

const mapDispatchToProps = {
  search: searchProduct,
  quantity: countCartItems,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
