import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import axios from "axios";
import { StoreCard } from "./StoreCard";
import { Loading } from "./Loading";

export const Stores = () => {
  const [stores, setStores] = useState();
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/api/stores/")
      .then((res) => {
        setStores(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (c) => {
    setFiltered(stores);
    let filtering = stores.filter((f) => f.tag === c);
    setFiltered(filtering);
  };

  const showAll = () => {
    setFiltered(stores);
  };

  if (!filtered) {
    return null;
  } else {
    return (
      <div className="bg">
        <Nav />
        <main>
          <h1>Where in Porto can I shop?</h1>
          <div id="tags">
            <button className="all pill-button" onClick={() => showAll()}>
              All
            </button>
            <button
              className="must-shop pill-button"
              onClick={() => filter("Must-Shop")}
            >
              Must-Shop
            </button>
            <button
              className="markets pill-button"
              onClick={() => filter("Markets")}
            >
              Markets
            </button>
            <button
              className="souvenirs pill-button"
              onClick={() => filter("Souvenirs")}
            >
              Souvenirs
            </button>
            <button
              className="malls pill-button"
              onClick={() => filter("Malls")}
            >
              Malls
            </button>
            <button
              className="eletronics pill-button"
              onClick={() => filter("Eletronics")}
            >
              Eletronics
            </button>
          </div>
          {loading ? <Loading /> : null}

          <div id="cards">
            {filtered.map((f) => {
              return <StoreCard className="card" key={f.id} card={f} />;
            })}
          </div>
        </main>
      </div>
    );
  }
};
