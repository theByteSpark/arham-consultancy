import React from "react";
import "./Services.css";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import HeroImage from "../images/hero-bg.webp";

const products = [
	{
		name: "Diamond Necklace",
		description: "A timeless diamond necklace for every occasion.",
		price: "₹49,999",
		image: "/images/necklace.jpg",
		link: "https://www.amazon.in/",
	},
	{
		name: "Gold Earrings",
		description: "Elegant gold earrings with intricate detailing.",
		price: "₹19,999",
		image: "/images/earrings.jpg",
		link: "https://www.myntra.com/",
	},
	{
		name: "Emerald Bracelet",
		description: "Luxurious emerald bracelet for a touch of glamour.",
		price: "₹29,999",
		image: "/images/bracelet.jpg",
		link: "https://www.amazon.in/",
	},
	{
		name: "Classic Ring",
		description: "Classic gold ring with a modern twist.",
		price: "₹15,999",
		image: "/images/ring.jpg",
		link: "https://www.myntra.com/",
	},
	{
		name: "Pearl Pendant",
		description: "Sophisticated pearl pendant for understated elegance.",
		price: "₹24,999",
		image: "/images/pendant.jpg",
		link: "https://www.amazon.in/",
	},
	{
		name: "Ruby Studs",
		description: "Bold ruby studs to elevate your style.",
		price: "₹21,999",
		image: "/images/studs.jpg",
		link: "https://www.myntra.com/",
	},
];

// ✅ Move testimonials outside the component
const testimonials = [
	{
		name: "Amit Patel",
		feedback: "Arham made our tax filing seamless and stress-free! Highly recommended.",
		avatar: "/images/avatar1.png"
	},
	{
		name: "Priya Shah",
		feedback: "Professional, prompt, and always available for advice. Great team!",
		avatar: "/images/avatar2.png"
	},
	{
		name: "Rajesh Mehta",
		feedback: "Their accounting and compliance support helped us focus on growth.",
		avatar: "/images/avatar3.png"
	},
	{
		name: "Sneha Desai",
		feedback: "Excellent investment guidance and personal attention to our needs.",
		avatar: "/images/avatar4.png"
	}
];

// ✅ Move carousel component outside too
function TestimonialsCarousel() {
	const [active, setActive] = React.useState(0);
	const timerRef = React.useRef();

	React.useEffect(() => {
		timerRef.current = setTimeout(() => {
			setActive((prev) => (prev + 1) % testimonials.length);
		}, 4000);
		return () => clearTimeout(timerRef.current);
	}, [active]);

	const goTo = (idx) => {
		setActive(idx);
		clearTimeout(timerRef.current);
	};

	return (
		<div className="testimonials-carousel">
			<div className="testimonials-cards">
				{testimonials.map((t, idx) => (
					<div
						key={t.name}
						className={`testimonial-card${idx === active ? " active" : ""}`}
						style={{ display: idx === active ? "flex" : "none" }}
					>
						<div className="testimonial-avatar-wrap">
							<img src={t.avatar} alt={t.name} className="testimonial-avatar" />
						</div>
						<div className="testimonial-content">
							<p className="testimonial-feedback">{t.feedback}</p>
							<div className="testimonial-name">{t.name}</div>
						</div>
					</div>
				))}
			</div>
			<div className="testimonials-nav">
				<button
					className="testimonials-arrow"
					onClick={() => goTo((active - 1 + testimonials.length) % testimonials.length)}
					aria-label="Previous"
				>
					&#8592;
				</button>
				{testimonials.map((_, idx) => (
					<span
						key={idx}
						className={`testimonials-dot${idx === active ? " active" : ""}`}
						onClick={() => goTo(idx)}
					/>
				))}
				<button
					className="testimonials-arrow"
					onClick={() => goTo((active + 1) % testimonials.length)}
					aria-label="Next"
				>
					&#8594;
				</button>
			</div>
		</div>
	);
}

function Services() {
	return (
		<div className="services-root">
			{/* Hero Section */}
			<PageHero
				title="Our Services"
				subtitle="Comprehensive financial solutions to meet your personal and business needs. From tax planning to investment advisory, we've got you covered."
				backgroundImage={HeroImage}
			/>

			{/* Services Grid Section */}
			<section className="services-overview-section">
				<h2 className="services-overview-title">Explore Our Services</h2>
				<div className="services-grid">
					<div className="service-card service-animate service-delay-1" tabIndex={0} role="button">
						<span className="service-icon">📊</span>
						<h3 className="service-title">Accounting</h3>
						<p className="service-desc">Professional bookkeeping, payroll, and compliance for businesses and individuals.</p>
					</div>
					<div className="service-card service-animate service-delay-2" tabIndex={0} role="button">
						<span className="service-icon">🧾</span>
						<h3 className="service-title">Taxation</h3>
						<p className="service-desc">Expert tax planning, filing, and advisory. Minimize liabilities and ensure compliance.</p>
					</div>
					<div className="service-card service-animate service-delay-3" tabIndex={0} role="button">
						<span className="service-icon">💳</span>
						<h3 className="service-title">Loan Assistance</h3>
						<p className="service-desc">Guidance for business and personal loans, documentation, and best rates.</p>
					</div>
					<div className="service-card service-animate service-delay-4" tabIndex={0} role="button">
						<span className="service-icon">📈</span>
						<h3 className="service-title">Investment Advisory</h3>
						<p className="service-desc">Personalized investment strategies and portfolio management for your future.</p>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="pricing-section">
				<h2 className="pricing-title">Engagement Models</h2>
				<div className="pricing-grid">
					<div className="pricing-card glass-card">
						<h3 className="pricing-plan">Small Business</h3>
						<div className="pricing-range">₹5,000 – ₹15,000/mo</div>
						<ul className="pricing-features">
							<li>Bookkeeping & Payroll</li>
							<li>Basic Tax Filing</li>
							<li>Compliance Reports</li>
							<li>Email Support</li>
						</ul>
						<button className="pricing-btn">Get Started</button>
					</div>
					<div className="pricing-card glass-card pricing-popular">
						<h3 className="pricing-plan">Enterprise</h3>
						<div className="pricing-range">₹20,000 – ₹50,000/mo</div>
						<ul className="pricing-features">
							<li>Advanced Accounting & Taxation</li>
							<li>GST & Indirect Taxes</li>
							<li>Loan & Investment Advisory</li>
							<li>Priority Support</li>
							<li>Dedicated Consultant</li>
						</ul>
						<button className="pricing-btn">Get Started</button>
					</div>
					<div className="pricing-card glass-card">
						<h3 className="pricing-plan">Custom</h3>
						<div className="pricing-range">Contact for Pricing</div>
						<ul className="pricing-features">
							<li>Tailored Solutions</li>
							<li>Business Advisory</li>
							<li>Onsite/Remote Engagement</li>
							<li>Flexible Support</li>
							<li>All Services Included</li>
						</ul>
						<button className="pricing-btn">Get Started</button>
					</div>
				</div>
			</section>

			{/* How We Work */}
			<section className="how-we-work-section fade-in">
				<h2 className="how-we-work-title">How We Work</h2>
				<div className="how-we-work-timeline">
					<div className="how-step">
						{/* <div className="how-step-icon">💬</div> */}
						<div className="how-step-circle">1</div>
						<div className="how-step-label">Consultation</div>
						<div className="how-step-desc">We understand your needs and goals in a free initial meeting.</div>
					</div>
					<div className="how-step-line" />
					<div className="how-step">
						{/* <div className="how-step-icon">🔍</div> */}
						<div className="how-step-circle">2</div>
						<div className="how-step-label">Analysis</div>
						<div className="how-step-desc">Our experts analyze your financials and requirements.</div>
					</div>
					<div className="how-step-line" />
					<div className="how-step">
						{/* <div className="how-step-icon">⚙️</div> */}
						<div className="how-step-circle">3</div>
						<div className="how-step-label">Execution</div>
						<div className="how-step-desc">We implement solutions and manage all processes for you.</div>
					</div>
					<div className="how-step-line" />
					<div className="how-step">
						{/* <div className="how-step-icon">📊</div> */}
						<div className="how-step-circle">4</div>
						<div className="how-step-label">Reporting & Support</div>
						<div className="how-step-desc">Regular updates, reports, and ongoing support for your peace of mind.</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="testimonials-section">
				<h2 className="testimonials-title">Client Testimonials</h2>
				<TestimonialsCarousel />
			</section>

			{/* Final Call-to-Action Section (from About.js, adapted) */}
			{/* <section className="final-cta-section">
				<div className="final-cta-bg" />
				<div className="final-cta-content">
					<h2 className="final-cta-heading">Ready to simplify your finances?</h2>
					<p className="final-cta-subtext">Reach out today and let us help you with your financial needs.</p>
					<a href="/contact" className="final-cta-btn">Book a Free Consultation</a>
				</div>
			</section> */}
			<section className="arham-cta-section">
				<h2 className="arham-cta-title">Ready to simplify your finances?</h2>
				<Link to="/contact" className="arham-cta-btn">Book a Free Consultation</Link>
			</section>
			<section style={{ marginTop: "5rem" }}>
				<Footer />
			</section>
		</div>
	);
}

export default Services;
