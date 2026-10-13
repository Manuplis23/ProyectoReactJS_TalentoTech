import './Nav.css';
import {Link} from "react-router-dom";

export const Nav = () =>{
    return(
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/grande"}>Grande</Link>
                </li>
                <li>
                    <Link to={"/category/cria"}>Cría</Link>
                </li>
                <li>
                    <Link to={"/cart"}>Carrito</Link>
                </li>
            </ul>
        </nav>
    );
};