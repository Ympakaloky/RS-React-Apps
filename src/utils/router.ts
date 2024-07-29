import { RouteObject } from 'react-router-dom';
import { PATHS } from '../store/enum';
import App from '../app/App';
import Page404 from '../components/page404/page404';

const myRouter: RouteObject[] = [
  { path: PATHS.MAIN, Component: App },
  { path: PATHS.POKEMON, Component: App },
  { path: PATHS.ERROR404, Component: Page404 },
  { path: `${PATHS.POKEMON}/*`, Component: App },
  // { path: RoutePaths.BASKET, Component: BasketPage },
  // { path: `${RoutePaths.WATCHES}/:categorySlug`, Component: CatalogPage },
  // { path: `${RoutePaths.WATCHES}`, Component: CatalogPage },
  // { path: `${RoutePaths.PRODUCT}/*`, Component: ProductPage },
];
export default myRouter;
