import ContactUsStyle from "./contactus.module.css";
import contactUsImg from "../../assets/contact-us.png";



const ContactUs = () => {
    return (
        <div className={ContactUsStyle["containerContact"]}>
            <div>
                <h2 className={ContactUsStyle["title"]}>Contact Us</h2>
                <img className={ContactUsStyle["img"]} src={contactUsImg} alt="Contact-Us-Img" />
            </div>
            <div>
                <div>
                    <input type="text" placeholder='  Name' />
                    <input type="email" placeholder='  Email' />
                    <input type="text" placeholder='  Your message' />
                </div>
                <button className={ContactUsStyle["send-button"]} type="send">Send</button>
            </div>
        </div>
    )
}

export default ContactUs