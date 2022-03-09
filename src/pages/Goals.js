import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ChoiceCard from "../components/ChoiceCard";
import { PlayerContext } from "../contexts/PlayerContext";
import { CustomButton } from "../styles/MUIThemes";
import "@splidejs/splide/dist/css/splide.min.css";
import "../styles/goals.css";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const GoalChoices = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

function Goals() {
  const { dispatch } = useContext(PlayerContext);

  const [goalSelected, setGoalSelected] = useState(false);

  /**
   * UseEffect to make sure that the previous information from the player gets wiped before playing again.
   */

  useEffect(() => {
    const resetGoals = () => {
      dispatch({
        type: "RESET",
        payload: "",
      });
    };
    resetGoals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="goals-container">
      {/*//TODO: vertical line next to TIPS*/}
      <div id="goals-header">
        <h1>What are your goals?</h1>
        <p>
          {" "}
          Everyone wants something different out of life. What is important to
          you? Choose a few things you are willing to save and make sacrifices
          for, then play the game and let see what you can achieve!
        </p>
        <p style={{ borderLeft: "4px solid #00FF38", paddingLeft: "10px" }}>
          <span style={{ color: "#00FF38" }}>Tip: </span> Be sure to consider
          the total cost of your goals as this will be a factor in whether or
          not you are successful in reaching these goals.
          <b>
            {" "}
            (If you select too many, costly goals, you may not have enough funds
            to reach these.)
          </b>
        </p>
      </div>
      <div id={"slide-container"}>
        <GoalChoices>
          <ChoiceCard setGoalSelected={setGoalSelected} />
        </GoalChoices>
        <h3 style={{ textAlign: "center" }}>Total cost: $200.300</h3>
        <hr />
        <Buttons>
          <Link to="/">
            <CustomButton> Back </CustomButton>
          </Link>{" "}
          <Link to="/choice-1">
            {goalSelected ? <CustomButton> Continue </CustomButton> : <></>}
          </Link>
        </Buttons>
      </div>
    </div>
  );
}

export default Goals;

// <>
//   <MainContent>
//     <h1>What are your goals?</h1>
//     <p>
//       {" "}
//       <Typography variant="h5">
//         Everyone wants something different out of life. What is important to
//         you? Choose a few things you are willing to save and make sacrifices
//         for, then play the game and let see what you can achieve!
//       </Typography>
//     </p>
//     <p>
//       <Typography variant="h6" sx={{ color: "Green" }}>
//         Be sure to consider the total cost of your goals as this will be a
//         factor in whether or not you are successful in reaching these goals.
//         <b>
//           {" "}
//           (If you select too many, costly goals, you may not have enough
//           funds to reach these.)
//         </b>
//       </Typography>
//     </p>
//
//     <GoalChoices>
//       <ChoiceCard setGoalSelected={setGoalSelected} />
//     </GoalChoices>
//   </MainContent>
//   <hr />
//   <Buttons>
//     <Link to="/">
//       <CustomButton> Back </CustomButton>
//     </Link>
//     <Link to="/choice-1">
//       {goalSelected ? <CustomButton> Continue </CustomButton> : <></>}
//     </Link>
//   </Buttons>
// </>
