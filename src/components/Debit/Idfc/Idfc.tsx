import "./idfc.css";
import Currency from "../../../utils/Currency";
import Dates from "../../../utils/Dates";
function Idfc(props) {
  return (
    <div className="app__idfc">
      <div className="idfc__header">
        <img src="/Idfc/logo.png" alt="" width={124} />
        <span className="idfc__payment">Payment successful</span>
        <span className="idfc__amount">
          {Currency.IndiaCurrency(props.amount)}
        </span>
      </div>
      <div className="idfc__content">
        <div className="idfc__section">
          <label htmlFor="" className="idfc__label">
            From
          </label>
          <span className="idfc__namecustomer --10">
            {props?.fromCustomer}
          </span>
          <span className="idfc__firstbank --3">
            IDFC FIRST BanK ****{props?.from}
          </span>
        </div>
        <div className="idfc__section __to">
          <label htmlFor="" className="idfc__label">
            To
          </label>
          <span className="idfc__namecustomer --10">{props.paidto}</span>
          <span className="idfc__firstbank --4">{props?.bankName} ****{props.account}</span>
        </div>
        <div className="idfc__section __mode">
          <label htmlFor="" className="idfc__label">
            Payment mode
          </label>
          <span className="idfc__namecustomer --7">{props?.mode}</span>
        </div>
        <div className="idfc__section --date">
          <label htmlFor="" className="idfc__label">
            Payment date
          </label>
          <span className="idfc__date --9">{Dates.idfc()}</span>
        </div>
        <div className="idfc__section">
          <label htmlFor="" className="idfc__label --transaction">
            Transaction ID
          </label>
          <span className="idfc__date --9">
            {props?.transactionId}
          </span>
        </div>
      </div>

      <div className="idfc__bottom">
        <img src="/Idfc/bottom.png" alt="" width={94} />
      </div>
    </div>
  );
}

export default Idfc;
