import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ children, siteTitle }) => (
  <header className="usa-header usa-header--extended" role="banner">
    <div className="usa-navbar">
      <div className="usa-logo" id="extended-logo">
        <em className="usa-logo__text">
          <Link to="/" title="Home" aria-label="Home">
            <img height="80" src="https://www.cisa.gov/profiles/cisad8_gov/themes/custom/gesso/dist/images/backgrounds/0e5a6ae3d070323898b1.svg"/>
            <div class="usa-navbar__tagline" />
            {/* {siteTitle} */}
          </Link>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div>
    {children}
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
