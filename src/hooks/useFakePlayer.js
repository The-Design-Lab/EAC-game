import { useContext } from "react";
import { FakePlayerContext } from "../contexts/FakePlayerContext";

const useFakePlayer = () => {
  const player = useContext(FakePlayerContext);
  if (player === null) throw new Error("Context not provided");

  return player;
};

export default useFakePlayer;
