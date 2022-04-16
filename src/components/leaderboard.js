import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
      {
          field: "id",
          headerName: "Player",
          headerAlign: 'center',
          align: 'center',
          width: 200
      },
    {
      field: "amount",
      headerName: "Amount of Money Earned",
      type: "number",
        width: 600,
        headerAlign: 'center',
        align: 'center'

    },
    {
      field: "date",
      headerName: "Date and Time",
      type: "string",
        width: 300,
        headerAlign: 'center',
          align: 'center'


    },
  ];

    const tableTheme = createTheme({
        components: {
            // Name of the component
            MuiDataGrid: {
                styleOverrides: {

                    root: {
                        border: '10px solid rgba(70, 69, 69, 1)',

                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        fill: '#00FF38',
                   
                    },

                },
            },

        },
    });


  return (
    <>
      <div id={"leaderboard__container"}>
        <h1>LEADERBOARD</h1>
              <div id={"leaderboard"}>
                  <ThemeProvider theme={tableTheme}>
                      <DataGrid
                          autoPageSize={true}
                          disableSelectionOnClick={true}
                    rows={tablebody}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                              />
                  </ThemeProvider>

        </div>
      </div>
    </>
  );
}

export default Leaderboard;
