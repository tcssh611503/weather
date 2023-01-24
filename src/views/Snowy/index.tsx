import React, {useState, useEffect} from 'react'
import style from './Snowy.module.scss';

const Snowy = () => {
  return (
    <div className={style.snowy}>
      <div className={style.cloud}>
        <div className={style.snow}></div>
        <div className={style.snow2}></div>
        <div className={style.snow3}></div>
      </div>    
    </div> 
  );
};

// skip re-rendering the component
export default React.memo(Snowy, () => true);
