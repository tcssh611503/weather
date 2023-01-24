import React from 'react'
import style from './Sunny.module.scss';

const Sunny = () => {
  return (
      <div className={style.sunny}>
          <h3>Sunny</h3>
          <svg viewBox="-50 -50 100 100">
            <circle className={style.sun} cx="0" cy="0" r="22"></circle>
          </svg>
      </div> 
  );
};

// skip re-rendering the component
export default React.memo(Sunny, () => true);
