import React from 'react';
import PropTypes from 'prop-types';
import { Polillo } from 'react-explode';

const Firework = ({ visible }) => (
  visible
    && <Polillo size={600} className="firework" style={{ position: 'absolute' }} />
);

Firework.propTypes = {
  visible: PropTypes.bool
};

Firework.defaultProps = {
  visible: true
};

export default Firework;
