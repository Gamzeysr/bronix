import NavbarStyle from "./navbar.module.css";
import Header from "../../assets/header.png";
import Icon from "../../assets/icon.png";



const Navbar = () => {
    return (
        <div className={NavbarStyle["navbarContainer"]}>
            {/* 👆Bu divim butun navbarımı kapsayan divim  */}
            <div className={NavbarStyle["ulimgContainer"]}>
                <img src={Header} alt="header" />
                <ul className={NavbarStyle["ulContainer"]}>
                    <li className={NavbarStyle["navlistitem"]}>About Us</li>
                    <li className={NavbarStyle["navlistitem"]}>Games</li>
                    <li className={NavbarStyle["navlistitem"]}> News</li>
                    <li className={NavbarStyle["navlistitem"]}>Career</li>
                    <li className={NavbarStyle["navlistitem"]}>Contact</li>
                </ul>
            </div >
            <div className={NavbarStyle["h2pContainer"]}>
                <h2 className={NavbarStyle["h2title"]}>News</h2>
                <p className={NavbarStyle["ptext"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    feugiat iaculis porta. Fusce arcu sem, varius at purus at,
                    scelerisque.</p>
            </div>
        </div>

    );
}

export default Navbar;