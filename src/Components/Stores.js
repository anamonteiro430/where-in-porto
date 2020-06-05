import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import axios from "axios";
import { StoreCard } from "./StoreCard";
import { Loading } from "./Loading";

export const Stores = () => {
  const [stores, setStores] = useState();
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState();

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://wip-api.herokuapp.com/api/stores/")
      .then((res) => {
        setStores(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (c) => {
    setSelected(c);
    setFiltered(stores);
    let filtering = stores.filter((f) => f.type === c);
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
            {filtered.length === 0 ? (
              <p className="NA">
                No {selected} available at this time. Try later!
              </p>
            ) : (
              filtered.map((f) => {
                return <StoreCard className="card" key={f.id} card={f} />;
              })
            )}
          </div>
        </main>
      </div>
    );
  }
};
