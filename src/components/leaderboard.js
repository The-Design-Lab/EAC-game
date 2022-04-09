import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import scoresRef from "../data/firebase";
import "../styles/leaderboard.css";

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
    { field: "id", headerName: "ID", width: 400 },
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
    <>
      <div id={"leaderboard__container"}>
        <h1>LEADERBOARD</h1>
        <div id={"leaderboard"}>
          <DataGrid
            rows={tablebody}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
