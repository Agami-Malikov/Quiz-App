import { NavLink } from 'react-router-dom';

import menuItems from './nav-menu-items';
import s from './nav.module.scss';

const activeLinkClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const Nav = () => {
  const menuLinks = menuItems.map(({ to, text }, idx) => (
    <li key={idx} className={s.menu__item}>
      <NavLink to={to} className={activeLinkClassName}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <ul className={s.menu}>{menuLinks}</ul>
    </nav>
  );
};

export default Nav;
