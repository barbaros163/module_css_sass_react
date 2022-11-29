// import "./Buton.css";

import "./Buton.css";

const Buton = ({ btn }) => {
  return (
    <div>
      <button> {btn} </button>
    </div>
  );
};

//* Eğer CSS'deki class adi kebap-case seklinde yazilmis ise
//* module ile bu class'a erismek icin ornekte goruldugu gibi
//* koseli parentez ile erisim yapilir.Koseli parentez erisimi
//* en garanti yontemdir.

//* ORN:moduleName["class-adi"]

export default Buton;
