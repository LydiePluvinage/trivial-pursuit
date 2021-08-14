import './Header.css';
import Menu from './Menu';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img src="./logo200.png" className="header__logo" alt="logo" />
        <h1>Trivial Pursuit</h1>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
