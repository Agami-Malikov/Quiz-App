import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import s from './logo.module.scss';

const Logo = () => {
  return (
    <Link className={s.logo} to="/">
      <img className={s.logo__img} src={logo} alt="logo" />
      <p className={s.logo__text}>
        Quiz - Family <span>^◡^</span>
      </p>
    </Link>
  );
};

export default Logo;
