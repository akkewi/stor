import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import { formatPrice } from '../utils';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
      </Link>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">{formatPrice(product.price)}</p>
        <button 
          onClick={() => addToCart(product)}
          className="add-to-cart"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;