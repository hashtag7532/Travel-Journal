import React from "react";
import Logo from "../images/Fill 213Logo.png";
import LogoText from "../images/my travel journal.Logo.png";

export default function Navbar() {
    return(
        <nav className="nav">
            <img src={Logo} alt="" className="nav--logo"></img>
            <img src={LogoText} alt="" className="nav--logotext"></img>
        </nav>
    )
}