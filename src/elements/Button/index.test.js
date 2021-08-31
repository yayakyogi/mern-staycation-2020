import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Test button disable
test("Should not allowed click button if isDisabled is present", () => {
  // Ambil container/pembungkusnya dari function render button,dan beri buttonya props disabled
  const { container } = render(<Button isDisabled></Button>);

  // Ekpektasikan pengecekannya,cek tag span apakah ada className disablenya atau bukan, dan pastikan ada di dokumen
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// Tes button loading
test("Should render loading/spinner", () => {
  // Ambil dari container dan text yg didapat di function render button
  const { container, getByText } = render(<Button isLoading></Button>);

  // Ekpektasikan apakah ada kata loading didalam component dengan regex
  expect(getByText(/loading/i)).toBeInTheDocument();
  // Ekpektasikan pengecekannya,cek tag span apakah ada className disablenya atau bukan, dan pastikan ada di dokumen
  expect(container.querySelector("span")).toBeInTheDocument();
});

// Tes button link ekternal
test("Should render <a> tag", () => {
  // Ambil dari container dan text yg didapat di function render button
  const { container, getByText } = render(
    <Button type="link" isExternal></Button>
  );

  // Ekpektasikan pengecekannya,cek tag span apakah ada className disablenya atau bukan, dan pastikan ada di dokumen
  expect(container.querySelector("a")).toBeInTheDocument();
});

// Tes button link
test("Should render <Link> component", () => {
  // Ambil dari container dan text yg didapat di function render button
  const { container, getByText } = render(
    // Untuk component button yg tidak memiliki type external bungkus ke dalam component router dan beri href ke lokasi file yg dituju
    <Router>
      <Button href="/src/pages/LandingPage.js" type="link"></Button>
    </Router>
  );

  // Ekpektasikan pengecekannya,cek tag span apakah ada className disablenya atau bukan, dan pastikan ada di dokumen
  expect(container.querySelector("a")).toBeInTheDocument();
});
