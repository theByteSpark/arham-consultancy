import React from "react";
import { Link } from "react-router-dom";
import { FaCalculator, FaBuilding, FaCreditCard, FaHandshake, FaCheckCircle, FaUserTie, FaChartLine, FaCertificate } from "react-icons/fa";
import "./Home.css";
import Footer from "../components/Footer";
import AboutHeroImage from "../images/about-hero.webp";
import AboutContentImage from "../images/about-content.jpeg";

export default function Home() {
  return (
    <>
      <main className="professional-home">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <FaCertificate className="badge-icon" />
                <span>Certified Tax & Financial Consultants</span>
              </div>
              <h1 className="hero-title">
                 Financial & Loan Consultation Services
              </h1>
              <p className="hero-subtitle">
                Trusted expertise in taxation, loan facilitation through bank partnerships, and financial consulting 
                for individuals and enterprises. Over 15 years of proven experience in Gujarat with seamless loan approvals.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Loans Processed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Bank Partners</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Loan Approval Rate</span>
                </div>
              </div>
              <div className="hero-actions">
                <Link to="/contact" className="btn-primary">
                  Schedule Consultation
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="services-overview">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Core Services</h2>
              <p className="section-subtitle">
                Comprehensive financial solutions including loan consultation through our bank partnerships and taxation services
              </p>
            </div>
            <div className="services-grid">
                            <div className="service-card">
                <div className="service-image">
                  <img src={AboutHeroImage} alt="Loan consultation and bank partnerships" className="card-image" />
                </div>
                <div className="service-content">
                  {/* <div className="service-icon">
                    <FaShieldAlt />
                  </div> */}
                  <h3 className="service-title">Loan Consultation</h3>
                  <p className="service-description">
                    Expert loan guidance through our trusted bank partnerships for seamless financing solutions.
                  </p>
                  <div className="service-features">
                    <span>Bank Partner Network</span>
                    <span>Loan Processing</span>
                    <span>Quick Approvals</span>
                  </div>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={AboutContentImage} alt="Tax consultation workspace" className="card-image" />
                </div>
                <div className="service-content">
                  {/* <div className="service-icon">
                    <FaCalculator />
                  </div> */}
                  <h3 className="service-title">Tax Consultation</h3>
                  <p className="service-description">
                    Expert tax planning and compliance services for individuals and businesses.
                  </p>
                  <div className="service-features">
                    <span>Income Tax Filing</span>
                    <span>GST Registration</span>
                    <span>Tax Planning</span>
                  </div>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={AboutHeroImage} alt="Business registration office" className="card-image" />
                </div>
                <div className="service-content">
                  {/* <div className="service-icon">
                    <FaBuilding /> 
                  </div> */}
                  <h3 className="service-title">Business Registration</h3>
                  <p className="service-description">
                    Complete business setup including company registration and licensing.
                  </p>
                  <div className="service-features">
                    <span>Company Formation</span>
                    <span>License Support</span>
                    <span>Legal Compliance</span>
                  </div>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={AboutContentImage} alt="Financial planning consultation" className="card-image" />
                </div>
                <div className="service-content">
                  {/* <div className="service-icon">
                    <FaCreditCard />
                  </div> */}
                  <h3 className="service-title">Financial Services</h3>
                  <p className="service-description">
                    Comprehensive financial planning and investment advisory services for long-term growth.
                  </p>
                  <div className="service-features">
                    <span>Investment Planning</span>
                    <span>Financial Advisory</span>
                    <span>Wealth Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us">
          <div className="container">
            <div className="content-split">
              <div className="content-left">
                <h2 className="section-title">Why Choose Arham Consultancy</h2>
                <p className="section-description">
                  With over 15 years of experience in taxation, loan consultation, and financial services, 
                  we provide reliable solutions including seamless loan processing through our trusted bank partnerships.
                </p>
                <div className="features-list">
                  <div className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <div className="feature-content">
                      <h4>Certified Professionals</h4>
                      <p>Licensed tax consultants and qualified financial advisors with proven expertise.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <div className="feature-content">
                      <h4>Proven Track Record</h4>
                      <p>Successfully served 500+ clients across Gujarat with 99% satisfaction rate.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <div className="feature-content">
                      <h4>Bank Partnership Network</h4>
                      <p>Direct partnerships with leading banks for quick loan approvals and competitive interest rates.</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <div className="feature-content">
                      <h4>Timely Delivery</h4>
                      <p>Committed to meeting all deadlines and regulatory compliance timelines.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-right">
                <div className="why-choose-image">
                  <img 
                    src={AboutHeroImage} 
                    alt="Professional business consultation" 
                    className="professional-image"
                  />
                </div>
                <div className="professional-highlights">
                  <div className="highlight-card">
                    <FaUserTie className="highlight-icon" />
                    <h3>Expert Team</h3>
                    <p>Qualified professionals with deep industry knowledge and experience.</p>
                  </div>
                  <div className="highlight-card">
                    <FaChartLine className="highlight-icon" />
                    <h3>Results Driven</h3>
                    <p>Focus on delivering measurable outcomes and long-term value for clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Trust Section */}
        <section className="client-trust">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Trusted by Businesses Across Gujarat</h2>
              <p className="section-subtitle">
                From startups needing business loans to established enterprises, we provide reliable financial expertise and seamless loan facilitation
              </p>
            </div>
            <div className="trust-metrics">
              <div className="metric-item">
                <span className="metric-number">15+</span>
                <span className="metric-label">Bank Partnerships</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">500+</span>
                <span className="metric-label">Loans Facilitated</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">95%</span>
                <span className="metric-label">Approval Success Rate</span>
              </div>
              <div className="metric-item">
                <span className="metric-number">48hr</span>
                <span className="metric-label">Quick Processing</span>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
