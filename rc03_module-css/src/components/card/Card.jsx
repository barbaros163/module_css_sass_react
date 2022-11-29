import Buton from "../buton/Buton";
import CardStyle from "./card.module.css";

const Card = ({ language, btn, img }) => {
  // console.log(props);
  // const {language, btn, img} = props; //! destr.
  return (
    <div className="title">
      <h1>{language}</h1>
      <img className="images" src={img} alt="img" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
// import "./Card.css";

//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* CCS module Webpack, Browsify gibi tool'lar ile kullanilabilir.

// console.log(props);
// const { language, btn, img } = props;  //!destr.
