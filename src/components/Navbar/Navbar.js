import './Navbar.css';
import logo from "../../assets/logo.png";
import {  useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';





function Navbar () {
    const navRef = useRef();
    const mostrarNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <div className="navbar">
            <Link to="/">
                <div>
                    <img className="nav-brand" src={logo} alt="logo"/>
                </div> </Link>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/category/interior">Interior</Link>
                <Link to="/category/exterior">Exterior</Link>
                <Link to="/category/deco">Deco</Link>
                <button className="nav-btn nav-close-btn" onClick={mostrarNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={mostrarNavbar}>
                <FaBars/>
            </button>
            <div>
                <CartWidget/>
            </div>
            
        </div>
    )
}



export default Navbar;