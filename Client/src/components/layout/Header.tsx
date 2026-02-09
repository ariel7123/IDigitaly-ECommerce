// client/src/components/layout/Header.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useCart } from '../../store';
import './Header.scss';

interface MenuItem {
  name: string;
  path: string;
  isNew?: boolean;
  subItems?: MenuItem[];
}

interface CategoryMenu {
  title: string;
  image: string;
  items: MenuItem[];
}

const categoryMenus: Record<string, CategoryMenu> = {
  iphone: {
    title: 'iPhone',
    image: '/images/iphone-17-pro-max.png',
    items: [
      { name: 'iPhone 17 Pro Max', path: '/product/iphone-17-pro-max', isNew: true },
      { name: 'iPhone 17 Pro', path: '/product/iphone-17-pro', isNew: true },
      { name: 'iPhone 17 Air', path: '/product/iphone-17-air', isNew: true },
      { name: 'iPhone 17', path: '/product/iphone-17', isNew: true },
      {
        name: 'iPhone 16', path: '/category/iphone-16', subItems: [
          { name: 'iPhone 16 Pro Max', path: '/product/iphone-16-pro-max' },
          { name: 'iPhone 16 Plus', path: '/product/iphone-16-plus' },
          { name: 'iPhone 16e', path: '/product/iphone-16e' },
          { name: 'iPhone 16', path: '/product/iphone-16' },
        ]
      },
      {
        name: 'iPhone 15', path: '/category/iphone-15', subItems: [
          { name: 'iPhone 15', path: '/product/iphone-15' },
        ]
      },
      {
        name: 'iPhone 14', path: '/category/iphone-14', subItems: [
          { name: 'iPhone 14 Plus', path: '/product/iphone-14-plus' },
          { name: 'iPhone 14', path: '/product/iphone-14' },
        ]
      },
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
    title: 'TV & Home',
    image: '/images/appletv4k.png',
    items: [
      { name: 'Apple TV 4K', path: '/product/apple-tv-4k', isNew: true },
      { name: 'HomePod', path: '/product/homepod' },
      { name: 'HomePod mini', path: '/product/homepod-mini' },
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
              <li><Link to="/products" className="nav__link">מוצרים</Link></li>

              {Object.entries(categoryMenus).map(([key, category]) => (
                <li key={key} className="nav__item nav__item--dropdown">
                  <Link to={`/category/${key}`} className="nav__link">
                    {category.title}
                  </Link>
                  <div className="nav__dropdown">
                    <div className="nav__dropdown-content">
                      <div className="nav__dropdown-links">
                        {category.items.map((item) => (
                          item.subItems ? (
                            <div key={item.path} className="nav__submenu-wrapper">
                              <span className="nav__dropdown-link nav__dropdown-link--has-sub">
                                {item.name}
                                <span className="nav__chevron">&#8250;</span>
                              </span>
                              <div className="nav__submenu">
                                {item.subItems.map((sub) => (
                                  <Link key={sub.path} to={sub.path} className="nav__dropdown-link">
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link key={item.path} to={item.path} className="nav__dropdown-link">
                              {item.name}
                              {item.isNew && <span className="nav__badge">חדש</span>}
                            </Link>
                          )
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
