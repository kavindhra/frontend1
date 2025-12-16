import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { productAPI } from '../services/api';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productAPI.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      <Hero />
      <section className="featured-section">
        <div className="container">
          <h2>Featured Products</h2>
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="products-grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Get In Touch With Us Now!</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">📞</div>
              <h3>Phone Number</h3>
              <p>+91 9344214700</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✉️</div>
              <h3>Email</h3>
              <p>info@swhophub.com</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📍</div>
              <h3>Location</h3>
              <p>123, Avinashi Road,
R.S. Puram, Coimbatore – 641002,
Tamil Nadu, India</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
🕛 </div>
              <h3>Working Hours</h3>
              <p>Monday To saturday</p>
<p>10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
