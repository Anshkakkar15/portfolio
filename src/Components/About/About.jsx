import React, { useState } from "react";
import "../../Styles/About.css";
import Card from "../Card/Card";
import ContactForm from "../ContactForm/ContactForm";
import Loader from "../Loader/Loader";
import Projects from "../Projects/Projects";
import { services } from "../../appMock/Card/Card";

export default function About() {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 2000);
  return (
    <div>
      {loader ? (
        <div className="d-flex justify-content-center align-item-center">
          <Loader loading={loader} />
        </div>
      ) : (
        <div className="w-100 color-bg py-3">
          <div className="container about">
            <h2 className="color fs-6">Ansh Kakkar</h2>
            <h2 className="fs-5 text-muted fw-semibold">Front-End Developer</h2>
            <i className="fa-sharp fa-solid fa-code pb-4 fs-4"></i>
            <br />
            <p className="text-muted fs-5">
              I create web application to fulfill the need of clients and
              staisfy their demand . If you are an employer and looking for
              something similar you can hire me as as front end developer, you
              can find my resume below.
            </p>
            <button className="button text-center">View My Profile</button>
          </div>
        </div>
      )}
      <Projects />
      <div className="container w-50">
        <div className="text-center">What I Do</div>
        <Card data={services} />
      </div>
      <ContactForm />
    </div>
  );
}
