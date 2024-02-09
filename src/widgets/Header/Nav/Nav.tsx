import { NavLink } from 'react-router-dom';
import { navConfig } from '../../../shared/config/routeConfig';

const Nav = () => {
  return (
    <nav>
      {navConfig.map(({ path, name }) => (
        <NavLink to={path} key={path}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
