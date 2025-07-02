import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../App';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">ShopEasy</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li className="cart-link">
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;