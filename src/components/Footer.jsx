import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>ShopEasy is a leading online retailer dedicated to providing quality products at affordable prices.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@shopeasy.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;