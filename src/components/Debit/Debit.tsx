import { useState } from "preact/hooks";
import { useEffect, useRef } from "react";
import Kotak from "./Kotak/Kotak";
import Paytm from "./UpiSystem/Paytm";
import Imps from "./Imps/Imps";
import Blue from "./Blue/Blue";
import Equitas from "./Equitas/Equitas";
import Axis from "./Axis/Axis";
import System from "./System/System";
import Hdfc from "./HDFC/Hdfc";
import Sbi from "./Sbi/Sbi";
import Indusland from "./InduslandBank/Indusland";
import Icici2 from "./Icici/Icici2";
import Icici from "./Icici/Icici";
import Sbi2 from "./Sbi2/Sbi2";
import Sys from "./Sys/Sys";
import Names from "../../utils/Names";
import CheckTheme from "../../utils/CheckTheme";
import html2canvas from "html2canvas";
import Header from "../../layout/Header";
import Samsung from "./Samsung/Samsung";
import Idfc from "./Idfc/Idfc";
import Grey from "./IdfcG/Grey";
import Fi from "./Fi/Fi";
import RedKotak from "./RedKotak/RedKotak";
import Yes from "./Yes/Yes";
import "../../app.css";
import Number from "../../utils/Number";
import { useSelector } from "react-redux";
import { debitDetaill } from "../../store/debit/debitSelectors";
import Green from "./Green/Green";
import optionsbank from "../../data/optionsbank";
import CheckAmoutn from "../../utils/CheckAmount";
import list from "../../data/bank";
function Debit() {
  const [amount, setAmount] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const [template, setTemplate] = useState("icici");
  const [reference, setReference] = useState<any | null>(null);
  const [utr, setutr] = useState<any | null>(null);
  const [transactionId, setTransaction] = useState<any | null>(null);
  const [theme, setTheme] = useState("light");
  const [loaded, setLoaded] = useState(false);
  const [upi, setUpi] = useState<any | null>();
  const dataDebit = useSelector(debitDetaill);

  const [mode, setMode] = useState("");
  const [paidto, setPaidTo] = useState("");
  const [account, setAccountTo] = useState("");
  const [from, setFrom] = useState("");
  const [remarks, setRemarks] = useState("");
  const [ifsc, setifsc] = useState("");
  const [bankName, setBankName] = useState("");

  const [fromCustomer, setCustomerFrom] = useState("")
  const [froms, setfroms] = useState(Number.getRandomItem(list));

  const change = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
    let utr = Math.floor(100000000000 + Math.random() * 900000000000);

    setutr(utr);
    setTransaction(`${upi}${Number.phonepe0()}`);

  };

  useEffect(() => {
    if (divRef.current) {
      setLoaded(true);
    }
  }, [upi, amount, template]);

  useEffect(() => {
    if (divRef.current) {
      setLoaded(true);
    }
    if (dataDebit?.bank) {
      setTemplate(dataDebit.template);
      setAmount(dataDebit.amount);

      setTransaction(dataDebit.transaction);
    }
    setfroms(Number.getRandomItem(list));

  }, [divRef, dataDebit]);

  // const generate = async () => {
  //   let data;
  //   [
  //     "phonepe1",
  //     "phonepe2",
  //     "paytm",
  //     "bharat",
  //     "gpay",
  //     "phonepe3",
  //     "samsung",
  //   ].includes(template)
  //     ? (data = {
  //         amount: amount,
  //         upi: upi,
  //         template: template,
  //         bank: from.name,
  //         transaction: transactionId,
  //         account: account,
  //         time: Dates.currentTime(),
  //         creditTime: "",
  //       })
  //     : (data = {
  //         amount: amount,
  //         upi: upi,
  //         template: template,
  //         bank: template,
  //         transaction: transactionId,
  //         account: account,
  //         time: Dates.currentTime(),
  //         creditTime: "",
  //       });

  //   try {
  //     dispatch(saveDebit(data));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  function handleCaptureScreenshot() {
    if (divRef.current) {
      html2canvas(divRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          if (blob !== null) {
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard
              .write([item])
              .then(() => {
                console.log("Screenshot copied to clipboard");
              })
              .catch((error) => {
                console.error("Error copying screenshot to clipboard:", error);
              });
          }
        }, "image/png");
        setAmount(amount);
      });
    }
  }



  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__content">
        <div className="app__sidebar">
          <div className="form__submit">
            {template !== 'Yes' && template !== 'sbi' && <div className="sdiebar__form">

              < label htmlFor=""> Reference ID</label>
              <input
                name="amount"
                id=""
                className="app__select"
                onChange={(e) => setReference(e.target.value)}
              />
            </div>}

            {template !== 'kotak' && template !== 'imps' && template !== 'airtel' && template !== 'Yes' && template !== 'Green' && template !== 'sbi' && template !== 'redKotak' && template !== 'bharat' && template !== 'samsung' && <div className="sdiebar__form">
              <label htmlFor=""> Mode ID</label>
              <input
                name="amount"
                id=""
                className="app__select"
                onChange={(e) => setMode(e.target.value)}
              />
            </div>}

            {template !== 'Yes' && template !== 'Green' && template !== 'sbi' && template !== 'bharat' && template !== 'samsung' && <div className="sdiebar__form">
              <label htmlFor="">Paid To</label>
              <input
                name="amount"
                id=""
                className="app__select"
                onChange={(e) => setPaidTo(e.target.value)}
              />
            </div>}

            {template !== 'imps' && template !== 'samsung' &&
              <div className="sdiebar__form">
                <label htmlFor="">Account To</label>
                <input
                  name="amount"
                  id=""
                  className="app__select"
                  onChange={(e) => setAccountTo(e.target.value)}
                />
              </div>
            }



            <div className="sdiebar__form">
              <label htmlFor=""> Write Amount</label>
              <input
                name="amount"
                id=""
                className="app__select"
                onChange={change}
              />
            </div>
            {template !== 'kotak' && template !== 'imps' && template !== 'airtel' && template !== 'Yes' && template !== 'Green' && template !== 'sbi' && template !== 'bharat' && template !== 'samsung' &&
              < div className="sdiebar__form">
                <label htmlFor="">From Account</label>
                <input
                  name="amount"
                  id=""
                  className="app__select"
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
            }

            {template !== 'kotak' && template !== 'imps' && template !== 'airtel' && template !== 'Green' && template !== 'sbi' && template !== 'impsblue' &&
              <div className="sdiebar__form">
                <label htmlFor="">From Customer name</label>
                <input
                  name="fromCustomer"
                  id=""
                  className="app__select"
                  onChange={(e) => setCustomerFrom(e.target.value)}
                />
              </div>
            }
            {template !== 'imps' && template !== 'icici' && template !== 'Yes' && template !== 'Green' && template !== 'sbi' && template !== 'redKotak' && template !== "Fi" && template !== 'bharat' && template !== 'impsblue' && template !== 'samsung' &&
              <div className="sdiebar__form">
                <label htmlFor=""> Bank Name</label>
                <input
                  name="bankname"
                  id=""
                  className="app__select"
                  onChange={(e) => setBankName(e.target.value)}
                />
              </div>}
            {template !== 'imps' && template !== 'icici' && template !== 'grey' && template !== 'idfc' && template !== 'Yes' && template !== 'Green' && template !== 'sbi' && template !== 'redKotak' && template !== "Fi" && template !== 'bharat' && template !== 'impsblue' && template !== 'samsung' &&
              <div className="sdiebar__form">
                <label htmlFor=""> IFSC</label>
                <input
                  name="IFSC"
                  id=""
                  className="app__select"
                  onChange={(e) => setifsc(e.target.value)}
                />
              </div>}

            {template !== 'kotak' && template !== 'idfc' && template !== 'Green' && template !== 'sbi' && template !== 'redKotak' && template !== "Fi" && template !== 'samsung' &&
              < div className="sdiebar__form">
                <label htmlFor=""> Remarks</label>
                <input
                  name="amount"
                  id=""
                  className="app__select"
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </div>
            }

            {template === 'samsung' &&
              < div className="sdiebar__form">
                <label htmlFor=""> UPI ID</label>
                <input
                  name="amount"
                  id=""
                  className="app__select"
                  onChange={(e) => setUpi(e.target.value)}
                />
              </div>
            }
            <div className="sdiebar__form">
              <label htmlFor="">Select Bank</label>
              <select
                className="app__select"
                onChange={(event) => {
                  setTemplate(event.target.value);
                }}
              >
                {optionsbank.map(
                  (item, index) =>
                    CheckAmoutn.checkAmount(amount, item.value) && (
                      <option key={index} value={item.value}>
                        {item.label}
                      </option>
                    )
                )}
              </select>
            </div>

            <div></div>

            {CheckTheme.checkTheme(template) && (
              <div className="sdiebar__form">
                <label htmlFor="">Template</label>
                <select
                  className="app__select"
                  onChange={(e) => {
                    setTheme(e.target.value);
                  }}
                >
                  <option value="light"> Light</option>
                  <option value="dark"> Dark</option>
                </select>
              </div>
            )}

            <button className="generate" onClick={handleCaptureScreenshot}>
              <img src="/sidebar/screenshot.png" alt="" width={40} />
            </button>
          </div>
        </div>
        <div className="content__card">
          <div className="card__payment flash ">
            <div className="screenshot" ref={divRef}>
              {loaded && (
                <>
                  {template === "kotak" && (
                    <Kotak
                      amount={amount}
                      upi={upi}
                      reference={reference}
                      account={account}
                      ifsc={ifsc}
                      bankName={bankName}
                      paidto={paidto}
                    />
                  )}
                  {template === "phonepe2" && (
                    <Paytm
                      amount={amount}
                      theme={theme}
                      utr={utr}
                      transactionId={transactionId}
                      upi={upi}
                      from={from}
                      account={account}
                    />
                  )}
                  {template === "imps" && (
                    <Imps
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={reference}
                      remarks={remarks}
                      paidto={paidto}
                    />
                  )}
                  {template === "icici" && (
                    <Icici
                      amount={amount}
                      reference={reference}
                      ifsc={ifsc}
                      upi={upi}
                      transactionId={transactionId}
                      mode={mode}
                      account={account}
                      paidto={paidto}
                      from={from}
                      remarks={remarks}
                    />
                  )}
                  {template === "impsblue" && (
                    <Blue
                      amount={amount}

                      reference={reference}
                      account={account}
                      mode={mode}
                      paidto={paidto}
                      from={from}
                      remarks={remarks}
                    />
                  )}
                  {template === "airtel" && (
                    <Equitas
                      amount={amount}
                      upi={upi}
                      transactionId={reference}
                      account={account}
                      ifsc={ifsc}
                      remarks={remarks}
                      paidto={paidto}
                      bankName={bankName}


                    />
                  )}
                  {template === "axis" && (
                    <Axis
                      amount={amount}
                      upi={upi}
                      transactionId={transactionId}
                      account={account}
                    />
                  )}
                  {template === "phonepe1" && (
                    <System
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "paytm" && (
                    <Hdfc
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "sbi" && (
                    <Sbi
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                      mode={mode}
                      paidto={paidto}
                      from={from}
                      remarks={remarks}
                    />
                  )}
                  {template === "sbimessage" && (
                    <Sbi2
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={transactionId}
                      mode={mode}
                      paidto={paidto}
                      from={from}
                      remarks={remarks}
                    />
                  )}
                  {template === "gpay" && (
                    <Indusland
                      name={Names.generateRandomFullName()}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}

                  {template === "bharat" && (
                    <Icici2
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={reference}
                      froms={froms}
                      remarks={remarks}
                      fromCustomer={fromCustomer}
                    />
                  )}
                  {template === "phonepe3" && (
                    <Sys
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={transactionId}
                    />
                  )}
                  {template === "samsung" && (
                    <Samsung
                      theme={theme}
                      amount={amount}
                      upi={upi}
                      from={from}
                      account={account}
                      transactionId={reference}
                      fromCustomer={fromCustomer}
                      upid={upi}
                    />
                  )}
                  {template === "idfc" && (
                    <Idfc
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={reference}
                      ifsc={ifsc}
                      bankName={bankName}
                      paidto={paidto}
                      remarks={remarks}
                      mode={mode}
                      from={from}
                      fromCustomer={fromCustomer}
                    />
                  )}
                  {template === "grey" && (
                    <Grey
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={reference}
                      ifsc={ifsc}
                      bankName={bankName}
                      paidto={paidto}
                      remarks={remarks}
                      mode={mode}
                      from={from}
                      fromCustomer={fromCustomer}
                    />
                  )}
                  {template === "Fi" && (
                    <Fi
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={reference}
                      ifsc={ifsc}
                      bankName={bankName}
                      paidto={paidto}
                      remarks={remarks}
                      mode={mode}
                      from={from}
                      fromCustomer={fromCustomer}
                    />
                  )}

                  {template === "redKotak" && (
                    <RedKotak
                      amount={amount}
                      upi={upi}
                      account={account}
                      transactionId={reference}
                      ifsc={ifsc}
                      bankName={bankName}
                      paidto={paidto}
                      remarks={remarks}
                      mode={mode}
                      from={from}
                      fromCustomer={fromCustomer}
                    />
                  )}

                  {template === "Yes" && (
                    <Yes
                      amount={amount}
                      account={account}
                      transactionId={reference}
                      ifsc={ifsc}
                      bankName={bankName}
                      paidto={paidto}
                      remarks={remarks}
                      mode={mode}
                      from={from}
                      fromCustomer={fromCustomer}
                    />
                  )}

                  {/* {template === "PTM" && (
                    <PTM
                      amount={amount}
                      account={account}
                      transactionId={transactionId}
                      from={from}
                    />
                  )} */}

                  {template === "Green" && (
                    <Green
                      amount={amount}
                      account={account}
                      transactionId={reference}
                      from={from}
                      bankName={bankName}
                      paidto={paidto}
                      remarks={remarks}
                      mode={mode}
                      fromCustomer={fromCustomer}
                    />
                  )}
                </>
              )}
            </div>

            {/* <div className="credit__screenshot" ref={creditRef}>
              <CreditIcici
                amount={amount}
                account={account}
                transactionId={transactionId}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Debit;
