import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to ShopHub</h1>
        <p>Your one-stop shop for premium electronics and accessories</p>
        <button className="hero-btn">
          <a href="/products">Shop Now</a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
