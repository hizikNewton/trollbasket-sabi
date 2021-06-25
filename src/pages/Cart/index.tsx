import { Icon } from "components/Icon";
import { Wrapper } from "pages/ProductDetail/styles";
import Header from "../../components/Header";
import * as S from "./styles";
import { Button } from "components/Button";
import { ProductList } from "components/molecule/Products";
import { products } from "redux/data/products";
import { connect, ConnectedProps } from "react-redux";
import { IRootState } from "pages/ProductDetail";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeProductFromCart,
  countCartItems,
} from "../../redux/actions";
import { Minus, Plus } from "assets/icons";

interface IProps extends PropsFromRedux {}

const Cart = (props: IProps) => {
  const { carts } = props;
  return (
    <>
      <Header location={"carts"} text={"Cart"} />
      <Wrapper>
        {carts.map(({ product, quantity }) => {
          return (
            <S.Items>
              <S.Item>
                <img src={product.url} alt={product.name} />
                <div>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              </S.Item>
              <hr />
              <S.ActionBtn>
                <S.Delete>
                  <S.IconButton
                    onClick={() => {
                      props.removeItem(product.id);
                    }}
                  >
                    <Icon name="delete" />
                  </S.IconButton>
                  <p>Delete</p>
                </S.Delete>
                <S.Increment>
                  <S.IconButton
                    onClick={() => {
                      quantity < 2
                        ? props.removeItem(product.id)
                        : props.decrementQty(product.id);
                    }}
                  >
                    <Icon svg={<Minus/>} name="none" />
                  </S.IconButton>
                  <span>{quantity}</span>
                  <S.IconButton
                    onClick={() => {
                      props.incrementQty(product.id);
                      props.countItem(carts);
                    }}
                  >
                    <Icon svg={<Plus/>} name="none" />
                  </S.IconButton>
                </S.Increment>
              </S.ActionBtn>
            </S.Items>
          );
        })}
        <S.Summary>
          <S.SubTotal>
            <span>{"Subtotal"}</span>
          </S.SubTotal>
          <S.Total>
            <span>{"Total"}</span>
          </S.Total>
          <Button fullWidth={true}>{"Checkout"}</Button>
        </S.Summary>
        <ProductList products={products.slice(0, 3)} />
      </Wrapper>
    </>
  );
};
const mapStateToProps = (state: IRootState) => {
  const carts = [...state.store.cart];
  return {
    carts,
  };
};
const mapDispatchToProps = {
  incrementQty: incrementCartQuantity,
  decrementQty: decrementCartQuantity,
  removeItem: removeProductFromCart,
  countItem: countCartItems,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Cart);
