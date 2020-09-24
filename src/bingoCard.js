/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = (picked) => makeStyles(() => ({
  container: {
    width: '100%',
    paddingTop: '100%',
    position: 'relative',
    cursor: 'pointer'
  },
  item: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    lineHeight: '100%',
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: picked ? 'line-through' : ''
  }
}));

// eslint-disable-next-line react/prop-types
const BingoCard = ({ text, picked, onClick }) => {
  const classes = useStyles(picked)();

  return (
    <div className={classes.container} onClick={onClick}>
      <Paper className={classes.item}>{text}</Paper>
    </div>
  );
};

export default BingoCard;
