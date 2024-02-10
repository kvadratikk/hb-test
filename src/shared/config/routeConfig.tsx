import { RouteProps } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import MainPage from '../../pages/MainPage/MainPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import ShoppingCartPage from '../../pages/ShoppingCartPage/ShoppingCartPage';

export enum AppRoutes {
  MAIN = 'main',
  SHOPPING_CART = 'shopping-cart',
  ABOUT = 'about-us',
  PROFILE = 'profile',
  CONTACT = 'contact',
}

type AppConfig = RouteProps & {
  name: string;
  path: string;
};

export const navConfig: AppConfig[] = [
  {
    path: AppRoutes.MAIN,
    element: <MainPage />,
    name: 'На главную',
  },
  {
    path: AppRoutes.SHOPPING_CART,
    element: <ShoppingCartPage />,
    name: 'В коризну',
  },
  {
    path: AppRoutes.ABOUT,
    element: <AboutPage />,
    name: 'О нас',
  },
  {
    path: AppRoutes.PROFILE,
    element: <ProfilePage />,
    name: 'Личный кабинет',
  },
  {
    path: AppRoutes.CONTACT,
    element: <ContactPage />,
    name: 'Контакты',
  },
];

export const routeConfig: RouteProps[] = [
  ...navConfig,
  {
    path: '',
    element: <MainPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
