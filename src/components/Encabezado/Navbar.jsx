import CartWidget from './CartWidget';

import { Link } from 'react-router-dom';

import './Navbar.css';

function NavBar() {
    return (
        <nav className="sticky-top navbar navbar-light navbar-expand-md bg-light">
            <div className="container-fluid">
                <Link to="/"><a className="navbar-brand text-dark">Interama</a></Link>
                <button className="navbar-toggler justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">
                                <button className="btn btn-outline-success boton shadow-none" >Inicio</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/Enrollable">
                                <button className="btn btn-outline-success boton shadow-none" >Enrollables</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/Plisada y horizontal">
                                <button className="btn btn-outline-success boton shadow-none">Plisadas y Horizontales</button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/categoria/Romana y vertical">
                                <button className="btn btn-outline-success boton shadow-none">Romanas y Verticales</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <label id="lblCarrito"></label>
                    <Link to={"/cart"}>
                        <CartWidget />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar