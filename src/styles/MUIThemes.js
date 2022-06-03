import { createTheme, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

// noinspection JSUnusedLocalSymbols
export const CustomButton = styled(Button)(({ theme }) => ({
  background: "#0d782f",
  color: "white",
  margin: "10px",
  width: "100px",
  maxWidth: "fit-content",
  "&.Mui-hover": {
    color: orange,
  },
}));

// noinspection JSUnusedLocalSymbols
export const goalCard = styled(Card)(({ theme }) => ({
  length: "300px",
}));

export const theme = createTheme({
  status: {
    danger: orange[500],
  },
});
