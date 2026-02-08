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
              <li><Link to="/category/iphone" className="nav__link">iPhone</Link></li>
              <li><Link to="/category/ipad" className="nav__link">iPad</Link></li>
              <li><Link to="/category/mac" className="nav__link">Mac</Link></li>
              <li><Link to="/category/watch" className="nav__link">Apple Watch</Link></li>
              <li><Link to="/category/airpods" className="nav__link">AirPods</Link></li>
              <li><Link to="/category/tv" className="nav__link">Apple TV</Link></li>
              <li><Link to="/category/accessories" className="nav__link">Accessories</Link></li>
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
                  התנתק
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
