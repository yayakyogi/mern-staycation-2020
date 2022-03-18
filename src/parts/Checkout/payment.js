import React from "react";
import { InputText, InputFile } from "elements/Form";

import logoBCA from "assets/images/logo_bank_bca.png";
import logoMandiri from "assets/images/logo_bank_mandiri.png";

export default function Payment(props) {
  // destructuring props
  const { data, itemDetails, checkout } = props;

  // cost
  const tax = 10; // diskon
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <div className="container">
      <div className="row justify-content-center align-items-start">
        <div className="col-5 border-right py-3" style={{ paddingRight: 80 }}>
          <div data-aos="fade-up" data-aos-delay="300">
            <p className="mb-4">Transfer Pembayaran</p>
            <p>Tax: {tax}%</p>
            <p>Sub total: {subTotal} USD</p>
            <p>Total: {grandTotal} USD</p>
            <div className="row mt-4">
              <div className="col-3 text-right">
                <img src={logoBCA} alt="logo_back_bca" width="60" />
              </div>
              <div className="col">
                <dl>
                  <dd>Bank Central Asia</dd>
                  <dd>2222 - 0000</dd>
                  <dd>Yayak Yogi Ginantaka</dd>
                </dl>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-3 text-right">
                <img src={logoMandiri} alt="logo_back_bca" width="60" />
              </div>
              <div className="col">
                <dl>
                  <dd>Bank Mandiri</dd>
                  <dd>0000 - 2222</dd>
                  <dd>Yayak Yogi Ginantaka</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 py-3" stle={{ paddingLeft: 80 }}>
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
