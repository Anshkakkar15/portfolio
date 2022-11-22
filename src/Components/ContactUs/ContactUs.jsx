import React from "react";
import { contacType } from "../../appMock/Contact Type/ContactType.js";
import Card from "../Card/Card.jsx";
import ContactForm from "../ContactForm/ContactForm";
export default function ContactUs() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Card data={contacType} />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
