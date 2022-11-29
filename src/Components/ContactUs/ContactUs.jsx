import React from "react";
import { contacType } from "../../appMock/Contact Type/ContactType.js";
import Card from "../Card/Card.jsx";
import ContactForm from "../ContactForm/ContactForm";
import about from "../../Styles/About.css";

export default function ContactUs() {
  return (
    <div className="py-5">
      <div className="container about px-4">
        <div className="text-center">Contact</div>
        <div className="text-center fs-4 ">FOR MORE INFO CONTACT ME</div>
        <div className="row py-5">
          {contacType?.map((data) => {
            return (
              <div key={data.id} className="col-md-4 px-3">
                <div className="px-2 py-2">
                  <Card data={data} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-5">
        <ContactForm />
      </div>
    </div>
  );
}
