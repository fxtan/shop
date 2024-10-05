import { navItems } from '../../constants/navigation';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <ul className="header__list">
            {navItems.map((element, id) => {
              return (
                <li key={id} className="header__item">
                  <a href={element.link}>{element.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
