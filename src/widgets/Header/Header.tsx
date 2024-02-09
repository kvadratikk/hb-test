import { useEffect } from 'react';
import useShoppingCartStore, { ShoppingCartStore } from '../../entities/ShoppingCart/ShoppingCart';
import Nav from './Nav/Nav';

const Header = () => {
  const header = useShoppingCartStore((state: ShoppingCartStore) => state.header);
  const getHeader = useShoppingCartStore((state: ShoppingCartStore) => state.getHeader);

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
