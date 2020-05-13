import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import map from "./../images/map.svg";
import booking from "./../images/booking.svg";
import defaulImage from "./../images/food/1_2.jpg";
import star from "./../images/star.svg";
import starFull from "./../images/starFull.svg";

export const StayCard = ({ card }) => {
  const [modal, setModal] = useState(false);

  const ModalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transition: "ease-in-out",
      overflowY: "scroll",
    },
    content: {
      backgroundColor: "white",
      top: "2%",
      marginBottom: "50px",
      height: "auto",
    },
  };

  useEffect(() => {
    Modal.setAppElement("body");
  });

  return (
    <div className="card">
      {card.urlToImage ? (
        <div id="product_image">
          <img src={card.urlToImage} alt="stay" />
        </div>
      ) : (
        <div id="product_image">
          <img src={defaulImage} alt="stay" />
        </div>
      )}

      <div className="description">
        <h3>{card.title}</h3>
        <div>
          {card.type ? <p className="label">{card.type}</p> : null}
          <br />

          <button onClick={() => setModal(true)} className="more openModal">
            More
          </button>
        </div>
      </div>

      <Modal
        className="modall"
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={ModalStyle}
      >
        <div class="close">
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <div className="modal-content">
          {card.urlToImage ? (
            <div className="modal_image">
              <img src={card.urlToImage} id="image" height="350px" alt="stay" />
            </div>
          ) : (
            <div className="modal_image">
              <img src={defaulImage} id="image" height="350px" alt="stay" />
            </div>
          )}

          <div id="buttons">
            <div className="stars">
              {card.stars === "1" ? (
                <div>
                  <img src={starFull} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              ) : card.stars === "2" ? (
                <div>
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
              ) : card.stars === "3" ? (
                <div>
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={star} />
                  <img src={star} />
                </div>
              ) : card.stars === "4" ? (
                <div>
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={star} />
                </div>
              ) : (
                <div>
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={starFull} />
                  <img src={starFull} />
                </div>
              )}
            </div>
            <div className="booking">
              <a href={card.booking} target="_blank" rel="noopener noreferrer">
                <img src={booking} alt="booking" width="32" />
              </a>
            </div>

            <div className="map">
              <a href={card.map} target="_blank" rel="noopener noreferrer">
                <img src={map} id="map" alt="map" />
              </a>
            </div>
          </div>

          <div className="modal-info">
            <div className="modal-info-header">
              <h3 className="title">{card.title}</h3>
              <p className="price">{card.price}</p>
            </div>
            <div className="modal-info-middle">
              <p className="address">{card.address}</p>
              <p className="tag">{card.tag}</p>
            </div>
            {card.info ? <p class="info">{card.info}</p> : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};
