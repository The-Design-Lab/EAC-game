import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { events } from "../data/event-list";
import { PlayerContext } from "../contexts/PlayerContext";
import usePlayer from "../hooks/usePlayer";
import { formatter } from "../formatter";
import Button from "@mui/material/Button";
import "../styles/life-event.css";
import entrepreneur from "../img/entrepreneurship.png";

function LifeEvent(props) {
  const event = events[props.match.params.num];

  const { dispatch } = useContext(PlayerContext);
  const player = usePlayer();

  useEffect(() => {
    dispatch({
      type: "ADD_EVENT",
      payload: event.amount,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div id="life-event--container">
        <div className="life-event--header">
          <h3>A life event just occurred!</h3>
        </div>
        <div id="life-event--content">
          <div className="life-event--image">
            <img src={entrepreneur} alt="" />
          </div>
          <div className="life-event--text">
            <h4>{event.name}</h4>
            <p>{event.description}</p>
          </div>
        </div>
        <div id="life-event--balance">
          <h4>
            New Account Balance:{" "}
            {formatter.format(player.bank + player.investmentAccount)}
          </h4>
        </div>
      </div>
      <hr />
      <div id="button-container">
        <Link to={"/choice-3"}>
          <Button
            sx={{
              backgroundColor: "#e5e5e5",
              color: "#000000",
              height: "3rem",
              width: "12rem",
              fontSize: "1.5rem",
              padding: "0",

              "&:hover": {
                backgroundColor: "#00FF38",
              },
            }}
            id="btn"
          >
            Continue
          </Button>
        </Link>
      </div>
    </>
  );
}

export default LifeEvent;
