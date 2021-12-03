import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home";
import Goals from "../pages/Goals";
import ChoiceOne from "../pages/Choice-1/Choice-1";
import GraphOne from "../pages/Choice-1/Graph-1";
import ChoiceTwo from "../pages/Choice-2/Choice-2";
import GraphTwo from "../pages/Choice-2/Graph-2";
import ChoiceThree from "../pages/Choice-3/Choice-3";
import GraphThree from "../pages/Choice-3/Graph-3";
import ChoiceFour from "../pages/Choice-4/Choice-4";
import GraphFour from "../pages/Choice-4/Graph-4";
import ChoiceFive from "../pages/Choice-5/Choice-5";
import GraphFive from "../pages/Choice-5/Graph-5";
import device from "../styles/mediaQueries";
import Recap from "../pages/recap";
import Summary from "../pages/Summary/Summary";
import LifeEvent from "../pages/Life-Event";
import Leaderboard from "./leaderboard";

const WindowWrapper = styled.div`
  max-height: 700px; // height for home page
  width: 1200px;
  overflow: scroll;
  box-shadow: var(--bevel-default);
  margin: 0 auto;
  background-color: var(--color-primary);
  padding: 5px;

  @media ${device.desktop} {
    max-height: 850px;
  }
  @media ${device.laptopL} {
    max-height: 700px;
  }
`;

const WindowHead = styled.h5`
  background-color: var(--color-secondary);
  padding: 10px 0;
  width: 100%;
  color: white;
  text-align: center;
`;

const Content = styled.div`
  width: 90%;
  margin: 15px auto;
`;

function Window() {
  return (
    <WindowWrapper>
      <WindowHead>Welcome to Economic Awareness Council</WindowHead>
      <Router>
        <Content>
          {/* Inject dynamic components */}
          <Switch>
            <Route path="/graph-5" name="Graph-5" component={GraphFive} />
            <Route path="/choice-5" name="Graph-5" component={ChoiceFive} />
            <Route path="/graph-4" name="Graph-4" component={GraphFour} />
            <Route path="/choice-4" name="Graph-4" component={ChoiceFour} />
            <Route path="/graph-3" name="Graph-3" component={GraphThree} />
            <Route path="/choice-3" name="Graph-3" component={ChoiceThree} />
            <Route path="/graph-2" name="Graph-2" component={GraphTwo} />
            <Route path="/choice-2" name="Graph-2" component={ChoiceTwo} />
            <Route path="/graph-1" name="Graph-1" component={GraphOne} />
            <Route path="/choice-1" name="Choice-1" component={ChoiceOne} />
            <Route path="/goals" name="Home" component={Goals} />
            <Route path="/recap" name="Recap" component={Recap} />
            <Route path="/summary" name="Summary" component={Summary} />
            <Route path="/board" name="board" component={Leaderboard} />
            <Route
              path="/event/:num"
              name="Random-event"
              component={LifeEvent}
            />
            <Route path="/" exact component={Home} />
          </Switch>
          {/* End injection */}
        </Content>
      </Router>
    </WindowWrapper>
  );
}

export default Window;
