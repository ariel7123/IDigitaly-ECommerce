// client/src/App.tsx
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './store';

// Layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';

// Components
import Toast from './components/common/Toast';
import CartSidebar from './components/features/CartSidebar';

function App() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <CartSidebar />
      <Toast />
      <Footer />
    </div>
  );
}

export default App;
