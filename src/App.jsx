// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import IntroScreen from './pages/IntroScreen';

function AppWrapper() {
  const location = useLocation();
  const [introDone, setIntroDone] = useState(false);

  // Skip intro if not on root path
  useEffect(() => {
    if (location.pathname !== '/') {
      setIntroDone(true);
    }
  }, [location.pathname]);

  if (!introDone && location.pathname === '/') {
    return <IntroScreen onFinish={() => setIntroDone(true)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/produk" element={<ProductPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
