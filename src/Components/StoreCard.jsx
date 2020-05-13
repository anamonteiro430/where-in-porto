import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import map from "./../images/map.svg";
import facebook from "./../images/facebook.svg";
import defaulImage from "./../images/food/1_2.jpg";

export const StoreCard = ({ card }) => {
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
          <img src={card.urlToImage} alt="store" />
        </div>
      ) : (
        <div id="product_image">
          <img src={defaulImage} alt="store" />
        </div>
      )}

      <div className="description">
        <h3>{card.title}</h3>
        <div>
          {card.tag ? <p className="label">{card.tag}</p> : null}
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
              <img
                src={card.urlToImage}
                id="image"
                height="350px"
                alt="store"
              />
            </div>
          ) : (
            <div className="modal_image">
              <img src={defaulImage} id="image" height="350px" alt="store" />
            </div>
          )}

          <div id="buttons">
            <div className="website">
              <a
                href={`//${card.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to website
              </a>
            </div>

            <div className="map" style={{ width: "50%" }}>
              <a href="https://www.w3schools.com">
                <img src={map} id="map" alt="store" />
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
              <p className="type">{card.type}</p>
            </div>
            {card.info ? <p class="info">{card.info}</p> : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};
