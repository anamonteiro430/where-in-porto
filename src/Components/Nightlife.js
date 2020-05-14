import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { NightlifeCard } from "./NightlifeCard";
import axios from "axios";
import { Loading } from "./Loading";

export const Nightlife = () => {
  const [nightlife, setNightlife] = useState();
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://wip-api.herokuapp.com/api/nightlife/")
      .then((res) => {
        setNightlife(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (c) => {
    setFiltered(nightlife);
    let filtering = nightlife.filter((f) => f.tag === c);
    setFiltered(filtering);
  };

  const showAll = () => {
    setFiltered(nightlife);
  };

  if (!filtered) {
    return null;
  } else {
    return (
      <div className="bg">
        <Nav />
        <main>
          <h1>Where in Porto can I go at night?</h1>

          <div id="tags">
            <button className="all pill-button" onClick={() => showAll()}>
              All
            </button>
            <button className="bars pill-button" onClick={() => filter("Bars")}>
              Bars
            </button>
            <button
              className="wine-bars pill-button"
              onClick={() => filter("Wine-bars")}
            >
              Wine-bars
            </button>
            <button
              className="dance pill-button"
              onClick={() => filter("Dance")}
            >
              Dance
            </button>

            <button
              className="chill pill-button"
              onClick={() => filter("Chill")}
            >
              Chill
            </button>
          </div>
          {loading ? <Loading /> : null}
          <div id="cards">
            {filtered.map((f) => {
              return <NightlifeCard className="card" key={f.id} card={f} />;
            })}
          </div>
        </main>
      </div>
    );
  }
};
