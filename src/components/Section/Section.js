import React from 'react';
import PropTypes from 'prop-types';

import './Section.scss';

const Section = ({ children }) => (
  <section className="section">
    <div className="container">{children}</div>
  </section>
);

Section.defaultProps = {
  children: null,
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
