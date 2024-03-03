import Dates from "../../../utils/Dates";
import Currency from "../../../utils/Currency";
import "./Kotak.css";

function Kotak(props) {
  return (
    <div className="app__kotak">
      <div className="kotak__header">
        <img src="/kotak.png" alt="" width={200} />
      </div>
      <div className="kotak__content">
        <div className="kotak__title">Transfer Details</div>
        <div className="kotak__group">
          <div className="group__form">
            <label htmlFor="">Reference No. (UTR No./RRN)</label>
            <span> {props?.reference} </span>
          </div>
          <div className="group__form">
            <label htmlFor="">Date & Time</label>
            <span>{Dates.dateKotak(props?.time)} </span>
          </div>
          <div className="group__form">
            <label htmlFor="">Transfer Amount</label>
            <span>
              <b
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {Currency.IndiaWithoutZero(props.amount)}
                <div className="small__zero">.00</div>
              </b>
            </span>
          </div>
          <div className="group__form">
            <label htmlFor="">Benificiary name</label>

            <span>{props.paidto}</span>
          </div>
          <div className="group__form">
            <label htmlFor="">Bank Name</label>
            <span>{props?.bankName}</span>
          </div>
          <div className="group__form">
            <label htmlFor="">Account number</label>
            <span>{props?.account}</span>
          </div>

          <div className="group__form">
            <label htmlFor="">IFSC</label>
            <span>{props?.ifsc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kotak;
