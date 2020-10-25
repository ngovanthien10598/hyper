import React from 'react';
import classnames from 'classnames';

import './Screen.scss';

const Screen = props => {

  const classes = classnames(
    'screen',
    props.className
  )

  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}

export default Screen;