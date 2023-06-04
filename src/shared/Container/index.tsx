import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Container() {
  return (
    <Box
      margin="0 auto"
      maxWidth="1200px"
      bgcolor="rgb(247,247,247)"
      height="calc(
      100vh - 124px
    )"
    >
      <Outlet />
    </Box>
  );
}
