import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faPaypal as faPaypalBrand } from '@fortawesome/free-brands-svg-icons';

const CheckoutForm = ({ onSubmit }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      paymentMethod
    });
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={formData.address}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            id="city" 
            name="city" 
            value={formData.city}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input 
              type="text" 
              id="state" 
              name="state" 
              value={formData.state}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>
            <input 
              type="text" 
              id="zip" 
              name="zip" 
              value={formData.zip}
              onChange={handleChange}
              required 
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </div>
      </div>
      
      <div className="payment-info">
        <h3>Payment Method</h3>
        <div className="payment-options">
          <div 
            className={`payment-method ${paymentMethod === 'credit' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('credit')}
          >
            <FontAwesomeIcon icon={faCreditCard} /> Credit Card
          </div>
          <div 
            className={`payment-method ${paymentMethod === 'paypal' ? 'active' : ''}`}
            onClick={() => setPaymentMethod('paypal')}
          >
            <FontAwesomeIcon icon={faPaypalBrand} /> PayPal
          </div>
        </div>
        
        {paymentMethod === 'credit' ? (
          <div className="credit-card-form">
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input 
                type="text" 
                id="cardNumber" 
                placeholder="1234 5678 9012 3456" 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input 
                type="text" 
                id="cardName" 
                required 
              />
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="expiry">Expiry Date</label>
                <input 
                  type="text" 
                  id="expiry" 
                  placeholder="MM/YY" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input 
                  type="text" 
                  id="cvv" 
                  required 
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="paypal-form">
            <p>You will be redirected to PayPal to complete your purchase.</p>
          </div>
        )}
      </div>
      
      <button type="submit" className="btn place-order-btn">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;