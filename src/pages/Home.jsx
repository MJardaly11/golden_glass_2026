import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h2>Welcome to Golden Glass</h2>
          <p>Luxury Cocktails & Fine Dining Experience</p>
          <Link to="/menu" className="btn">View Menu</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>Premium Drinks</h3>
          <p>Handcrafted cocktails by expert mixologists</p>
        </div>
        <div className="feature-card">
          <h3>Elegant Ambiance</h3>
          <p>Perfect setting for dates and celebrations</p>
        </div>
        <div className="feature-card">
          <h3>Fresh Ingredients</h3>
          <p>Only the finest fruits and spirits</p>
        </div>
      </section>
    </>
  );
}