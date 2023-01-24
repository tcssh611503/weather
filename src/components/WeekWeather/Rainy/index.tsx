import React, {useState, useEffect} from 'react'
import style from './Rainy.module.scss';

const Rainy = () => {
  return (
    <div className={style.rainy}>
        <h3　className={style.title}>Rainy</h3>
          <svg viewBox="-63 -30 100 100">
            <line className={style.rain}  x1="-25" y1="45" x2="-25" y2="65"></line>
            <line className={style.rain}  x1="-14" y1="35" x2="-14" y2="55"></line>
            <line className={style.rain}  x1="-5" y1="50" x2="-5" y2="75"></line>
            <circle className={style.cloud} cx="-30" cy="30" r="20"></circle>
            <circle className={style.cloud}  cx="-15" cy="30" r="20"></circle>
            <circle className={style.cloud}  cx="0" cy="30" r="20"></circle>
            <circle className={style.cloud}  cx="-25" cy="10" r="15"></circle>
            <circle className={style.cloud}  cx="-7" cy="15" r="15"></circle>
          </svg>
    </div> 
  );
};

// skip re-rendering the component
export default React.memo(Rainy, () => true);