import { NavLink } from 'react-router-dom';
import { navConfig } from '../../../shared/config/routeConfig';

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      {navConfig.map(({ path, name }) => (
        <NavLink className={styles.navLink} to={path} key={path}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
