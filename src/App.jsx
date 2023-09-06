import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import OccasionPage from './pages/OccasionPage';
import DetailPage from './pages/DetailPage';
import Navigation from './components/Navigation';
import ProductByOccasionPage from './pages/ProductByOccasionPage';
import Loading from './components/Loading';
import './App.css';

function App() {
  const { isPreload = false, authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onLogout = () => {
    // TODO: dispatch async to logout | asyncUnsetAuthUser()
  };

  useEffect(() => {
    // TODO: dispatch async action to preload app | asyncPreloadProcess()
  }, [dispatch]);

  if (isPreload) {
    console.log('(App.jsx) App is preloading..');
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} logOut={onLogout} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/occasion" element={<OccasionPage />} />
            <Route path="/product/:productId" element={<DetailPage />} />
            <Route path="/occasion/:occasionId" element={<ProductByOccasionPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
