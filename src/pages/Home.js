import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCalculator, FaBuilding, FaCreditCard, FaHandshake, FaCheckCircle, FaUserTie, FaChartLine, FaCertificate } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import "./Home.css";
import Footer from "../components/Footer";
import LoanImage from "../images/loan-con.jpg";
import FinancialServicesImage from "../images/fin-sevice.jpeg";
import AboutHeroImage from "../images/about-hero.png";
import TaxConsultationImage from "../images/tax-xon.webp";
import BusinessRegImage from "../images/business-register.jpeg";

// Bank Logo Imports (local images)
import AxisBankLogo from "../images/banks/axis-bank.svg";
import KotakLogo from "../images/banks/kotak.svg";
import BobLogo from "../images/banks/bob.svg";
import CanaraLogo from "../images/banks/canara.svg";
import IndusIndLogo from "../images/banks/indusind.svg";
import IdfcLogo from "../images/banks/idfc.svg";
import YesBankLogo from "../images/banks/yes-bank.svg";
import FederalBankLogo from "../images/banks/federal.svg";
import BoiLogo from "../images/banks/boi.svg";

export default function Home() {
  const swiperRef = useRef(null);

  // Top 15 Indian Banks Data with reliable logo URLs
  const bankPartners = [
    { name: "State Bank of India", logo: "https://cdn.worldvectorlogo.com/logos/sbi-state-bank-of-india.svg", initials: "SBI" },
    { name: "HDFC Bank", logo: "https://cdn.worldvectorlogo.com/logos/hdfc-bank-logo.svg", initials: "HDFC" },
    { name: "ICICI Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/200px-ICICI_Bank_Logo.svg.png", initials: "ICICI" },
    { name: "Axis Bank", logo: AxisBankLogo, initials: "AXIS" },
    { name: "Kotak Mahindra", logo: KotakLogo, initials: "KOTAK" },
    { name: "Bank of Baroda", logo: BobLogo, initials: "BOB" },
    { name: "Punjab National Bank", logo: "https://cdn.worldvectorlogo.com/logos/punjab-national-bank.svg", initials: "PNB" },
    { name: "Canara Bank", logo: CanaraLogo, initials: "CANARA" },
    { name: "Union Bank", logo: "https://cdn.worldvectorlogo.com/logos/union-bank-of-india.svg", initials: "UBI" },
    { name: "IndusInd Bank", logo: IndusIndLogo, initials: "INDUSIND" },
    { name: "Yes Bank", logo: YesBankLogo, initials: "YES" },
    { name: "IDFC First Bank", logo: IdfcLogo, initials: "IDFC" },
    { name: "Federal Bank", logo: FederalBankLogo, initials: "FEDERAL" },
    { name: "Bank of India", logo: BoiLogo, initials: "BOI" },
  ];

  // Handle hover pause - immediate response
  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  useEffect(() => {
    // Trigger animations on load
    const animatedElements = document.querySelectorAll('.animate-in');
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 150);
    });

    // Counter animation for stats
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const increment = target / 40;
      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.textContent = Math.ceil(count) + suffix;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target + suffix;
        }
      };
      setTimeout(updateCount, 800);
    });
  }, []);

  return (
    <>
      <main className="professional-home">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge animate-in">
                <FaCertificate className="badge-icon" />
                <span>Certified Tax & Financial Consultants</span>
              </div>
              
              <h1 className="hero-title animate-in">
                <span className="title-line">Financial & Loan</span>
                <span className="title-line title-highlight">Consultation Services</span>
              </h1>
              
              <div className="hero-subtitle animate-in">
                <div className="subtitle-card">
                  <p>Trusted expertise in taxation, loan facilitation through bank partnerships, and financial consulting for individuals and enterprises.</p>
                </div>
                <div className="subtitle-card">
                  <p>Over 15 years of proven experience in Gujarat with seamless loan approvals.</p>
                </div>
              </div>

              <div className="hero-stats animate-in">
                <div className="stat-item">
                  <div className="stat-ring">
                    <span className="stat-number" data-target="500" data-suffix="+">0</span>
                  </div>
                  <span className="stat-label">Loans Processed</span>
                </div>
                <div className="stat-item">
                  <div className="stat-ring">
                    <span className="stat-number" data-target="15" data-suffix="+">0</span>
                  </div>
                  <span className="stat-label">Bank Partners</span>
                </div>
                <div className="stat-item">
                  <div className="stat-ring">
                    <span className="stat-number" data-target="95" data-suffix="%">0</span>
                  </div>
                  <span className="stat-label">Approval Rate</span>
                </div>
              </div>

              <div className="hero-actions animate-in">
                <Link to="/contact" className="btn-primary">
                  <span>Schedule Consultation</span>
                  <span className="btn-arrow">→</span>
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bank Partners Carousel Section */}
        <section className="bank-partners-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Trusted Bank Partners</h2>
              <p className="section-subtitle">
                We work with India's leading banks to provide you the best loan options
              </p>
            </div>
          </div>
          <div 
            className="bank-carousel-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              modules={[Autoplay, FreeMode]}
              spaceBetween={30}
              slidesPerView={2}
              freeMode={{
                enabled: true,
                momentum: true,
                momentumRatio: 0.25,
              }}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              breakpoints={{
                480: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 6 },
              }}
              className="bank-swiper"
            >
              {[...bankPartners, ...bankPartners].map((bank, index) => (
                <SwiperSlide key={index}>
                  <div className="bank-slide">
                    <div className="bank-logo-container">
                      <img 
                        src={bank.logo} 
                        alt={bank.name} 
                        className="bank-logo"
                        loading="lazy"
                        onError={(e) => { 
                          e.target.style.display = 'none'; 
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="bank-initials" style={{display: 'none'}}>
                        {bank.initials}
                      </div>
                    </div>
                    <span className="bank-name">{bank.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
                  <img src={LoanImage} alt="Loan consultation and bank partnerships" className="card-image" />
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
                  <img src={TaxConsultationImage} alt="Tax consultation workspace" className="card-image" />
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
                  <img src={BusinessRegImage} alt="Business registration office" className="card-image" />
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
                  <img src={FinancialServicesImage} alt="Financial planning consultation" className="card-image" />
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
