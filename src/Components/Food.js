import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { FoodCard } from "./FoodCard";
import axios from "axios";
import { Loading } from "./Loading";

export const Food = () => {
  const [food, setFood] = useState();
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://wip-api.herokuapp.com/api/food/")
      .then((res) => {
        setFood(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filter = (c) => {
    setFiltered(food);
    let filtering = food.filter((f) => f.type === c);
    setFiltered(filtering);
  };

  const showAll = () => {
    setFiltered(food);
  };

  if (!filtered) {
    return null;
  } else {
    return (
      <div className="bg">
        <Nav />
        <main>
          <h1>Where in Porto can I eat?</h1>

          <div id="tags">
            <button className="all pill-button" onClick={() => showAll()}>
              All
            </button>
            <button
              className="portuguese pill-button"
              onClick={() => filter("Portuguese")}
            >
              Portuguese
            </button>
            <button
              className="grill pill-button"
              onClick={() => filter("Grill")}
            >
              Grill
            </button>
            <button
              className="healthy pill-button"
              onClick={() => filter("Healthy")}
            >
              Healthy
            </button>
            <button
              className="fast-food pill-button"
              onClick={() => filter("Fast-Food")}
            >
              Fast-food
            </button>
            <button
              className="desserts pill-button"
              onClick={() => filter("Desserts")}
            >
              Desserts
            </button>
            <button
              className="caffees pill-button"
              onClick={() => filter("Caffees")}
            >
              Caffees
            </button>
          </div>
          {loading ? <Loading /> : null}
          <div id="cards">
            {filtered.map((f) => {
              return <FoodCard className="card" key={f.id} card={f} />;
            })}
          </div>
        </main>
      </div>
    );
  }
};
