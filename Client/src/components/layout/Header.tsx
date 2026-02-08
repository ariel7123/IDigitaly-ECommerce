// client/src/components/layout/Header.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useCart } from '../../store';
import './Header.scss';

const categoryMenus = {
  iphone: {
    title: 'iPhone',
    items: [
      { name: 'iPhone 16 Pro Max', path: '/product/iphone-16-pro-max', isNew: true },
      { name: 'iPhone 16 Pro', path: '/product/iphone-16-pro', isNew: true },
      { name: 'iPhone 16 Plus', path: '/product/iphone-16-plus' },
      { name: 'iPhone 16', path: '/product/iphone-16' },
      { name: 'iPhone 15', path: '/product/iphone-15' },
      { name: 'אביזרי iPhone', path: '/category/iphone/accessories' },
    ]
  },
  ipad: {
    title: 'iPad',
    items: [
      { name: 'iPad Pro M4', path: '/product/ipad-pro-m4', isNew: true },
      { name: 'iPad Air M2', path: '/product/ipad-air-m2', isNew: true },
      { name: 'iPad 10th Gen', path: '/product/ipad-10' },
      { name: 'iPad mini', path: '/product/ipad-mini' },
      { name: 'אביזרי iPad', path: '/category/ipad/accessories' },
    ]
  },
  mac: {
    title: 'Mac',
    items: [
      { name: 'MacBook Air M3', path: '/product/macbook-air-m3', isNew: true },
      { name: 'MacBook Pro M3', path: '/product/macbook-pro-m3', isNew: true },
      { name: 'iMac M3', path: '/product/imac-m3' },
      { name: 'Mac mini M2', path: '/product/mac-mini-m2' },
      { name: 'Mac Studio M2', path: '/product/mac-studio-m2' },
      { name: 'אביזרי Mac', path: '/category/mac/accessories' },
    ]
  },
  watch: {
    title: 'Watch',
    items: [
      { name: 'Apple Watch Ultra 2', path: '/product/watch-ultra-2', isNew: true },
      { name: 'Apple Watch Series 10', path: '/product/watch-series-10', isNew: true },
      { name: 'Apple Watch SE', path: '/product/watch-se' },
      { name: 'רצועות', path: '/category/watch/bands' },
    ]
  },
  airpods: {
    title: 'AirPods',
    items: [
      { name: 'AirPods Pro 2', path: '/product/airpods-pro-2' },
      { name: 'AirPods 4', path: '/product/airpods-4', isNew: true },
      { name: 'AirPods Max', path: '/product/airpods-max' },
    ]
  },
  tv: {
    title: 'TV',
    items: [
      { name: 'Apple TV 4K', path: '/product/apple-tv-4k' },
      { name: 'אביזרים', path: '/category/tv/accessories' },
    ]
  },
  accessories: {
    title: 'אביזרים',
    items: [
      { name: 'כיסויים', path: '/category/accessories/cases' },
      { name: 'MagSafe', path: '/category/accessories/magsafe' },
      { name: 'מטענים וכבלים', path: '/category/accessories/chargers' },
      { name: 'מקלדות ועכברים', path: '/category/accessories/input' },
      { name: 'AirTag', path: '/product/airtag' },
    ]
  },
};

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
              <li><a href="#" className="nav__link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>בית</a></li>
              <li><a href="#products" className="nav__link">מוצרים</a></li>

              {Object.entries(categoryMenus).map(([key, category]) => (
                <li key={key} className="nav__item nav__item--dropdown">
                  <Link to={`/category/${key}`} className="nav__link">
                    {category.title}
                  </Link>
                  <div className="nav__dropdown">
                    {category.items.map((item) => (
                      <Link key={item.path} to={item.path} className="nav__dropdown-link">
                        {item.name}
                        {item.isNew && <span className="nav__badge">חדש</span>}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}

              <li><Link to="/about" className="nav__link">אודות</Link></li>
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
