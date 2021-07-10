import React, { useState, useEffect } from "react";
import "./tinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
import axios from "./axios";

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      console.log(req);

      setPeople(req.data);
    }

    fetchData();
  }, []);

  const swiped = (dir, person) => {
    console.log("card is swiped");
  };

  const onCardLeftScreen = (dir, person) => {
    console.log("card left out screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__Container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            onSwipe={() => swiped()}
            onCardLeftScreen={() => onCardLeftScreen()}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: "url(" + person.imageURL + ")" }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
