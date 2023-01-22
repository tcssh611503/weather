import React, {useState, useEffect} from 'react'
import style from './Rain.module.scss';

const Rainy = () => {
  return (
    <div className={style.rainy}>
        <div className={style.moon}></div>
              <div className={style.cloud}>
              <div className={style.rain}></div>
              <div className={style.rain2}></div>
              <div className={style.rain3}></div>
          </div>
          <svg className={style.temsvg}>
          </svg>      
    </div> 
  );
};

// skip re-rendering the component
export default React.memo(Rainy, () => true);
