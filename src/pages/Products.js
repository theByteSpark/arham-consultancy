import React from 'react';
import './Products.css';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import HeroImage from '../images/hero-bg.webp';

const socialLinks = [
  { href: 'https://instagram.com', icon: 'fab fa-instagram', label: 'Instagram' },
  { href: 'https://facebook.com', icon: 'fab fa-facebook-f', label: 'Facebook' },
  { href: 'https://twitter.com', icon: 'fab fa-twitter', label: 'Twitter' },
];

const products = [
  {
    name: 'Elegant Leather Purse',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    description: 'Handcrafted leather purse with gold accents.'
  },
  {
    name: 'Classic Pearl Necklace',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    description: 'Timeless pearl necklace for every occasion.'
  },
  {
    name: 'Designer Clutch',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    description: 'Chic clutch for evening outings.'
  },
  {
    name: 'Gold Statement Earrings',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Bold gold earrings to elevate your look.'
  }
];

const Products = () => (
  <>
    <PageHero
      title="Our Products"
      subtitle="Discover our curated collection of premium products designed to meet your needs with quality and elegance."
      backgroundImage={HeroImage}
    />
    <div className="products-page">
      <h2 className="products-section-title">Explore Our Collection</h2>
      <div className="products-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer socialLinks={socialLinks} />
  </>
);

export default Products; 