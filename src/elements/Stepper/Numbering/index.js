import React from "react";
import propTypes from "prop-types";
import "./index.scss";
export default function Numbering({ styles, className, data, current }) {
  const KeysOfData = Object.keys(data);
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <ol className={["stepper", className].join(" ")} style={styles}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? "active" : "";
          if (index + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }
          return (
            <li key={`list-${index}`} className={[isActive].join(" ")}>
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
