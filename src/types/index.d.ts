declare namespace CustomRouter {
    interface Route {
      name: string
      path: string
      params?: string
      exact?: boolean
      comp: React.FunctionComponent<any>
    }
  }

declare module "*.png" {
  const value: any;
  export = value;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


declare type Product = {
    desc:string,
    name:string,
    price:string,
    qty:string,
    url:string,
    thumbnail:string,
    id:number
}
type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };
declare type IAppState = {
  products: NoUndefindField<Array<Product>>,
  cart: {
      product:Product
      quantity:number
  }[]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;