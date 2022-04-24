import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { theme } from "../styles/MUIThemes";
import { ThemeProvider } from "@mui/system";
import dollars from "../img/home/dollars.png";
import "../styles/home.css";
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div id="home-container">
        <div id="home-header">
          <h4>Welcome to the Economic Awareness Council</h4>
          <h1>INVESTOR SIMULATOR</h1>
        </div>
        <div id="home-content">
          <img id={"image"} src={dollars} alt="" />

          <div id="home-text">
            <div className="text-content">
              The year is <span style={{ color: "#00FF38" }}>2004</span>, and
              you are just about to start your adult <br />
              life. It’s time to get smart and start investing part of your
              salary <br /> and setting some financial goals.
            </div>
            <div className="text-content">
              Play this game and see if you can achieve your financial goals{" "}
              <br /> and get set up for future success!
            </div>
            <div className="text-content">
              Over the course of the following game, you will learn about
            </div>
            <div className="text-content">
              <ul>
                <li>How to invest.</li>
                <li>Risk & Rewards.</li>
                <li>Retirement Funds.</li>
              </ul>
            </div>
            <div>
                          <b>Disclaimer:</b> The information provided in this game is for educational purposes only  <br />and should not be considered investment advice
            </div>
          </div>
        </div>

        <Link to="/goals">
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
            Let's play!
          </Button>
              </Link>
              <div id="credits">
                  <Link to="/credits"> <span style={{ color: "#00FF38" }}>CREDITS</span> </Link>
         </div>
      </div>

    </ThemeProvider>
  );
}

export default Home;

// <HomeContent>
//   <MainContent>
//     <div>
//       <h1>Investor Simulator </h1>
//       <p>
//         Investing may help you to build wealth and meet financial goals.
//         There are many opportunities, alternatives and risks associated
//         with investing.
//       </p>
//       <p>
//         The year is 2006, and you are just about to start your adult life.
//         It’s time to get smart and start investing part of your salary and
//         setting some financial goals. Play this game and see if you can
//         achieve your financial goals and get set up for future success!
//       </p>
//       <p>
//         The information provided in this game is for educational purposes
//         only and should not be considered financial or investment advice.{" "}
//       </p>
//       <p>Over the course of the following game, you will learn about:</p>
//       <ul>
//         <li>How to invest</li>
//         <li>Risk & Rewards</li>
//         <li>Retirement Funds</li>
//       </ul>
//     </div>
//   </MainContent>
//   <hr />
//   <Buttons>
//     <Link to="/goals">
//       <CustomButton size="large">play</CustomButton>
//     </Link>
//   </Buttons>
// </HomeContent>
