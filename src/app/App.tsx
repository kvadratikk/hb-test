import Header from '../widgets/Header/Header';
import AppRouter from './router/AppRouter';

import './styles/index.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
    </>
  );
}

export default App;
