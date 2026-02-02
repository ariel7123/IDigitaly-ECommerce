// client/src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import './Home.scss';

// iPhone 17 Pro Max carousel images - add your images here
const proMaxImages = [
  '/images/iphone-17-pro-max.png',
  '/images/iphone-17-pro-max-2.png',
  '/images/iphone-17-pro-max-3.png',
  '/images/iphone-17-pro-max-4.png',
];

// Apple Products Data - Latest 2025 Models
// Replace placeholder images with actual product images in /public/images/products/
const featuredProducts = [
  {
    id: '1',
    name: 'iPhone 17 Pro Max',
    description: 'A19 Pro. קירור Vapor Chamber. מצלמת טלפוטו 4x/8x. הסוללה הגדולה ביותר.',
    price: 6499,
    originalPrice: 6799,
    category: 'iphone',
    image: '/images/iphone-17-pro-max.png',
    badge: 'חדש',
    colors: ['#c5b8a5', '#1f1f1f', '#f5f5f0', '#757779'],
  },
  {
    id: '2',
    name: 'iPhone 17 Pro',
    description: 'A19 Pro chip. קירור Vapor Chamber. 256GB בסיס. מצלמת טלפוטו משודרגת.',
    price: 5799,
    category: 'iphone',
    image: '/images/iphone-17-pro.png',
    colors: ['#c5b8a5', '#1f1f1f', '#f5f5f0', '#757779'],
  },
  {
    id: '3',
    name: 'iPhone 17 Air',
    description: 'A19 Pro. הדק ביותר - 5.6 מ״מ. מסגרת טיטניום. 6.5 אינץ\'.',
    price: 4799,
    category: 'iphone',
    image: '/images/iphone-17-air.png',
    badge: 'חדש',
    colors: ['#f5f5f0', '#1f1f1f', '#c5b8a5'],
  },
  {
    id: '4',
    name: 'iPhone 17',
    description: 'A19 chip. ProMotion 120Hz. Always-On. Wi-Fi 7. Ceramic Shield 2.',
    price: 3999,
    category: 'iphone',
    image: '/images/iphone-17.png',
    colors: ['#3c3c9c', '#e8d4c4', '#cee4dc', '#fadadd', '#1f1f1f'],
  },
  {
    id: '5',
    name: 'MacBook Pro 16" M4',
    description: 'M4 chip. גרפיקה מהירה פי 1.6. SSD מהיר פי 2. עד 24 שעות סוללה.',
    price: 7999,
    category: 'mac',
    image: '/images/macbook-pro-m4-16.png',
    badge: 'M4 חדש',
    colors: ['#1f1f1f', '#86868b'],
  },
  {
    id: '6',
    name: 'MacBook Air 15" M4',
    description: 'M4 chip. 16GB זיכרון. תמיכה ב-2 מסכים. 18 שעות סוללה. צבע Sky Blue חדש.',
    price: 5999,
    category: 'mac',
    image: '/images/macbook-pro-m4-15.png',
    colors: ['#87CEEB', '#2e3642', '#86868b', '#f5f5f0', '#e3d7c5'],
  },
  {
    id: '7',
    name: 'iPad Pro 13" M4',
    description: 'M4 chip. ביצועי AI מהירים פי 3.5. Wi-Fi 7. מודם C1X.',
    price: 6999,
    category: 'ipad',
    image: '/images/ipad-air-m4-13.png',
    badge: 'M4 חדש',
    colors: ['#86868b', '#1f1f1f'],
  },
  {
    id: '8',
    name: 'iPad Air 13" M3',
    description: 'M3 chip. Ray Tracing. Magic Keyboard חדש. מסך Liquid Retina.',
    price: 4499,
    category: 'ipad',
    image: '/images/ipad-air-m3-13.png',
    colors: ['#86868b', '#e3d7c5', '#c9c9ca', '#b8dce0', '#d5c4e5'],
  },
  {
    id: '9',
    name: 'Apple Watch Ultra 2',
    description: 'S9 SiP. 3000 nits. GPS מדויק. 72 שעות סוללה.',
    price: 3999,
    category: 'watch',
    image: '/images/watch-ultra-2.png',
    badge: 'Ultra',
  },
  {
    id: '10',
    name: 'Apple Watch Series 10',
    description: 'מסך הכי גדול. הכי דק אי פעם. S10 SiP.',
    price: 2099,
    category: 'watch',
    image: '/images/watch-series-10.png',
    colors: ['#f5e6cf', '#3b3b3b', '#d4a489'],
  },
  {
    id: '11',
    name: 'AirPods Pro 2',
    description: 'USB-C. ביטול רעשים אקטיבי 2x. שמע מרחבי מותאם.',
    price: 1049,
    category: 'airpods',
    image: '/images/airpods-pro-2.png',
    badge: 'הכי נמכר',
  },
  {
    id: '12',
    name: 'AirPods 4',
    description: 'עיצוב חדש. H2 chip. שמע מרחבי מותאם אישית.',
    price: 799,
    category: 'airpods',
    image: '/images/airpods-4.png',
  },
];

const categories = [
  {
    id: 'iphone',
    name: 'iPhone',
    description: 'הסמארטפון המתקדם בעולם',
    image: '/images/categories/iphone-category.png',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 'mac',
    name: 'Mac',
    description: 'עוצמה שמניעה קדימה',
    image: '/images/categories/mac-category.png',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
  },
  {
    id: 'ipad',
    name: 'iPad',
    description: 'הטאבלט שמשנה הכל',
    image: '/images/categories/ipad-category.png',
    gradient: 'linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)',
  },
  {
    id: 'watch',
    name: 'Apple Watch',
    description: 'השעון החכם שלך',
    image: '/images/categories/watch-category.png',
    gradient: 'linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)',
  },
  {
    id: 'airpods',
    name: 'AirPods',
    description: 'קסם אלחוטי',
    image: '/images/categories/airpods-category.png',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    id: 'accessories',
    name: 'אביזרים',
    description: 'השלמה מושלמת',
    image: '/images/categories/accessories-category.png',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
];

const benefits = [
  {
    icon: '✓',
    title: 'משווק מורשה של Apple',
    description: 'כל המוצרים מקוריים עם אחריות יצרן מלאה',
  },
  {
    icon: '🚚',
    title: 'משלוח חינם',
    description: 'משלוח חינם לכל רחבי הארץ בהזמנות מעל ₪500',
  },
  {
    icon: '🔄',
    title: '14 יום להחזרה',
    description: 'לא מרוצים? מחזירים את הכסף ללא שאלות',
  },
  {
    icon: '🛡️',
    title: 'אחריות מורחבת',
    description: 'אפשרות להרחבת אחריות עד 3 שנים',
  },
  {
    icon: '💳',
    title: 'תשלומים נוחים',
    description: 'עד 36 תשלומים ללא ריבית',
  },
  {
    icon: '🎧',
    title: 'תמיכה טכנית',
    description: 'צוות מומחים זמין לכל שאלה',
  },
];

const promos = [
  {
    id: 1,
    title: 'iPhone 17 Pro',
    subtitle: 'הדור הבא של החדשנות. עיצוב מרהיב, ביצועים ללא תחרות.',
    cta: 'קנה עכשיו',
    backgroundImages: [
      '/images/promos/iphone-promo-bg-1.jpg',
      '/images/promos/iphone-promo-bg-2.jpg',
      '/images/promos/iphone-promo-bg-3.jpg',
      '/images/promos/iphone-promo-bg-4.jpg',
      '/images/promos/iphone-promo-bg-5.jpg',
      '/images/promos/iphone-promo-bg-6.jpg',
      '/images/promos/iphone-promo-bg-7.jpg',
      '/images/promos/iphone-promo-bg-8.jpg',
      '/images/promos/iphone-promo-bg-9.jpg',
      '/images/promos/iphone-promo-bg-10.jpg',
      '/images/promos/iphone-promo-bg-11.jpg',
    ],
    gradient: 'linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
    textColor: 'light',
  },
  {
    id: 2,
    title: 'Mac',
    subtitle: 'כוח-על שפותח את הדלת ליצירתיות בלתי מוגבלת.',
    cta: 'גלה עוד',
    backgroundImages: [
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-1.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-2.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-3.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-4.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-5.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-6.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-7.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-8.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-9.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-10.jpg',
      '/images/promos/macbooks%20for%20banner/macbook-promo-bg-11.jpg',
    ],
    gradient: 'linear-gradient(135deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
    textColor: 'light',
  },
];

const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [email, setEmail] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [promoImageIndex, setPromoImageIndex] = useState(0);
  const [macPromoImageIndex, setMacPromoImageIndex] = useState(0);
  const [isIphonePromoHovered, setIsIphonePromoHovered] = useState(false);
  const [isMacPromoHovered, setIsMacPromoHovered] = useState(false);

  // Auto-rotate carousel images every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % proMaxImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Auto-rotate iPhone promo banner images
  useEffect(() => {
    const iphonePromo = promos.find(p => p.id === 1);
    if (!iphonePromo || iphonePromo.backgroundImages.length <= 1) return;

    const interval = setInterval(() => {
      if (!isIphonePromoHovered) {
        setPromoImageIndex((prevIndex) =>
          (prevIndex + 1) % iphonePromo.backgroundImages.length
        );
      }
    }, 2300);

    return () => clearInterval(interval);
  }, [isIphonePromoHovered]);

  // Auto-rotate Mac promo banner images
  useEffect(() => {
    const macPromo = promos.find(p => p.id === 2);
    if (!macPromo || macPromo.backgroundImages.length <= 1) return;

    const interval = setInterval(() => {
      if (!isMacPromoHovered) {
        setMacPromoImageIndex((prevIndex) =>
          (prevIndex + 1) % macPromo.backgroundImages.length
        );
      }
    }, 2300);

    return () => clearInterval(interval);
  }, [isMacPromoHovered]);

  const filteredProducts = activeCategory === 'all'
    ? featuredProducts
    : featuredProducts.filter(p => p.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('he-IL', {
      style: 'currency',
      currency: 'ILS',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    alert('תודה! נרשמת בהצלחה לניוזלטר');
    setEmail('');
  };

  return (
    <>
      {/* Video Hero Section */}
      <section className="video-hero">
        <video
          className="video-hero__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/src/assets/videos/apple-products.mp4" type="video/mp4" />
        </video>
        <div className="video-hero__content">
          <span className="video-hero__tagline">משווק מורשה של Apple</span>
          <h1 className="video-hero__title">
            <span className="video-hero__title-highlight">IDigitaly</span>
          </h1>
          <p className="video-hero__subtitle">
            מוצרי Apple מקוריים <span className="video-hero__divider">•</span> אחריות יצרן מלאה <span className="video-hero__divider">•</span> משלוח עד הבית
          </p>
          <div className="video-hero__buttons">
            <a href="#products" className="video-hero__cta video-hero__cta--primary">
              קנה עכשיו
            </a>
            <a href="#categories" className="video-hero__cta video-hero__cta--secondary">
              גלה מוצרים
            </a>
          </div>
        </div>
        <div className="video-hero__scroll">
          <span></span>
        </div>
      </section>

      {/* Apple Authorized Badge */}
      <section className="authorized-badge">
        <div className="container">
          <div className="authorized-badge__content">
            <div className="authorized-badge__icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
            </div>
            <div className="authorized-badge__text">
              <h3>משווק מורשה של Apple</h3>
              <p>IDigitaly היא חנות מורשית של Apple בישראל. כל המוצרים שלנו מקוריים ומגיעים עם אחריות יצרן מלאה.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories" id="categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">גלו את עולם Apple</h2>
            <p className="section-subtitle">בחרו קטגוריה והתחילו לקנות</p>
          </div>
          <div className="categories__grid">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#products`}
                className="category-card"
                onClick={() => setActiveCategory(category.id)}
                style={{ background: category.gradient }}
              >
                <div className="category-card__icon">
                  {category.id === 'iphone' && (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/></svg>
                  )}
                  {category.id === 'mac' && (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
                  )}
                  {category.id === 'ipad' && (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/></svg>
                  )}
                  {category.id === 'watch' && (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"/></svg>
                  )}
                  {category.id === 'airpods' && (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
                  )}
                  {category.id === 'accessories' && (
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"/></svg>
                  )}
                </div>
                <h3 className="category-card__name">{category.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banners */}
      <section className="promo-banners">
        <div className="container">
          <div className="promo-banners__grid">
            {promos.map((promo) => {
              const currentBgIndex = promo.id === 1 ? promoImageIndex : promo.id === 2 ? macPromoImageIndex : 0;
              const setHovered = promo.id === 1 ? setIsIphonePromoHovered : setIsMacPromoHovered;
              const setIndex = promo.id === 1 ? setPromoImageIndex : setMacPromoImageIndex;
              return (
                <div
                  key={promo.id}
                  className={`promo-banner promo-banner--${promo.textColor}`}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {/* Background images carousel */}
                  {promo.backgroundImages.map((img, idx) => (
                    <div
                      key={idx}
                      className={`promo-banner__bg ${idx === currentBgIndex ? 'active' : ''}`}
                      style={{
                        backgroundImage: `url(${img})`,
                      }}
                    />
                  ))}
                  {/* Gradient overlay for text readability */}
                  <div className="promo-banner__overlay" />
                  <div className="promo-banner__content">
                    <h3 className="promo-banner__title">{promo.title}</h3>
                    <p className="promo-banner__subtitle">{promo.subtitle}</p>
                    <button className="promo-banner__cta">{promo.cta}</button>
                  </div>
                  {/* Dots indicator */}
                  {promo.backgroundImages.length > 1 && (
                    <div className="promo-banner__dots">
                      {promo.backgroundImages.map((_, idx) => (
                        <span
                          key={idx}
                          className={`promo-banner__dot ${idx === currentBgIndex ? 'active' : ''}`}
                          onClick={() => setIndex(idx)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">המוצרים שלנו</h2>
            <p className="section-subtitle">מוצרי Apple מקוריים באחריות מלאה</p>
          </div>

          {/* Category Filters */}
          <div className="filters">
            <button
              className={`filter-btn ${activeCategory === 'all' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              הכל
            </button>
            <button
              className={`filter-btn ${activeCategory === 'iphone' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('iphone')}
            >
              iPhone
            </button>
            <button
              className={`filter-btn ${activeCategory === 'mac' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('mac')}
            >
              Mac
            </button>
            <button
              className={`filter-btn ${activeCategory === 'ipad' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('ipad')}
            >
              iPad
            </button>
            <button
              className={`filter-btn ${activeCategory === 'watch' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('watch')}
            >
              Watch
            </button>
            <button
              className={`filter-btn ${activeCategory === 'airpods' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory('airpods')}
            >
              AirPods
            </button>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                {product.badge && (
                  <span className="product-card__badge">{product.badge}</span>
                )}
                <div className="product-card__image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>
                <div className="product-card__info">
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>
                  {product.colors && (
                    <div className="product-card__colors">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className="product-card__color"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  )}
                  <div className="product-card__footer">
                    <div className="product-card__pricing">
                      <span className="product-card__price">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="product-card__original-price">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <button className="product-card__button">הוסף לסל</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="products__view-all">
            <button className="btn btn--secondary btn--large">צפה בכל המוצרים</button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">למה לקנות ב-IDigitaly?</h2>
            <p className="section-subtitle">היתרונות שלנו מדברים בעד עצמם</p>
          </div>
          <div className="benefits__grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-card__icon">{benefit.icon}</div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="featured-banner">
        <div className="container">
          <div className="featured-banner__content">
            <div className="featured-banner__text">
              <span className="featured-banner__label">מבצע מיוחד</span>
              <h2 className="featured-banner__title">iPhone 17 Pro Max</h2>
              <p className="featured-banner__description">
                הטלפון החזק ביותר שיצרנו אי פעם. שבב A19 Pro עם קירור Vapor Chamber,
                מצלמת טלפוטו 4x/8x והסוללה הגדולה ביותר באייפון. זמין עכשיו במחיר מיוחד.
              </p>
              <div className="featured-banner__price">
                <span className="featured-banner__current-price">₪6,499</span>
                <span className="featured-banner__original-price">₪6,799</span>
              </div>
              <button className="featured-banner__cta">קנה עכשיו</button>
            </div>
            <a href="#" className="featured-banner__image-link">
              <div className="featured-banner__image">
                {proMaxImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`iPhone 17 Pro Max ${index + 1}`}
                    className={`featured-banner__carousel-img ${index === currentImageIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter__content">
            <h2 className="newsletter__title">הישארו מעודכנים</h2>
            <p className="newsletter__description">
              הירשמו לניוזלטר שלנו וקבלו עדכונים על מוצרים חדשים, מבצעים והטבות בלעדיות
            </p>
            <form className="newsletter__form" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="newsletter__input"
                placeholder="כתובת אימייל"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter__button">הרשמה</button>
            </form>
            <p className="newsletter__privacy">
              בהרשמה אתם מסכימים לקבל עדכונים מ-IDigitaly. ניתן לבטל בכל עת.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <h3 className="footer__logo">IDigitaly</h3>
              <p className="footer__tagline">משווק מורשה של Apple בישראל</p>
              <div className="footer__social">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links">
              <h4 className="footer__links-title">קישורים מהירים</h4>
              <ul className="footer__links-list">
                <li><a href="#">דף הבית</a></li>
                <li><a href="#">מוצרים</a></li>
                <li><a href="#">אודות</a></li>
                <li><a href="#">צור קשר</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer__links">
              <h4 className="footer__links-title">קטגוריות</h4>
              <ul className="footer__links-list">
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">Apple Watch</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">אביזרים</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="footer__links">
              <h4 className="footer__links-title">תמיכה</h4>
              <ul className="footer__links-list">
                <li><a href="#">שאלות נפוצות</a></li>
                <li><a href="#">מדיניות החזרות</a></li>
                <li><a href="#">משלוחים</a></li>
                <li><a href="#">אחריות</a></li>
                <li><a href="#">תיקונים</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__contact">
              <h4 className="footer__links-title">צור קשר</h4>
              <ul className="footer__contact-list">
                <li>
                  <span className="footer__contact-icon">📍</span>
                  <span>תל אביב, ישראל</span>
                </li>
                <li>
                  <span className="footer__contact-icon">📞</span>
                  <span>03-1234567</span>
                </li>
                <li>
                  <span className="footer__contact-icon">✉️</span>
                  <span>info@idigitaly.co.il</span>
                </li>
                <li>
                  <span className="footer__contact-icon">🕐</span>
                  <span>א'-ה' 09:00-18:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              © 2024 IDigitaly. כל הזכויות שמורות. משווק מורשה של Apple.
            </p>
            <div className="footer__legal">
              <a href="#">תנאי שימוש</a>
              <a href="#">מדיניות פרטיות</a>
              <a href="#">נגישות</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
