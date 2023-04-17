import { Box, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Baner from "../../assets/baner.png";
import PublicityRight from "../../components/PublicityRight";
import WhoWeAre from "../../components/WhoWeAre";

export default function WebSite() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width="100%">
      {/* //Baner */}
      <Box
        sx={{
          backgroundColor: "#0f334c",
          width: "100%",
          height: "150px",
        }}
        display="flex"
        justifyContent="center"
      >
        {smDown ? (
          <Typography>Comunidade Rio Doce</Typography>
        ) : (
          <img src={Baner} alt="baner" width="1300px" />
        )}
      </Box>
      {/* //NavBar */}
      <Box maxWidth="1300px" margin="0 auto" display="flex">
        <Box
          width="100%"
          padding="0.2rem 0.2rem 0.2rem 0"
          display="flex"
          flexDirection="column"
        >
          <NavBar />
          <Box display="flex" padding={0.5}>
            {!mdDown && <WhoWeAre />}
            <Outlet />
          </Box>
        </Box>
        {!smDown && (
          <Box>
            <PublicityRight />
          </Box>
        )}
      </Box>
    </Box>
  );
}
