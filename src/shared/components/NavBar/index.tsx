import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <AppBar
      sx={{
        height: "40px",
      }}
      position="static"
    >
      <Toolbar></Toolbar>
    </AppBar>
  );
}
