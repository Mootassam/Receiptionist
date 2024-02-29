import "./icici.css";
import Currency from "../../../utils/Currency";
import Number from "../../../utils/Number";
import Dates from "../../../utils/Dates";
function Icici(props) {
  const random6Number = () => {
    return Math.floor(Math.random() * 100000) + 100000;
  };
  const generateRandomString = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex1 = Math.floor(Math.random() * alphabet.length);
    const randomIndex2 = Math.floor(Math.random() * alphabet.length);

    const randomChar1 = alphabet[randomIndex1];
    const randomChar2 = alphabet[randomIndex2];

    const randomString = randomChar1 + randomChar2;
    return randomString;
  };
  return (
    <div className="app__icici">
      <div className="icici__header">
        <img src="/icici/icici.png" alt="" />
      </div>
      <div className="icici__logo">
        <img src="/icici/ICICI_logo.png" alt="" />
      </div>
      <div className="icici__content">
        <div className="icic__content">
          <img src="/icici/check.png" alt="" height={39} width={39} />

          <div className="content__detail">
            <h1>Transfer Successful</h1>
            <div className="detail__receipt">
              <div>
                <div className="detail__icici">
                  <div className="refrence">Reference ID</div>
                  <div className="refrence">{props.reference}</div>
                </div>
                <div className="detail__icici">
                  <div className="refrence">Mode ID</div>
                  <div className="refrence">{props?.mode}</div>
                </div>
                <div className="detail__icici">
                  <div className="refrence">Paid to Account</div>
                  <div className="refrence">
                    <div className="paidtoss">{props?.paidto}</div>
                    <div>{props?.account}</div>
                  </div>
                </div>
                <div className="detail__icici">
                  <div className="refrence">Amount</div>
                  <div className="refrence">
                    {Currency.IndiaWithoutZero(props.amount)}
                  </div>
                </div>
                <div className="detail__icici">
                  <div className="refrence">From Account</div>
                  <div className="refrence">XX-XX-XX-XX-XX-{props?.from}</div>
                </div>
                <div className="detail__icici">
                  <div className="refrence">On</div>
                  <div className="refrence">{Dates.dateIcici()}</div>
                </div>
                <div className="detail__icici">
                  <div className="refrence">Remarks</div>
                  <div className="refrence">{props?.remarks}</div>
                </div>
              </div>

              <div className="icici__note">
                <b> Tip: </b>
                <span className="icici__grey" style={{ maxHeight: 10 }}>
                  Want to share this success page with beneficery? Use{" "}
                  <img
                    src="/icici/iciishare.png"
                    alt=""
                    className="icicishare"
                    width={19}
                  />{" "}
                  icon on top right.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="icici__ads">
          <img src="/icici/Picture.png" alt="" />
        </div>

        <img
          src="/icici/border.png"
          alt=""
          width={"100%"}
          className="image__border"
        />
      </div>
      <div className="ici__button">
        <div className="button__ici">
          <img src="/icici/House_Icon.png" alt="" />
          <span>Home</span>
        </div>
        <div className="button__ici">
          <img src="/icici/Star.png" alt="" />
          <span>Favourite</span>
        </div>
      </div>
    </div>
  );
}

export default Icici;
