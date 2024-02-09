import Header from '../widgets/Header/Header';
import AppRouter from './router/AppRouter';

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
