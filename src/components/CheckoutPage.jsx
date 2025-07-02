import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../App';
import CheckoutForm from './CheckoutForm';
import { calculateCartTotal, formatPrice } from '../utils';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { subtotal, shipping, tax, total } = calculateCartTotal(cartItems);
  
  const handleSubmit = (orderData) => {
    console.log('Order submitted:', orderData);
    clearCart();
    navigate('/thank-you');
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="empty-checkout">
        <p>Your cart is empty</p>
        <a href="/products" className="btn">Continue Shopping</a>
      </div>
    );
  }
  
  return (
    <div className="checkout-page">
      <div className="container">
        <h2>Checkout</h2>
        <div className="checkout-grid">
          <CheckoutForm onSubmit={handleSubmit} />
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <p>{item.name} × {item.quantity}</p>
                  <p>{formatPrice(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="summary-totals">
              <p>Subtotal: <span>{subtotal}</span></p>
              <p>Shipping: <span>{shipping}</span></p>
              <p>Tax: <span>{tax}</span></p>
              <p className="total">Total: <span>{total}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;