import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import axios from "axios";
import { ActivitiesCard } from "./ActivitiesCard";
import { Loading } from "./Loading";

export const Activities = () => {
  const [activities, setActivities] = useState();
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/activities/")
      .then((res) => {
        setActivities(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (c) => {
    setFiltered(activities);
    let filtering = activities.filter((f) => f.tag === c);
    setFiltered(filtering);
  };

  const showAll = () => {
    setFiltered(activities);
  };

  if (!filtered) {
    return null;
  } else {
    return (
      <div className="bg">
        <Nav />
        <main>
          <h1>What in Porto can I do?</h1>
          <div id="tags">
            <button className="all pill-button" onClick={() => showAll()}>
              All
            </button>
            <button
              className="must-do pill-button"
              onClick={() => filter("Must-Do")}
            >
              Must-Do
            </button>
            <button
              className="museums pill-button"
              onClick={() => filter("Museums")}
            >
              Museums
            </button>
            <button
              className="tours pill-button"
              onClick={() => filter("Tours")}
            >
              Tours
            </button>

            <button
              className="music pill-button"
              onClick={() => filter("Music")}
            >
              Music
            </button>
            <button
              className="theatre pill-button"
              onClick={() => filter("Theatre")}
            >
              Theatre
            </button>
            <button
              className="festivals pill-button"
              onClick={() => filter("Festivals")}
            >
              Festivals
            </button>
            <button
              className="workshops pill-button"
              onClick={() => filter("Workshops")}
            >
              Workshops
            </button>
          </div>
          {loading ? <Loading /> : null}
          <div id="cards">
            {filtered.map((f) => {
              return <ActivitiesCard className="card" key={f.id} card={f} />;
            })}
          </div>
        </main>
      </div>
    );
  }
};
