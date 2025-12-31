import React from "react";
import { FaLinkedin, FaUserTie, FaBullseye, FaEye, FaBalanceScale, FaChartLine, FaShieldAlt, FaSyncAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import AboutContentPhoto from "../images/about-hero.png";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";
import "./About.css";

const milestones = [
  { year: "2015", text: "Firm founded in Ahmedabad" },
  { year: "2017", text: "Expanded to serve 100+ clients" },
  { year: "2020", text: "Launched investment planning services" },
  { year: "2023", text: "Recognized as top regional consultancy" },
];

function About() {
  // Animation refs for sections that were disappearing
  const missionVisionRef = useScrollAnimation('animate-in');
  const founderSectionRef = useScrollAnimation('animate-in');
  const valuesRef = useScrollAnimation('animate-in');

  return (
    <div className="arham-about-root">
      {/* Hero Section */}
      <PageHero
        title="About Arham Tax Consultancy"
        subtitle="Empowering businesses with trusted financial solutions and seamless loan facilitation through our bank partnerships since inception."
        backgroundImage={AboutContentPhoto}
        // buttonText="Learn More"
        onButtonClick={() => {
          const nextSection = document.getElementById('arham-story-section');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      
      {/* <section className="arham-story-section" id="arham-story-section">
        <div className="arham-story-grid">
          <div className="arham-story-img slide-in-left">
            <img src={AboutContentPhoto} alt="Documents and finance workspace" />
          </div>
          <div className="arham-story-text slide-in-right">
            <h2 className="arham-section-title underline-animate">Our Story</h2>
            <p className="arham-story-desc">
              Founded to simplify taxation, loan processing, and accounting, we help clients achieve financial clarity through our extensive bank partnerships.
            </p>
            <div className="arham-timeline">
              <div className="arham-timeline-item">
                <span className="arham-timeline-year">2015</span>
                <span className="arham-timeline-text">Firm founded in Ahmedabad</span>
              </div>
              <div className="arham-timeline-item">
                <span className="arham-timeline-year">2017</span>
                <span className="arham-timeline-text">100+ Clients Served</span>
              </div>
              <div className="arham-timeline-item">
                <span className="arham-timeline-year">2020</span>
                <span className="arham-timeline-text">Established Bank Partnerships for Loans</span>
              </div>
              <div className="arham-timeline-item">
                <span className="arham-timeline-year">2023</span>
                <span className="arham-timeline-text">Top Regional Consultancy</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision Section */}
      <section className="arham-mission-vision fade-up" ref={missionVisionRef}>
        <div className="arham-mv-grid">
          <div className="arham-mv-card glass-card hover-lift">
            <FaBullseye className="arham-mv-icon" />
            <h3 className="arham-mv-title underline-animate">Mission</h3>
            <p className="arham-mv-desc mt-20">Deliver accurate, timely, and personalized financial services.</p>
          </div>
          <div className="arham-mv-card glass-card hover-lift">
            <FaEye className="arham-mv-icon" />
            <h3 className="arham-mv-title underline-animate">Vision</h3>
            <p className="arham-mv-desc mt-20">Be the most trusted financial consulting partner for businesses and individuals.</p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="arham-founder-section fade-up" ref={founderSectionRef}>
        <div className="arham-founder-card hover-lift">
          <div className="arham-founder-img-wrap">
            <img src={AboutContentPhoto} alt="Ronak Shah" className="arham-founder-img-circle" />
          </div>
          <div className="arham-founder-info">
            <h3 className="arham-founder-title underline-animate">Ronak Shah</h3>
            <p className="arham-founder-role">Founder & Chief Consultant</p>
            <p className="arham-founder-bio">
              With 15+ years of experience in tax, loan consultation, accounting, and financial planning, Ronak Shah has built strong relationships with leading banks to ensure seamless loan approvals for clients. His expertise spans tax strategy, loan facilitation, and business advisory, always with a focus on personalized, client-first service.
            </p>
            <div className="arham-founder-actions">
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="arham-founder-linkedin-btn">
                <FaLinkedin /> LinkedIn
              </a> */}
              <Link to="/contact" className="arham-founder-consult-btn">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="arham-values-section fade-up" ref={valuesRef}>
        <h2 className="arham-section-title underline-animate">Our Core Values</h2>
        <div className="arham-values-grid">
          <div className="arham-value-card value-animate value-delay-1">
            <FaSyncAlt className="arham-value-icon" />
            <h4 className="arham-value-title">Transparency</h4>
            <p className="arham-value-desc">Clear, honest communication at every step. We keep you informed and empowered.</p>
          </div>
          <div className="arham-value-card value-animate value-delay-2">
            <FaBalanceScale className="arham-value-icon" />
            <h4 className="arham-value-title">Accuracy</h4>
            <p className="arham-value-desc">Meticulous attention to detail ensures your finances are always precise and compliant.</p>
          </div>
          <div className="arham-value-card value-animate value-delay-3">
            <FaShieldAlt className="arham-value-icon" />
            <h4 className="arham-value-title">Integrity</h4>
            <p className="arham-value-desc">Ethical, trustworthy service for every client. Your interests always come first.</p>
          </div>
          <div className="arham-value-card value-animate value-delay-4">
            <FaChartLine className="arham-value-icon" />
            <h4 className="arham-value-title">Growth</h4>
            <p className="arham-value-desc">Facilitating business expansion through our bank partnerships and seamless loan processing for your growth needs.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <Footer />
    </div>
  );
}

export default About;
