import React, { useContext, useEffect } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { FakePlayerContext } from "../contexts/FakePlayerContext";
import { formatter } from "../formatter";

/**
 * Hook to handle the creation of the both graphs used for the GRAPH pages
 * @param year
 * @param player
 * @param fakePlayer
 * @param limit
 */
const useGenerateGraphData = (year, player, fakePlayer, limit) => {
  //Getting both Contexts
  const { dispatch } = useContext(PlayerContext);
  const { fakePlayerDispatch } = useContext(FakePlayerContext);
  //useEffect to trigger the dispatchers // is a useEffect hook needed here?
  useEffect(() => {
    if (player.graph.length < limit) {
      const graphData = {
        year: year,
        amount: formatter.format(parseInt(player.bank)),
      };
      const whatIfGraphData = {
        year: year,
        amount: formatter.format(parseInt(fakePlayer.bank)),
      };
      dispatch({
        type: "GENERATE_GRAPH",
        payload: graphData,
      });
      fakePlayerDispatch({
        type: "GENERATE_GRAPH",
        payload: whatIfGraphData,
      });
    }
  }, [player.bank, dispatch]);
};

export default useGenerateGraphData;
