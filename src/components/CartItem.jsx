import { useContext } from 'react';
import { CartContext } from '../App';
import { formatPrice } from '../utils';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useContext(CartContext);
  
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>{formatPrice(item.price)}</p>
        <div className="quantity-controls">
          <button 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="item-total">
        <p>{formatPrice(item.price * item.quantity)}</p>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;