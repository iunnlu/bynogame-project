import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import '../styles/footerStyles.scss';

const Footer = () => {
    return(
        <div className="custom-footer">
            <p className="slogan">
                Movie - Review all the movies in the world
            </p>
            <p className="footer-menu">
                <a href="/">Home</a>
                &nbsp;-&nbsp;
                <a href="/">Popular Movies</a>
                &nbsp;-&nbsp;
                <a href="/">Categories</a>
                &nbsp;-&nbsp;
                <a href="/">Contact</a>
            </p>
            <p className="footer-social">
                <a href="https://www.instagram.com/i.unnlu/"><FaInstagram id="instagram" size={25} /></a>
                <a href="https://github.com/iunnlu"><FaGithub id="github" size={25} style={{margin:"0px 10px"}} /></a>
                <a href="https://www.linkedin.com/in/ilhan-unlu/"><FaLinkedin id="linkedin" size={25} /></a>
            </p>
        </div>
    )
};

export default Footer;