import React from "react";
import "../sass/Contact.scss";
import GM from "../assets/gmail.svg";
import PN from "../assets/phone.svg";

export default function ContactMe() {
  const contactInformation = [
    { icon: GM, contact: "tmphuc0805@gmail.com", type: "email" },
    { icon: PN, contact: "0886017400", type: "phone" },
  ];
  return (
    <div className="contact">
      <div className="contact__title">Contact Me</div>
      <div className="contact__dot"></div>
      <div className="contact__description">
        Feel free to Contact me and I will get back to you as soon as possible
      </div>
      <div className="contact__detail">
        {contactInformation.map((item, idx) => (
          <div key={idx} class={`contact-card ${item.type}`}>
            <div class="overlay"></div>
            <div class="circle">
              <img src={item.icon} alt="logo" className="contact-logo" />
            </div>
            <p>{item.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
