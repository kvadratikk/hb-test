import { useEffect } from 'react';
import useShoppingCartStore from '../../entities/ShoppingCart/ShoppingCart';
import Nav from './Nav/Nav';

import BaseImage from '../../shared/ui/BaseImage/BaseImage';
import Dropdown from '../../shared/ui/Dropdown/Dropdown';
import styles from './Header.module.scss';

const Header = () => {
  const header = useShoppingCartStore(({ header }) => header);
  const getHeader = useShoppingCartStore(({ getHeader }) => getHeader);

  useEffect(() => {
    if (!header) getHeader();
  }, [header, getHeader]);

  const dropdownBtn = (
    <BaseImage className={styles.image} code={header?.LogoImg || ''} alt='user' />
  );

  const dropdownItems = [
    {
      item: header?.UserName,
      key: 2,
    },
    {
      item: 'Выход',
      key: 3,
    },
  ];

  return (
    <header className={styles.header}>
      <Nav />
      <Dropdown items={dropdownItems} button={dropdownBtn} />
    </header>
  );
};

export default Header;
