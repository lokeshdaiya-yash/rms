
import { Link } from 'react-router-dom';
import './header.scss';


export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex justify-content-between w-100 align-items-center mx-1">
          <label htmlFor="toggle" className="fa fa-bars" aria-hidden="true">
            <i className="hiddenContent">.</i>
          </label>
          <a className="navbar-brand logo px-2" href="#">
            <img
              src="https://www.yash.com/wp-content/themes/html5blank-stable/images/yash-logo-new.svg"
              aria-label="logo"
              alt="website logo"
              className="header-logo"
            />
          </a>
          <div className="d-flex">
            <a href="/login">Logout</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
