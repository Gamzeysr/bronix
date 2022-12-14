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
                <div className={ContactUsStyle["input"]}>
                    <input type="text" placeholder="  Name" required />
                    <input type="email" placeholder="  Email" required />
                    <textarea name="text" className={ContactUsStyle["textarea"]} cols="50" rows="10" placeholder=" Your message" required></textarea>
                </div>

                <button className={ContactUsStyle["send-button"]} type="send" >Send</button>
            </div>
        </div>
    )
}

export default ContactUs