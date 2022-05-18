import React from "react";
import TouristInfoCards from "./TouristInfoCards";

const data = [
  {
    id: 1,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/View_of_Glasgow_from_Queens_Park.jpg/1920px-View_of_Glasgow_from_Queens_Park.jpg",
    site: "https://peoplemakeglasgow.com",
    title: "Glasgow City",
    description:
      "Glasgow grew from a small rural settlement on the River Clyde to become the largest seaport in Scotland"
  },
  {
    id: 2,
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Trafford_Centre_escalators.jpg/440px-Trafford_Centre_escalators.jpg",
    site: "https://visitmanchester.com",
    title: "Manchester City",
    description:
      "Greater Manchester is a metropolitan county and combined authority area in North West England, "
  },
  {
    id: 3,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7m3-djQz5UZZmvrfui09LWorcp-bHf0VKfQ&usqp=CAU",
    site: "https://visitlondon.com",
    title: "London City",
    description:
      "London is the capital and largest city of England and the United Kingdom with a total population of 9,002,488."
  }
];
function Cards() {
  return (
    <div className="row">
      {data.map(data => {
        return (
          <TouristInfoCards
            key={data.id}
            title={data.title}
            description={data.description}
            site={data.site}
            img={data.img}
          />
        );
      })}
    </div>
  );
}

export default Cards;
