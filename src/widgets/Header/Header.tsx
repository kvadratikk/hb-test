import { useEffect } from 'react';
import useShoppingCartStore from '../../entities/ShoppingCart/ShoppingCart';
import Nav from './Nav/Nav';

const Header = () => {
  const header = useShoppingCartStore(({ header }) => header);
  const getHeader = useShoppingCartStore(({ getHeader }) => getHeader);

  console.log('render');

  useEffect(() => {
    if (!header) getHeader();
  }, [header, getHeader]);

  return (
    <header>
      <Nav />
      <button>{header?.UserName}</button>
    </header>
  );
};

export default Header;
