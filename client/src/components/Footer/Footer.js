import React from "react";
import logo from "../../image/logo.png";

const Footer = () => {
    return (
        <footer className=" bg-teal-200 w-full bottom-0 h-24 absolute">
            <div className="flex justify-center">
                <img className=" w-24" src={logo} />
            </div>
        </footer>
    );
}

export default Footer;