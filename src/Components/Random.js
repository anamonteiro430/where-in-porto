import React from "react";
import map from "./../images/map.svg";

export const Random = (props) => {
  console.log("Props", props);
  if (!props.one) {
    return <p>aaa</p>;
  } else {
    return (
      <div id="random-content">
        <div id="random-header">
          <div id="random-image">
            <img src={props.one.urlToImage} width="200" alt="random" />
          </div>
          <h1>{props.one.title}</h1>
          <h2>{props.one.address}</h2>
        </div>
        <div id="random-info">
          <div id="close-button">
            <button onClick={() => props.setShowCard(false)}>X</button>
          </div>
          <h2>{props.one.type}</h2>
          <div className="info">
            <p>{props.one.info}</p>
            <h3>{props.one.tag}</h3>
          </div>

          <div id="random-buttons">
            <div className="website">
              <a
                href={props.one.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
            <div className="map">
              <a href={props.one.map}>
                <img src={map} id="map-random" alt="map" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
