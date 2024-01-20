import React from "react";
import Navbar from "../components/Navbar";
import "../sass/Interest.scss";
import ITR from "../assets/Interest.jpg";
import In4 from "../components/In4";
import { FloatButton } from "antd";

import list1 from "../assets/list_1.jpg";
import list2 from "../assets/list_2.jpg";
import list3 from "../assets/list_3.jpg";
import sport from "../assets/sport.jpg";
import game1 from "../assets/game1.png";
import game2 from "../assets/game2.jpg";

const dataIn4 = {
  Name: "INTEREST",
  Des: "My hobbies",
  Img: ITR,
};

const dataList = [
  {
    name: "Traveling",
    des: "I love traveling by motobike. I enjoy the feeling of exploring new places in VietNam with me friend.",
    imgs: [{ photo: list1 }, { photo: list2 }, { photo: list3 }],
  },
  {
    name: "Playing sports",
    des: "I just enjoy playing sport, especially badminton. I often spend 2 hours on Sunday morning to play badminton with my friends.",
    imgs: [{ photo: sport }],
  },
  {
    name: "Playing  game",
    des: "I play most of the time in the night  and only play with my friend. If my play time have bad affect to my working, I will delete it.",
    imgs: [{ photo: game1 }, { photo: game2 }],
  },
];

function ListInterest() {
  return (
    <div className="interst">
      {dataList.map((data, idx) => (
        <div className="interst--cover" key={idx}>
          <div className="interst__name">{data.name}</div>
          <div
            className={
              idx - 1 === 0 ? "interst--cover-reverse" : "interst--cover"
            }
          >
            <div className={idx - 2 === 0 ? "interst__des1" : "interst__des"}>
              {data.des}
            </div>
            {data.imgs.map((pic, idx1) => (
              <img
                className={idx - 2 === 0 ? "interst__img2" : "interst__img"}
                key={idx1}
                src={pic.photo}
                alt={idx}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Interest() {
  return (
    <div>
      <Navbar />
      <In4 data={dataIn4} />
      <ListInterest />
      <FloatButton.BackTop />
    </div>
  );
}

export default Interest;
