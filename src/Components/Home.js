import React, { useState, useEffect } from "react";
import { Nav } from "./Nav";
import axios from "axios";
import { Random } from "./Random";
import bg from "./../images/bg.jpg";

export const Home = () => {
  const [randomData, setRandomData] = useState([]);
  const [showCard, setShowCard] = useState(false);
  const [counter, setCounter] = useState(0);
  const [one, setOne] = useState({});

  useEffect(() => {
    console.log("running once?");
    axios
      .get("https://wip-api.herokuapp.com/api/random/")
      .then((res) => {
        setRandomData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const oneOnly = () => {
    console.log("????????", counter);
    setShowCard(true);
    setOne(randomData[counter]);

    setCounter(counter + 1);
    console.log("counter now, ", counter);
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <Nav />
      <div id="random-container">
        {counter > randomData.length ? setCounter(0) : null}
        {showCard ? (
          <Random randomData={randomData} one={one} setShowCard={setShowCard} />
        ) : null}
        {showCard ? (
          <button onClick={oneOnly} id="random-button">
            Next!
          </button>
        ) : (
          <button onClick={oneOnly} id="random-button">
            Click here for a random experience!
          </button>
        )}
      </div>
    </div>
  );
};
