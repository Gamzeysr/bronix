
import NavbarStyle from "./navbar.module.css";



const Navbar = () => {
    return (
        <ul className={NavbarStyle.ulContainer}>
            <li className={NavbarStyle.navlistitem}>About Us</li>
            <li className={NavbarStyle.navlistitem}>Games</li>
            <li className={NavbarStyle.navlistitem}> News</li>
            <li className={NavbarStyle.navlistitem}>Career</li>
            <li className={NavbarStyle.navlistitem}>Contact</li>
        </ul>

    );
}

export default Navbar;