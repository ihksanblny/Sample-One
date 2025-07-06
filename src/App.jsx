import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import CatalogPage from './pages/CatalogPage';
import IntroScreen from './pages/IntroScreen';
import ChartPage from './pages/ChartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MainLayout from './components/MainLayout'; // <- Import Layout
import { CartProvider } from './logic/CardContext';

function AppWrapper() {
  const location = useLocation();
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (location.pathname !== '/') {
      setIntroDone(true);
    }
  }, [location.pathname]);

  // Tampilkan IntroScreen hanya di halaman root dan sekali saja
  if (!introDone && location.pathname === '/') {
    return <IntroScreen onFinish={() => setIntroDone(true)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/produk" element={<ProductPage />} />
        <Route path="/katalog" element={<CatalogPage />} />
        <Route path="/keranjang" element={<ChartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppWrapper />
      </Router>
    </CartProvider>
  );
}
