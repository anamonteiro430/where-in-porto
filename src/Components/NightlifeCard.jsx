import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import map from "./../images/map.svg";
import facebook from "./../images/facebook.svg";
import defaulImage from "./../images/food/1_2.jpg";

export const NightlifeCard = ({ card }) => {
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
          <img src={card.urlToImage} alt="nightlife" />
        </div>
      ) : (
        <div id="product_image">
          <img src={defaulImage} alt="nightlife" />
        </div>
      )}

      <div className="description">
        <h3>{card.title}</h3>
        <div>
          {card.type ? <p className="label">{card.type}</p> : null} <br />
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
                alt="nightlife"
              />
            </div>
          ) : (
            <div className="modal_image">
              <img
                src={defaulImage}
                id="image"
                height="350px"
                alt="nightlife"
              />
            </div>
          )}

          <div id="buttons">
            {card.website.includes("facebook") ? (
              <div className="facebook">
                <a
                  href={card.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} id="facebook" alt="facebook" />
                </a>
              </div>
            ) : (
              <div className="facebook">
                <a
                  href={card.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              </div>
            )}

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
              <p className="type">{card.tag}</p>
            </div>
            {card.info ? <p class="info">{card.info}</p> : null}
          </div>
        </div>
      </Modal>
    </div>
  );
};
