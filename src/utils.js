export  const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const calculateCartTotal = (cartItems) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 5.99;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  
  return {
    subtotal: formatPrice(subtotal),
    shipping: formatPrice(shipping),
    tax: formatPrice(tax),
    total: formatPrice(total)
  };
};