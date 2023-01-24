import React from 'react'
import style from './Cloudy.module.scss';

const Cloudy = () => {
  return (
      <div className={style.cloudy}>
          <h3　className={style.title}>Cloudy</h3>
          <svg viewBox="-50 -50 100 100">
            <circle className={style.sun} cx="0" cy="0" r="22"></circle>
            <circle className={style.cloud} cx="-30" cy="30" r="20"></circle>
            <circle className={style.cloud} cx="-15" cy="30" r="20"></circle>
            <circle className={style.cloud} cx="0" cy="30" r="20"></circle>
            <circle className={style.cloud} cx="-25" cy="10" r="15"></circle>
            <circle className={style.cloud} cx="-7" cy="15" r="15"></circle>
          </svg>
      </div> 
  );
};

// skip re-rendering the component
export default React.memo(Cloudy, () => true);
