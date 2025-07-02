import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data';
// import { formatPrice } from '../utils';

const ProductList = () => {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = products.filter(product => 
    category === 'all' || product.category === category
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="filter-options">
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="home">Home & Garden</option>
        </select>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div className="products-grid">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;