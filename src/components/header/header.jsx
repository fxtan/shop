
import { Link } from "react-router-dom";
import "./header.scss"

const Header = () => {



  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <ul className="header__list">
            <li className="header__item">

              <a href="/test">Eyeglasses</a>
            </li>
            <li className="header__item">
              <a href="/">Sunglasses</a>
            </li>
            <li className="header__item">
              {/* <Link to="#">Accessories</Link> */}
            </li>
            <li className="header__item">
              {/* <Link to="#">About</Link> */}
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
