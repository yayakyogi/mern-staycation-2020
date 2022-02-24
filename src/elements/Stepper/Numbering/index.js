import React from "react";
import propTypes from "prop-types";
import "./index.scss";
export default function Numbering({ styles, className, data, current }) {
  const KeysOfData = Object.keys(data); // cari key nya saja dari data yang dikirim
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <ol className={["stepper", className].join(" ")} style={styles}>
        {KeysOfData.map((list, index) => {
          // cek jika list == current maka berikan class active jika tidak maka kosongi
          let isActive = list === current ? "active" : "";
          // cek apakah index == total jumlah step ? jika ya beri class isActive kosong dan return null supaya tidak merender apapun
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }
          // render number
          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
              {/* karena keyOfData berbentuk array dan array dimulai dari 0 maka index harus ditambah 1 */}
              {index + 1}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
};
