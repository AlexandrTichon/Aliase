import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './btn.css';

const Btn = ({ btnType, btnValue }) => (
  <button type="button" className={cn({ [`btn ${btnType}`]: true })}>
    {btnValue}
  </button>
);

Btn.propTypes = {
  btnType: PropTypes.string,
  btnValue: PropTypes.string,
};

Btn.defaultProps = {
  btnType: '',
  btnValue: '',
};


export default Btn;
