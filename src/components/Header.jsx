import { useState } from "react";
import "../styles/header.css"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div id="headerWrapper">
            <div id="headerContainer">
                {/* <div id="logoContainer">SOMESH KOLLURU</div> */}
                <a href="./#bannerContainer" className="navLink" id="logoContainer" onClick={() => setIsOpen(false)}>PRAMOD SOMESH</a>

                {/* <input type="checkbox" id="hamburgerMenuCheckbox" />
                <label htmlFor="hamburgerMenuCheckbox" id="hamburgerMenu" >=</label>

                <label htmlFor="hamburgerMenuCheckbox" id="hamburgerMenuClose" >X</label> */}
                
                <button className={`hamburger ${isOpen ? "hide" : "show"}`} onClick={() => setIsOpen(true)} >=</button>

                <button className={`hamburger-close ${isOpen ? "show" : "hide"}`} onClick={() => setIsOpen(false)}>X</button>

                <div id="navLinks" className={isOpen ? "open" : ""}>
                    <a href="./#bannerContainer" className="navLink" onClick={() => setIsOpen(false)}>HOME</a>
                    <a href="./#projectsContainer" className="navLink" onClick={() => setIsOpen(false)}>PROJECTS</a>
                    <a href="./#aboutMeContainer" className="navLink" onClick={() => setIsOpen(false)}>ABOUT</a>
                    <a href="./#contactWrapper" className="navLink" onClick={() => setIsOpen(false)}>CONTACT</a>
                </div>
                
                
            </div>
        </div>
    );
}

export default Header;