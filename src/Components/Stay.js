import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { StayCard } from "./StayCard";
import { Loading } from "./Loading";
import axios from "axios";

export const Stay = () => {
  const [stay, setStay] = useState();
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/api/stay/")
      .then((res) => {
        setStay(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (c) => {
    setFiltered(stay);
    let filtering = stay.filter((f) => f.type === c);
    setFiltered(filtering);
  };

  const showAll = () => {
    setFiltered(stay);
  };

  if (!filtered) {
    return null;
  } else {
    return (
      <div className="bg">
        <Nav />
        <main>
          <h1>Where in Porto can I stay?</h1>

          <div id="tags">
            <button className="all pill-button" onClick={() => showAll()}>
              All
            </button>
            <button
              className="hotels pill-button"
              onClick={() => filter("Hotels")}
            >
              Hotels
            </button>
            <button
              className="guesthouses pill-button"
              onClick={() => filter("Guesthouses")}
            >
              Guesthouses
            </button>
            <button
              className="apartments pill-button"
              onClick={() => filter("Apartments")}
            >
              Apartments
            </button>
            <button
              className="pet-friendly pill-button"
              onClick={() => filter("Pet-Friendly")}
            >
              Pet-Friendly
            </button>
            <button
              className="hostels pill-button"
              onClick={() => filter("Hostels")}
            >
              Hostels
            </button>
          </div>
          {loading ? <Loading /> : null}

          <div id="cards">
            {filtered.map((f) => {
              return <StayCard className="card" key={f.id} card={f} />;
            })}
          </div>
        </main>
      </div>
    );
  }
};
