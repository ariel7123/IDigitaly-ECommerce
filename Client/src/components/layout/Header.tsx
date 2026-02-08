// client/src/components/layout/Header.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useCart } from '../../store';
import './Header.scss';

const categoryMenus = {
  iphone: {
    title: 'iPhone',
    image: '/images/iphone-17-pro-max.png',
    items: [
      { name: 'iPhone 17 Pro Max', path: '/product/iphone-17-pro-max', isNew: true },
      { name: 'iPhone 17 Pro', path: '/product/iphone-17-pro', isNew: true },
      { name: 'iPhone 17 Air', path: '/product/iphone-17-air', isNew: true },
      { name: 'iPhone 17', path: '/product/iphone-17' },
      { name: 'iPhone 16', path: '/product/iphone-16' },
      { name: 'אביזרי iPhone', path: '/category/iphone/accessories' },
    ]
  },
  ipad: {
    title: 'iPad',
    image: '/images/ipad-air-m4-13.png',
    items: [
      { name: 'iPad Pro M4', path: '/product/ipad-pro-m4', isNew: true },
      { name: 'iPad Air M4', path: '/product/ipad-air-m4', isNew: true },
      { name: 'iPad 10th Gen', path: '/product/ipad-10' },
      { name: 'iPad mini', path: '/product/ipad-mini' },
      { name: 'אביזרי iPad', path: '/category/ipad/accessories' },
    ]
  },
  mac: {
    title: 'Mac',
    image: '/images/macbook-pro-m4-15.png',
    items: [
      { name: 'MacBook Air M4', path: '/product/macbook-air-m4', isNew: true },
      { name: 'MacBook Pro M4', path: '/product/macbook-pro-m4', isNew: true },
      { name: 'iMac M4', path: '/product/imac-m4' },
      { name: 'Mac mini M4', path: '/product/mac-mini-m4' },
      { name: 'Mac Studio M2', path: '/product/mac-studio-m2' },
      { name: 'אביזרי Mac', path: '/category/mac/accessories' },
    ]
  },
  watch: {
    title: 'Watch',
    image: '/images/watch-series-10.png',
    items: [
      { name: 'Apple Watch Ultra 2', path: '/product/watch-ultra-2', isNew: true },
      { name: 'Apple Watch Series 10', path: '/product/watch-series-10', isNew: true },
      { name: 'Apple Watch SE', path: '/product/watch-se' },
      { name: 'רצועות', path: '/category/watch/bands' },
    ]
  },
  airpods: {
    title: 'AirPods',
    image: '/images/airpods-pro-2.png',
    items: [
      { name: 'AirPods Pro 2', path: '/product/airpods-pro-2' },
      { name: 'AirPods 4', path: '/product/airpods-4', isNew: true },
      { name: 'AirPods Max', path: '/product/airpods-max' },
    ]
  },
  tv: {
    title: 'TV',
    image: '/images/Apple_logo_black.svg',
    items: [
      { name: 'Apple TV 4K', path: '/product/apple-tv-4k' },
      { name: 'אביזרים', path: '/category/tv/accessories' },
    ]
  },
  accessories: {
    title: 'אביזרים',
    image: '/images/airpods-4.png',
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
          <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/images/Apple_logo_black.svg" alt="Apple" className="logo__apple" />
            <h1>IDigitaly</h1>
          </Link>

          <nav className="nav">
            <ul className="nav__list">
              <li><Link to="/" className="nav__link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>בית</Link></li>
              <li><a href="#products" className="nav__link">מוצרים</a></li>

              {Object.entries(categoryMenus).map(([key, category]) => (
                <li key={key} className="nav__item nav__item--dropdown">
                  <Link to={`/category/${key}`} className="nav__link">
                    {category.title}
                  </Link>
                  <div className="nav__dropdown">
                    <div className="nav__dropdown-content">
                      <div className="nav__dropdown-links">
                        {category.items.map((item) => (
                          <Link key={item.path} to={item.path} className="nav__dropdown-link">
                            {item.name}
                            {item.isNew && <span className="nav__badge">חדש</span>}
                          </Link>
                        ))}
                      </div>
                      <div className="nav__dropdown-divider"></div>
                      <div className="nav__dropdown-image">
                        <img src={category.image} alt={category.title} />
                      </div>
                    </div>
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
