// client/src/components/layout/Header.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useCart } from '../../store';
import './Header.scss';

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="logo">
            <h1>IDigitaly</h1>
          </Link>

          <nav className="nav">
            <ul className="nav__list">
              <li><Link to="/" className="nav__link">Home</Link></li>
              <li><a href="#products" className="nav__link">Products</a></li>
              <li><a href="#about" className="nav__link">About</a></li>
            </ul>
          </nav>

          <div className="header__actions">
            <button className="btn-cart" id="cartToggle">
              <span className="cart-icon">🛒</span>
              {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
              )}
            </button>

            {isAuthenticated ? (
              <div className="user-menu">
                <span className="user-name">{user?.name}</span>
                <button className="btn btn--secondary" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn--primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
