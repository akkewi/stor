import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);
  
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h2>Welcome to ShopEasy</h2>
          <p>Your one-stop shop for all your needs</p>
          <Link to="/products" className="btn">Shop Now</Link>
        </div>
      </section>
      
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;