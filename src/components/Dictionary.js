import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import "./dictionary.css";
import { dictionaryData } from "../data/definitions";

const DefinitionList = styled.dl`
  lh {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
    display: block;
  }
  dt,
  dd {
    font-size: 1rem;
  }
  dt {
    font-weight: 700;
  }
  dd {
    margin-left: 1em;
    line-height: 1.4em;
  }
`;

const dictionaryList = dictionaryData.map(({ term, definition }) => {
  return (
    <>
      <dt id="401k">{term}</dt>
      <dd>{definition}</dd>
      <hr />
    </>
  );
});

const tabList = dictionaryData.map(({ term }) => {
  return (
    <>
      <li>
        <a href={"#" + term}>{term}</a>
      </li>
    </>
  );
});

function Dictionary() {
  return (
    <Tabs>
      <TabList className="tab-list">
        <Tab className="tab" selectedClassName="tab-active">
          Terms
        </Tab>
        <Tab className="tab" selectedClassName="tab-active">
          Definitions
        </Tab>
      </TabList>

      <TabPanel>
        <ul>
          {tabList}
          {/*<li>*/}
          {/*  <a href="#401k">401k</a>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a href="#ira">IRA</a>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <a href="#roth-ira">Roth IRA</a>*/}
          {/*</li>*/}
        </ul>
      </TabPanel>
      <TabPanel>
        <DefinitionList>
          <lh>Terms & Definitions</lh>
          {dictionaryList}
        </DefinitionList>
      </TabPanel>
    </Tabs>
  );
}

export default Dictionary;
