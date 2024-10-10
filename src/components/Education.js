import React from "react";
import "../sass/Education.scss";
import HS from "../assets/logo1.png";
import US from "../assets/logo2.png";
import EN from "../assets/logo3.png";

function Card({ item }) {
  return (
    <div class="edu-card">
      <img src={item.logo} alt="school logo" />

      <div class="edu-card__content">
        <p class="edu-card__title">{item.title}</p>
        <p class="edu-card__description">
          {item.description.map((i, idx) => (
            <p key={idx}>{i}</p>
          ))}
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  const dataEducation = [
    {
      title: "Nguyen Trai High School",
      logo: HS,
      description: [
        "The Union executive committee",
        "Communication board",
        "GPA: 8.5/10",
      ],
    },
    {
      title: "University of Science (HCMUS)",
      logo: US,
      description: [
        "Member of design Club (Design ITus) - Photographer",
        "GPA: 3.01/10",
      ],
    },
    {
      title: "TOEIC certificate",
      logo: EN,
      description: [
        "Reading and listening: 770 / 990",
        "Speaking and writing: 280 / 400",
      ],
    },
  ];

  return (
    <div className="education">
      <div className="education__title">Education</div>
      <div className="education__dot"></div>
      <div className="education__description">
        Here you will see some of my degrees and cirtificate
      </div>

      <div className="education__detail">
        {dataEducation.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
