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
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/images/Apple_logo_black.svg" alt="Apple" className="logo__apple" />
            <h1>IDigitaly</h1>
          </a>

          <nav className="nav">
            <ul className="nav__list">
              <li><a href="#" className="nav__link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
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
                התחבר / הירשם
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
