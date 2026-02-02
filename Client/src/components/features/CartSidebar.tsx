// client/src/components/features/CartSidebar.tsx
import React, { useState, useEffect } from 'react';
import { useCart } from '../../store';
import './CartSidebar.scss';

const CartSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, totalPrice, updateQuantity, clearCart } = useCart();

  // Listen for cart toggle button
  useEffect(() => {
    const cartToggle = document.getElementById('cartToggle');
    if (cartToggle) {
      cartToggle.addEventListener('click', () => setIsOpen(true));
    }
    return () => {
      if (cartToggle) {
        cartToggle.removeEventListener('click', () => setIsOpen(true));
      }
    };
  }, []);

  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="cart-sidebar">
      <div className="cart-overlay" onClick={handleClose} />
      <div className="cart-content">
        <div className="cart-header">
          <h3>עגלת קניות</h3>
          <button className="cart-close" onClick={handleClose}>×</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>העגלה שלך ריקה</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.productId} className="cart-item">
                <div className="cart-item__image">{item.image || '📦'}</div>
                <div className="cart-item__details">
                  <h4 className="cart-item__name">{item.name}</h4>
                  <p className="cart-item__price">₪{item.price}</p>
                  <div className="cart-item__quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="cart-item__remove"
                  onClick={() => updateQuantity(item.productId, 0)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>סה״כ: ₪{totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-actions">
              <button className="btn btn--secondary" onClick={clearCart}>
                נקה
              </button>
              <button className="btn btn--primary">לתשלום</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
