import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.scss';

const Menu = () => {
  return (
    <section data-name="Menu" className="mb-12">
      <nav className={style.root}>
        <NavLink className={style.navItem} to="/">
          Home
        </NavLink>
        <NavLink className={style.navItem} to="/video">
          Videos
        </NavLink>
        <NavLink className={style.navItem} to="/weather">
          Weather
        </NavLink>
      </nav>
    </section>
  );
};
export default React.memo(Menu, () => true);
