import React from "react";

export default function MainContent({ data, current }) {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      {data[current] && data[current].content}
    </div>
  );
}
