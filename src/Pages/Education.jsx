import React, { useState } from "react";
import "../sass/Education.scss";
import Navbar from "../components/Navbar";
import In4 from "../components/In4";
import Edu from "../assets/edu.png";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FloatButton } from "antd";

import node from "../assets/Certificate-NODEJS.jpg";
import toeic from "../assets/TOEIC - Copy.jpg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";

const dataIn4 = {
  Name: "EDUCATION",
  Des: "My degrees and cirtificate",
  Img: Edu,
};

const dataDegree = [
  {
    school: "Nguyen Trai High School",
    time: "(2017-2020)",
    des: [
      { note: "The Union executive committee" },
      { note: "Communication board" },
      { note: "GPA: 8.5/10" },
    ],
    img: logo1,
  },
  {
    school: "University of Science (HCMUS)",
    time: "(2020-2024)",
    des: [
      { note: "Memmber of design Club (Desgin ITus)" },
      { note: "GPA: 3.01/4" },
    ],
    img: logo2,
  },
];

function Card({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((e) => !e);
  }

  return isOpen ? (
    <div className="card--expand">
      <img className="card--expand__img" src={data.img} alt="logo school" />
      <MinusOutlined onClick={handleClick} className="close" />
      <div className="card--expand__inf4">
        <div className="card--expand__school">
          <text className="card--expand__school__name">{data.school}</text>
          <text className="card--expand__school__year">{data.time}</text>
        </div>
        <div className="card--expand__school__des">
          {data.des.map((D, idx) => (
            <div className="card--expand__school__des__detail" key={idx}>
              ✍{D.note}
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Button onClick={handleClick} type="text" className="card">
      <div className="card__text">{data.school}</div>
      <PlusOutlined className="card__expand" />
    </Button>
  );
}

function Degree() {
  return (
    <div>
      <div className="cirti__title">Academic Degrees</div>
      <div className="degree">
        {dataDegree.map((data, idx) => (
          <Card data={data} key={idx} />
        ))}
      </div>
    </div>
  );
}

function Cirtificate() {
  return (
    <div>
      <div className="cirti__title">Cirtificate</div>
      <div className="cirti__img-cover">
        <img className="cirti__img" src={toeic} alt="toeic degree" />
        <img className="cirti__img" src={node} alt="node cirtificate" />
      </div>
    </div>
  );
}

function Education() {
  return (
    <>
      <Navbar />
      <In4 data={dataIn4} />
      <Degree />
      <Cirtificate /> <FloatButton.BackTop />
    </>
  );
}

export default Education;
