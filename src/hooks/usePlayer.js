import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";

const usePlayer = () => {
  const player = useContext(PlayerContext);
  if (player === null) throw new Error("Context not provided");

  return player;
};

export default usePlayer;
