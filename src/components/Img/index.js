import PropTypes from 'prop-types';
import React from 'react';

function Img(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Img;
