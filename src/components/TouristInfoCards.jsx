import React from "react";

function TouristInfoCards(props) {
  return (
    <div class="col-sm-3">
      <div className="card-body">
        <div className="card">
          <img src={props.img} className="card-img-top" />
          <div className="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <a href={props.site} className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
