import { Box, Typography } from "@mui/material";
import Logo from "../../shared/assets/header.jpeg";
import Banner from "../../shared/assets/banner.jpeg";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="1200px"
      minWidth="300px"
      margin="20px auto"
      gap={2}
    >
      <Box margin="0 auto">
        <img src={Logo} alt="header" width="400px" />
      </Box>
      <Box margin="0 auto">
        <img src={Banner} alt="" width="1200px" />
      </Box>
    </Box>
  );
}
