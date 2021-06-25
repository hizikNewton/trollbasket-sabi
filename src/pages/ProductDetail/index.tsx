import { Button } from "components/Button";
import Review from "components/molecule/Products/Review";
import { connect, ConnectedProps } from "react-redux";
import Header from "../../components/Header";
import { ProductDetail as Detail } from "../../components/molecule/Products";
import * as S from "./styles";
import { addProductToCart, countCartItems } from "../../redux/actions";
import { Message } from "components/Message";
import { useState } from "react";
import { Link } from "react-router-dom";

type IProps = PropsFromRedux;

const ProductDetail = (props: IProps) => {
  const [display, setDisplay] = useState(false);
  const { product, cart } = props;

  const handleAddToCart = () => {
    setDisplay(true);
    props.addProductToCart(product);
    props.totalItem(cart);
  };
  return (
    <>
      <S.Wrapper>
        <Header location={"Detail"} text={"detail"} />
        {display && (
          <Message
            title="Item added to cart successfully"
            status="success"
            onClick={() => {
              setDisplay(false);
            }}
          />
        )}
        <Detail product={product} />
        <Review review={review} />

        <S.AddActions>
          <Link to={`/cart`}>
            <Button onClick={handleAddToCart}>{"Add to cart"}</Button>
          </Link>
          <S.Spacer></S.Spacer>
          <Button>{"Wishlist"}</Button>
        </S.AddActions>
      </S.Wrapper>
    </>
  );
};

const review = {
  star: 3.0,
  comment:
    "This is the best product I have used in a long while and the size fits perfectly and I love the colors!!!!!",
  thumbnail: "assets/img/Ellipse 98.png",
  username: "Segun Arinze",
};
export interface IRootState {
  store: IAppState;
  search: {
    products: Array<Product>;
    locationFilter: Array<Product>;
    searchResult: Array<Product>;
  };
}

const mapStateToProps = (state: IRootState, props: any) => {
  const product = state.store.products.find(
    (product: any) => product.id === +props.match.params.id
  );

  return {
    product: product,
    cart: state.store.cart,
  };
};

const mapDispatchToProps = {
  addProductToCart: addProductToCart,
  totalItem: countCartItems,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ProductDetail);
