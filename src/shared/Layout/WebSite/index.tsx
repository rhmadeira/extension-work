import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Baner from "../../assets/baner.png";
import PublicityRight from "../../components/PublicityRight";

export default function WebSite() {
  return (
    <Box width="100%">
      <Box
        sx={{
          backgroundColor: "#0f334c",
          width: "100%",
          height: "150px",
        }}
        display="flex"
        justifyContent="center"
      >
        <img src={Baner} alt="baner" width="1300px" />
      </Box>
      <Box maxWidth="1300px" margin="0 auto">
        <NavBar />
        <Box display="flex" justifyContent="space-between" position="relative">
          <Box
            width="200px"
            component={Paper}
            position="absolute"
            left={0}
            padding={0.2}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            accusamus quo deserunt aliquam quidem consectetur tempore magnam
            doloribus ad error consequuntur recusandae in, incidunt fuga
            aspernatur debitis nam culpa. Quo?
          </Box>
          <Box width="calc(100% - 400px)" margin="0 auto">
            <Outlet />
          </Box>
          <Box
            component={Paper}
            width="200px"
            position="absolute"
            right={0}
            padding={0.2}
          >
            <PublicityRight />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
