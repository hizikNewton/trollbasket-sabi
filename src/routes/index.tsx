import { FC, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//import Page from "../components/Page";

const Cart = lazy(() => import("../pages/Cart"));
const Home = lazy(() => import("../pages/Home/Home"));
const Detail = lazy(() => import("../pages/ProductDetail"));
const Checkout = lazy(() => import("../pages/Checkout"));

const Containers: CustomRouter.Route[] = [
  {
    name: "Home",
    path: "/",
    exact: true,
    comp: Home,
  },
  {
    name: "Detail",
    path: "/product-detail/:id",
    exact: true,
    comp: Detail,
  },
  {
    name: "Cart",
    path: "/cart",
    exact: true,
    comp: Cart,
  },
  {
    name: "Checkout",
    path: "/checkout",
    exact: true,
    comp: Checkout,
  },
];

const RouterComp = ({
  container,
  routeProps,
}: {
  container: CustomRouter.Route;
  routeProps: any;
}) => {
  return <container.comp {...routeProps} />;
};

const Routes: FC = () => {
  return (
    <Router>
      <Route
        render={(props: any) => (
          <Suspense fallback={<span />}>
            <Switch location={props.location}>
              {Containers.map((container) => (
                <Route
                  {...container}
                  key={container.name}
                  render={(routeProps) => (
                    <RouterComp container={container} routeProps={routeProps} />
                  )}
                />
              ))}
              <Redirect from="*" to="/404" />
            </Switch>
          </Suspense>
        )}
      />
    </Router>
  );
};

export default Routes;
