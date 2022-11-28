import Buton from "../buton/Buton";
import "./Card.css";

const Card = (props) => {
  return (
    <div>
      Card
      <Buton />
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
