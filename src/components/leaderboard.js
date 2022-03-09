import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import scoresRef from "../data/firebase";
import { MainContent } from "../styles/choicesSyles";

function Leaderboard() {
  const [scores, setScores] = useState(null);

  console.log(process.env.REACT_APP_STORAGE_BUCKET);

  useEffect(() => {
    async function getScores() {
      try {
        const ref = await scoresRef.get();
        const list = await ref.docs;
        if (list) {
          setScores(list);
          list.map((doc) => console.log(doc.data()));
        }
      } catch (e) {
        console.error(e);
      }
    }

    getScores();
  }, []);
  let tablebody;
  if (scores) {
    tablebody = scores.map((doc) => {
      let scoreData = doc.data();
      console.log(scoreData);
      return scoreData.scores;
    });
  }

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "amount",
      headerName: "Amount of money earned",
      type: "number",
      width: 400,
    },
    {
      field: "date",
      headerName: "Date and Time",
      type: "string",
      width: 400,
    },
  ];

  return (
    <MainContent>
      <h1>LEADERBOARD</h1>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={tablebody}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </MainContent>
  );
}

export default Leaderboard;