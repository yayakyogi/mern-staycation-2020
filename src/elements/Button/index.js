import React from "react";
import { Link } from "react-router-dom"; // Dipakai untuk route navigation
import propTypes from "prop-types";

export default function Button(props) {
  // isinya array yang propsnya diterima dari component yg memakai button ini
  const className = [props.className];
  // Cek kondisi jika propsnya bertype primary push className nya dengan string btn-primary
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isBlock) className.push("btn-block");
  if (props.isLight) className.push("btn-light");
  if (props.hasShadow) className.push("btn-shadow"); // buat custom class sendiri

  const onClick = () => {
    // Pastikan jika button menerima props onClick,daripada apps crash
    if (props.onClick) props.onClick();
  };

  // Cek juga jika button disable atau loading
  if (props.isDisabled || props.isLoading) {
    // cek dulu apakah button ini disable
    if (props.isDisabled) {
      className.push("disabled");
    } // beri classnya disable
    return (
      <span
        className={className.join(" ")} // setiap menerima value array gabungkan value tsb dengan pemisah spasi
        style={props.style} // kembalikan semua style yg ada di array>
      >
        {props.isLoading ? (
          // lalu cek apakah propsnya isLoading ? jika ya tampilkan animasi loading
          <div className="row align-items-center justify-content-center pt-1">
            <span
              className="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </div>
        ) : (
          // Jika propsnya bukan isLoading maka tampilkan props children
          props.children
        )}
      </span>
    );
  }

  // Rendering component,cek apakah typenya link atau bukan
  if (props.type === "link") {
    // Kemudian ada pengeceka lagi apakah linknya ekternal atau bukan
    if (props.isExternal) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          href={props.href} // href ambil dari props href
          className={className.join(" ")} // setiap menerima value array gabungkan value tsb dengan pemisah spasi
          style={props.style} // kembalikan semua style yg ada di array
          target={props.target === "_blank" ? "_blank" : undefined} // jika ada props target yg blank maka berikan targetnya blank,jika tidak undefined
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined} // cek target jika blank? maka kasih rel noopener norefener untuk kebutuhan SEO,jika target blank tapi tidak diberi itu maka akan ada warning pada saat proses development
        >
          {/* Untuk menampilkan nama dari button */}
          {props.children}
        </a>
      );
    } else {
      // Jika link untuk mengarah ke halaman di route projek
      return (
        <Link
          to={props.href} // tidak menggunakan href karena link akan mengarah ke dalam projek
          className={className.join(" ")} // setiap menerima value array gabungkan value tsb dengan pemisah spasi
          style={props.style} // kembalikan semua style yg ada di array
          onClick={onClick} // untuk berjaga-jaga jika di button Link ada onClick untuk mengambil link
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      styles={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  clasName: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  isPrimary: propTypes.bool,
  hasShadow: propTypes.bool,
};
