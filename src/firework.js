/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Polillo } from 'react-explode';

const useStyles = makeStyles(() => (
  {
    firework: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-300px',
      marginLeft: '-300px',
      zIndex: 1,
      pointerEvents: 'none'
    }
  }));

const Firework = ({ visible }) => {
  const classes = useStyles();

  return (
    visible
    && <Polillo size={600} className={classes.firework} style={{ position: 'absolute' }} />
  );
};

export default Firework;
