import React, { PropTypes } from 'react';

const NavigationPresentational = (props) => {
  return (
    <nav className="navBar">
      <nav className="wrapper" id="menuToggle">
        <div className="logo">kudos</div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="label-toggle"></label>
        <span></span>
        <span></span>
        <span></span>
        <ul>
            <a href="#"><li>Login</li></a>
        </ul>
      </nav>
    </nav>
  );
};

export default NavigationPresentational;
