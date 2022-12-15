
import CardStyle from "./card.module.css";
import Icon from "../../../assets/icon.png";



const Card = ({ image, created, name, id }) => {


    return (
        <div className={CardStyle["cardContainer"]}>

            <img className={CardStyle["Img"]} src={image} alt="img" />
            <div className={CardStyle["cardContent"]}>
                <h3 className={CardStyle["cardTitle"]}>{`${name} ${id}`}</h3>
                <p className={CardStyle["cardText"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
                    vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam
                    nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
                    vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam
                    nibh mauris, pretium. Lectus magnis lorem massa urna felis porta.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
                    vitae dictumst sit vitae, mi imperdiet sit. Lectus eleifend aliquam
                    nibh mauris, pretium. Lectus magnis lorem massa urna.</p>
                <div className={CardStyle["altContent"]}>
                    <p className={CardStyle["altText"]}></p>
                    <div className={CardStyle["altDiv"]}>
                        <img src={Icon} alt="icon" />
                        <p>Beğen</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;