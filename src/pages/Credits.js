import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { theme } from "../styles/MUIThemes";
import { ThemeProvider } from "@mui/system";
import "../styles/home.css";
function Credits() {
    return (
        <ThemeProvider theme={theme}>
            <div id="home-container">
                <div id="home-header">
                    <h1>CREDITS</h1>
                    <div className="credits-content">

                        <span style={{ color: "#00FF38" }}>
                           Designed and developed by Columbia College Chicago's <br />Department of Interactive Arts and Media and Design Lab
                            </span>
                        </div>

                </div>
                <div id="credits-content">

                    <div id="home-text" style={{ paddingRight: "60px" }}>
                        <div className="text-content">
                            <h3>Game Design</h3>
                            <ul style={{listStyleType: " none" }}>
                            <li>Elias Olson</li>
                            <li>Angelica Idoko</li>
                            <li>Mitchell Ahrens</li>
                            <li>Joseph Poselenzny</li>
                        </ul>

                            <h3>Ideation</h3>
                            <ul style={{ listStyleType: " none" }}>
                                <li>Riley Jakusik</li>
                                <li>Tyler Morales</li>
                            </ul>

                            <h3>Senior UI/UX Designer</h3>
                            <ul style={{ listStyleType: " none" }}>
                                <li>Andrew Ney</li>
                            </ul>
                        </div>
                     
                    </div>
                    <div id="home-text">
                        <div className="text-content" style={{ paddingLeft: "60px" }}>
                            <h3>Senior UI/UX Designer <br /> & Usability Specialist</h3>
                            <ul style={{ listStyleType: " none" }}>
                                <li>Kayla Gayton</li>
                            </ul>

                            <h3>Senior Programmer</h3>
                            <ul style={{ listStyleType: " none" }}>
                                <li>Rafael Santana</li>
                            </ul>

                            <h3>Supervisor</h3>
                            <ul style={{ listStyleType: " none" }}>
                                <li>Dr. Joshua A. Fisher</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <Link to="/">
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
                        Back Home!
          </Button>
                </Link>
            </div>
        </ThemeProvider>
    );
}

export default Credits;

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
