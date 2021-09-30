import React from "react";

import Button from "../elements/Button";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* col 1 */}
          <div className="col" style={{ width: 250 }}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          {/* col 2 */}
          <div className="col-2 mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group flust">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          {/* col 3 */}
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group flust">
              <li className="list-group-item">
                <Button type="link" href="/registe">
                  Our Carrers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/registe">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/registe">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          {/* col 4 */}
          <div className="col-2 mr-5">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group flust">
              <li className="list-group-item">
                <Button
                  isEkternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+6202122081996">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
