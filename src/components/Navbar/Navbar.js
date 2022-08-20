import './Navbar.css';
import {  useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import CartWidget from "../CartWidget/CartWidget";





function Navbar () {
    const navRef = useRef();
    const mostrarNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }
    return (
        <div className="navbar">
            <h3>Lovely Home</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">Interior</a>
                <a href="#">Exterior</a>
                <a href="#">Deco</a>
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