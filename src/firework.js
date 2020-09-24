/* eslint-disable react/prop-types */
import React from 'react';
import { Polillo } from 'react-explode';

const Firework = ({ visible }) => (
  visible
    && <Polillo size={600} className="firework" style={{ position: 'absolute' }} />
);

export default Firework;
