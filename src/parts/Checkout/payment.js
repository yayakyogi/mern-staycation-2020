import React from "react";
import { InputText, InputFile } from "elements/Form";

export default function Payment(props) {
  const { data, itemDetails, checkout } = props;

  // cost
  const tax = 10; // diskon
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <div className="container">
      <div className="row justify-content-center align-items-start">
        <div className="col-12 col-md-5 border-right booking-information">
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="mb-4">Transfer Pembayaran</p>
            <p>Tax: {tax}%</p>
            <p>Sub total: {subTotal} USD</p>
            <p>Total: {grandTotal} USD</p>
            {itemDetails.bank.map((bank, index) => {
              return (
                <div key={index} className="row mt-4">
                  <div className="col-3 text-right">
                    <img
                      src={`${process.env.REACT_APP_HOST}/${bank.imageUrl}`}
                      alt="logo_back_bca"
                      width="60"
                    />
                  </div>
                  <div className="col">
                    <dl>
                      <dd>{bank.nameBank}</dd>
                      <dd>{bank.nomorRekening}</dd>
                      <dd>{bank.name}</dd>
                    </dl>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-md-5 booking-form">
          <div data-aos="fade-up" data-aos-delay="600">
            <label htmlFor="proofPayment">Upload Bukti Transfer</label>
            <InputFile
              accept="image/*"
              id="proofPayment"
              name="proofPayment"
              value={data.proofPayment}
              onChange={props.onChange}
            />

            <label htmlFor="bankName">Asal Bank</label>
            <InputText
              id="bankName"
              name="bankName"
              type="text"
              value={data.bankName}
              onChange={props.onChange}
            />

            <label htmlFor="bankHolder">Nama Pengirim</label>
            <InputText
              id="bankHolder"
              name="bankHolder"
              type="text"
              value={data.bankHolder}
              onChange={props.onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
