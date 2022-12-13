import React from 'react'
import FooterStyle from "./footer.module.css";
import FooterLogo from "../../assets/footer-logo.png";

const Footer = () => {
    return (
        <div className={FooterStyle.containerfooter}>
            <div className={FooterStyle.leftlogo}>
                <img src={FooterLogo} alt="logo" />
                <p>All rights reserved.</p>
            </div>
            <div className={FooterStyle.menu} >
                <div className={FooterStyle.col}>
                    <div className={FooterStyle.title}>Menu</div>
                    <ul>
                        <li>About Us</li>
                        <li>News</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className={FooterStyle.col}>
                    <div className={FooterStyle.title}>Legal</div>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className={FooterStyle.col}>
                    <div className={FooterStyle.title}>Social</div>
                    <ul>
                        <li>Discord</li>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Footer