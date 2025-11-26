import "./PageHero.css";

/**
 * Reusable Page Hero Component
 * Used for consistent hero sections across all pages (except Home)
 * 
 * @param {string} title - Main heading text
 * @param {string} subtitle - Supporting description text
 * @param {string} backgroundImage - Image source for background
 * @param {string} buttonText - Optional button text
 * @param {function} onButtonClick - Optional button click handler
 */
function PageHero({ 
  title, 
  subtitle, 
  backgroundImage, 
  buttonText, 
  onButtonClick 
}) {
  return (
    <section className="page-hero fade-in">
      <div className="page-hero-bg">
        <div className="page-hero-gradient" />
        <img
          src={backgroundImage}
          alt={title}
          className="page-hero-img"
        />
      </div>
      <div className="page-hero-overlay">
        <h1 className="page-hero-title underline-animate">
          {title}
        </h1>
        <p className="page-hero-subtext">
          {subtitle}
        </p>
        {buttonText && (
          <button
            className="page-hero-btn"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
}

export default PageHero;
