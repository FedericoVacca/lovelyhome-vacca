import {  useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';



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
        </div>
    )
}



export default Navbar;