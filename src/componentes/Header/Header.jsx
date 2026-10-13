import './Header.css';
import { Link } from "react-router-dom";
import {Nav} from '../Nav/Nav';
import logo from "../../assets/react.svg";

export const Header = () => {
    return (
      <header>
        <div className="logo-container">
          <Link to={"/"}>
            <img src={logo} alt="logo reactiva" />
            <span>Reactiva</span>
          </Link>
        </div>
        <Nav />
      </header>
    );
  };