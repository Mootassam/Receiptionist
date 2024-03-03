import "./Equitas.css";
import Currency from "../../../utils/Currency";
import Dates from "../../../utils/Dates";

function Equitas(props) {
  return (
    <div className="app__equitas">
      <div className="equitas__header">
        <h3>Payment Successful</h3>
      </div>

      <div className="equitas__subheader">
        <img src="/equitas/equitas.png" alt="" />
        <h2>Payment Successful</h2>
      </div>

      <div className="equitas__send">
        <div className="equitas__box"></div>
        <div className="equitas__text">
          Send Fund Transfer Receipt to the Beneficiary
        </div>
      </div>

      <div className="equitas__details">
        <div className="detaill__header">
          <div className="detaill__text">Transfer Details</div>
          <div className="detail__image">
            <img src="/equitas/Share.png" alt="" />
            <img src="/equitas/Download.png" alt="" />
          </div>
        </div>

        <div className="group__detaill">
          <div className="detaill__group">
            <div className="group__label">Reference No. (UTR No./RRN)</div>
            <div className="group__text">{props?.transactionId} </div>
          </div>

          <div className="detaill__group">
            <div className="group__label">Date & Time</div>
            <div className="group__text">{Dates.dateEquitas()} </div>
          </div>
          <div className="detaill__group">
            <div className="group__label">Amount</div>
            <div className="group__text"> {Currency.India(props.amount)} </div>
          </div>
          <div className="detaill__group">
            <div className="group__label">Beneficiary name</div>
            <div className="group__text">{props?.paidto} </div>
          </div>
          <div className="detaill__group">
            <div className="group__label">Bank name</div>
            <div className="group__text">{props?.bankName} </div>
          </div>
          <div className="detaill__group">
            <div className="group__label">Account number</div>
            <div className="group__text">{props?.account} </div>
          </div>
          <div className="detaill__group">
            <div className="group__label">IFSC</div>
            <div className="group__text">{props?.ifsc} </div>
          </div>
          <div className="detaill__group">
            <div className="group__label">Remarks</div>
            <div className="group__text">{props?.remarks} </div>
          </div>
        </div>
      </div>
      <div className="equitas__bottom">
        <div className="bottm__secure">
          <div className="secure">
            <img src="/equitas/safe.png" alt="" />
            Safe and Secure transaction
          </div>
        </div>

        <div className="bottom__add">
          <span className="favourites">Add Beneficiary to favourites </span>
        </div>

        <div className="bottom__options">
          <div className="button__home">
            <span className="home"> Back to Home</span>
          </div>

          <div className="button__send">
            <span className="send"> Send Money Again</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equitas;
