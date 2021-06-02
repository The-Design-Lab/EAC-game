import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";

function LifeEvent() {


    const MainContent = styled.div`
			display: flex;
			flex-direction: column;
			gap: 20px;

			h1 {
				text-align: center;
				font-family: var(--body);
				font-weight: 400;
			}
			p {
				max-width: 800px;
				margin: 0 auto;
			}
		`;
    
    const Buttons = styled.div`
    display: flex;
    justify-content: center;
`;
    
    
    return (
			<>
				<MainContent>
                <h1>LIFE EVENT</h1>
                <img src={} alt="Name of the life event"/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</MainContent>
				<hr />
			    <Buttons>
                <Link to="/choice-2">
                    <Button label="Back" />
                </Link>
                <Link to="/choice-3">
                    <Button label="Continue" />
                </Link>
                </Buttons>
			</>
		);
}

export default LifeEvent;
