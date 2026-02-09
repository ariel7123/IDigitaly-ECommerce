// client/src/pages/Products.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';

type CategoryKey = 'all' | 'iphone' | 'ipad' | 'mac' | 'watch' | 'airpods' | 'tv' | 'accessories';

interface Product {
  id: string;
  name: string;
  category: CategoryKey;
  image: string;
  price: number;
  eilatPrice?: number;
  description: string;
  isNew?: boolean;
  path: string;
  colors?: string[];
}

const products: Product[] = [
  // iPhone
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    category: 'iphone',
    image: '/images/iphone-17-pro-max.png',
    price: 6499,
    eilatPrice: 5499,
    description: 'השיא של iPhone. מצלמה 48MP משופרת, שבב A19 Pro העוצמתי ביותר, וסוללה שמחזיקה יותר מאי פעם.',
    isNew: true,
    path: '/product/iphone-17-pro-max',
    // Natural Titanium, Black Titanium, White Titanium, Desert Titanium
    colors: ['#C4BCB1', '#1C1C1C', '#F5F5F7', '#B8A68E'],
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    category: 'iphone',
    image: '/images/iphone-17-pro.png',
    price: 5499,
    eilatPrice: 4649,
    description: 'ביצועי Pro בגודל מושלם. מצלמה פרו, מסך ProMotion, ועיצוב טיטניום קל משקל.',
    isNew: true,
    path: '/product/iphone-17-pro',
    // Natural Titanium, Black Titanium, White Titanium, Desert Titanium
    colors: ['#C4BCB1', '#1C1C1C', '#F5F5F7', '#B8A68E'],
  },
  {
    id: 'iphone-17-air',
    name: 'iPhone 17 Air',
    category: 'iphone',
    image: '/images/iphone-17-air.png',
    price: 4299,
    eilatPrice: 3639,
    description: 'הדק ביותר אי פעם. עיצוב אלגנטי במיוחד עם כל היכולות שאתה צריך.',
    isNew: true,
    path: '/product/iphone-17-air',
    // Sky Blue, Light Gold, Cloud White, Space Black
    colors: ['#87CEEB', '#D4C5A9', '#F5F5F7', '#1C1C1C'],
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    category: 'iphone',
    image: '/images/iphone-17.png',
    price: 3699,
    eilatPrice: 3129,
    description: 'iPhone לכולם. ביצועים מעולים, מצלמה מדהימה, וכל מה שאתה אוהב ב-iPhone.',
    path: '/product/iphone-17',
    // Black, White, Blue, Green, Pink
    colors: ['#1C1C1C', '#F5F5F7', '#5B9BD5', '#7FB069', '#F4A5C4'],
  },
  // iPad
  {
    id: 'ipad-pro-m4',
    name: 'iPad Pro M4',
    category: 'ipad',
    image: '/images/ipad-air-m4-13.png',
    price: 5299,
    eilatPrice: 4479,
    description: 'ה-iPad החזק ביותר. שבב M4 עוצמתי, מסך Ultra Retina XDR, ויכולות פרו ללא פשרות.',
    isNew: true,
    path: '/product/ipad-pro-m4',
  },
  {
    id: 'ipad-air-m4',
    name: 'iPad Air M4',
    category: 'ipad',
    image: '/images/ipad-air-m4-13.png',
    price: 3199,
    eilatPrice: 2699,
    description: 'עוצמה בקלילות. שבב M4 חדש, מסך Liquid Retina מדהים, ותאימות ל-Apple Pencil Pro.',
    isNew: true,
    path: '/product/ipad-air-m4',
  },
  // Mac
  {
    id: 'macbook-pro-m4',
    name: 'MacBook Pro M4',
    category: 'mac',
    image: '/images/macbook-pro-m4-15.png',
    price: 8999,
    eilatPrice: 7599,
    description: 'הנייד לאנשי מקצוע. שבב M4 Pro/Max, מסך Liquid Retina XDR, וביצועים שאין שני להם.',
    isNew: true,
    path: '/product/macbook-pro-m4',
    // Space Black, Silver
    colors: ['#1C1C1C', '#E8E8E8'],
  },
  {
    id: 'macbook-air-m4',
    name: 'MacBook Air M4',
    category: 'mac',
    image: '/images/macbook-pro-m4-16.png',
    price: 5499,
    eilatPrice: 4649,
    description: 'דק, קל, עוצמתי. שבב M4, סוללה לכל היום, ועיצוב שמושך מבטים.',
    isNew: true,
    path: '/product/macbook-air-m4',
    // Midnight, Starlight, Silver, Sky Blue
    colors: ['#1E3A5F', '#F5F0E6', '#E8E8E8', '#87CEEB'],
  },
  // Watch
  {
    id: 'watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    category: 'watch',
    image: '/images/watch-ultra-2.png',
    price: 3699,
    eilatPrice: 3129,
    description: 'השעון לכל הרפתקה. מסך הכי בהיר, GPS דו-תדרי, ועמידות קיצונית.',
    isNew: true,
    path: '/product/watch-ultra-2',
    // Natural Titanium, Black Titanium
    colors: ['#C4BCB1', '#1C1C1C'],
  },
  {
    id: 'watch-series-10',
    name: 'Apple Watch Series 10',
    category: 'watch',
    image: '/images/watch-series-10.png',
    price: 1999,
    eilatPrice: 1689,
    description: 'השעון המתקדם ביותר. מסך גדול יותר, דק יותר, עם כל יכולות הבריאות.',
    isNew: true,
    path: '/product/watch-series-10',
    // Jet Black, Rose Gold, Silver
    colors: ['#1C1C1C', '#E8C4B8', '#E8E8E8'],
  },
  // AirPods
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    category: 'airpods',
    image: '/images/airpods-pro-2.png',
    price: 1149,
    eilatPrice: 969,
    description: 'ביטול רעשים מוביל בתעשייה. שמע מרחבי, ושקיפות משופרת.',
    path: '/product/airpods-pro-2',
  },
  {
    id: 'airpods-4',
    name: 'AirPods 4',
    category: 'airpods',
    image: '/images/airpods-4.png',
    price: 699,
    eilatPrice: 589,
    description: 'עיצוב חדש, נוחות מושלמת. שמע איכותי עם שבב H2.',
    isNew: true,
    path: '/product/airpods-4',
  },
];

const categories = [
  { key: 'all' as CategoryKey, label: 'הכל', icon: '✨' },
  { key: 'iphone' as CategoryKey, label: 'iPhone', icon: '📱' },
  { key: 'ipad' as CategoryKey, label: 'iPad', icon: '📲' },
  { key: 'mac' as CategoryKey, label: 'Mac', icon: '💻' },
  { key: 'watch' as CategoryKey, label: 'Watch', icon: '⌚' },
  { key: 'airpods' as CategoryKey, label: 'AirPods', icon: '🎧' },
];

const features = [
  { icon: '🚚', title: 'משלוח חינם', description: 'בהזמנה מעל 399 ש"ח' },
  { icon: '💳', title: 'עד 36 תשלומים', description: 'מחוץ למסגרת האשראי' },
  { icon: '👥', title: 'ליווי מומחים', description: 'גם לאחר הקנייה' },
  { icon: '🔒', title: 'אחריות מלאה', description: 'משווק מורשה Apple' },
];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCategoryChange = (category: CategoryKey) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 200);
  };

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL').format(price);
  };

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero__content">
            <h1 className="products-hero__title">
              חנות אונליין מוצרי <span className="gradient-text">Apple</span>
            </h1>
            <p className="products-hero__subtitle">
              גלה את כל מוצרי Apple במקום אחד. משווק מורשה עם אחריות מלאה.
            </p>
          </div>
        </div>
        <div className="products-hero__bg" />
      </section>

      {/* Features Bar */}
      <section className="products-features">
        <div className="container">
          <div className="products-features__grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-item__icon">{feature.icon}</span>
                <div className="feature-item__text">
                  <span className="feature-item__title">{feature.title}</span>
                  <span className="feature-item__desc">{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="products-filter">
        <div className="container">
          <div className="products-filter__wrapper">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`filter-pill ${activeCategory === cat.key ? 'filter-pill--active' : ''}`}
                onClick={() => handleCategoryChange(cat.key)}
              >
                <span className="filter-pill__icon">{cat.icon}</span>
                <span className="filter-pill__label">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className={`products-grid ${isAnimating ? 'products-grid--animating' : ''}`}>
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={product.path}
                className="product-card"
              >
                {product.isNew && (
                  <span className="product-card__badge">חדש</span>
                )}
                <div className="product-card__image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-card__image"
                  />
                </div>
                <div className="product-card__content">
                  <h3 className="product-card__name">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>
                  <div className="product-card__info-row">
                    <div className="product-card__pricing">
                      <div className="product-card__price">
                        <span className="product-card__price-label">החל מ-</span>
                        <span className="product-card__price-value">{formatPrice(product.price)} ש"ח</span>
                      </div>
                      {product.eilatPrice && (
                        <div className="product-card__eilat">
                          <span className="product-card__eilat-label">מחיר אילת:</span>
                          <span className="product-card__eilat-value">{formatPrice(product.eilatPrice)} ש"ח</span>
                        </div>
                      )}
                    </div>
                    {product.colors && product.colors.length > 0 && (
                      <div className="product-card__colors">
                        {product.colors.map((color, idx) => (
                          <span
                            key={idx}
                            className="product-card__color"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="product-card__cta">
                    <span className="product-card__btn">
                      לרכישה
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="products-empty">
              <span className="products-empty__icon">🔍</span>
              <p>לא נמצאו מוצרים בקטגוריה זו</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
