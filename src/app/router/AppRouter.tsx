import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../shared/config/routeConfig';

const AppRouter = () => {
  const routes = routeConfig.map(({ path, element }) => (
    <Route key={path} path={`/${path}`} element={<div className='page-wrapper'>{element}</div>} />
  ));

  return <Routes>{routes}</Routes>;
};

export default AppRouter;
