import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { CartContext } from '../App';
import { calculateCartTotal } from '../utils';

const CartPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const { subtotal, shipping, tax, total } = calculateCartTotal(cartItems);
  
  return (
    <div className="cart-page">
      <div className="container">
        <h2>Your Shopping Cart</h2>
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
                <Link to="/products" className="btn">Continue Shopping</Link>
              </div>
            ) : (
              <>
                {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
                <button 
                  onClick={clearCart} 
                  className="btn clear-cart-btn"
                >
                  Clear Cart
                </button>
              </>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-details">
                <p>Subtotal: <span>{subtotal}</span></p>
                <p>Shipping: <span>{shipping}</span></p>
                <p>Tax: <span>{tax}</span></p>
                <p className="total">Total: <span>{total}</span></p>
              </div>
              <Link to="/checkout" className="btn checkout-btn">
                Proceed to Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;