import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { VisitCard } from "./VisitCard";
import axios from "axios";
import { Loading } from "./Loading";

export const Visit = () => {
  const [visit, setVisit] = useState();
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/api/visit/")
      .then((res) => {
        setVisit(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (c) => {
    console.log("filtering", c);
    setFiltered(visit);
    let filtering = visit.filter((f) => f.tag === c);
    setFiltered(filtering);
  };

  const showAll = () => {
    setFiltered(visit);
  };

  if (!filtered) {
    return null;
  } else {
    return (
      <div className="bg">
        <Nav />
        <main>
          <h1>What in Porto can I visit?</h1>

          <div id="tags">
            <button className="all pill-button" onClick={() => showAll()}>
              All
            </button>
            <button
              className="places pill-button"
              onClick={() => filter("Places")}
            >
              Places
            </button>
            <button
              className="landmarks pill-button"
              onClick={() => filter("Landmarks")}
            >
              Landmarks
            </button>
            <button
              className="parks pill-button"
              onClick={() => filter("Parks")}
            >
              Parks
            </button>

            <button
              className="churches pill-button"
              onClick={() => filter("Churches")}
            >
              Churches
            </button>
          </div>
          {loading ? <Loading /> : null}

          <div id="cards">
            {filtered.map((f) => {
              return <VisitCard className="card" key={f.id} card={f} />;
            })}
          </div>
        </main>
      </div>
    );
  }
};
