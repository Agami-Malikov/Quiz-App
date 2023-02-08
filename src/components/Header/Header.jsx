import Logo from 'shared/components/Logo/Logo';
import s from './header.module.scss';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <>
      <div className="container">
        <header className={s.header}>
          <Logo />
          <Nav />
        </header>
      </div>
    </>
  );
};

export default Header;
