import {
  Box,
  IconButton,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Banner from "../../shared/assets/banner.jpeg";
import Fly from "../../shared/assets/fly.jpeg";

export default function Home() {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        gap={2}
        component="section"
      >
        <Box
          sx={{
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "2px",
          }}
        />
        <Typography
          variant={mdDown ? "h5" : "h4"}
          fontWeight="bold"
          sx={{
            color: "#8d5412",
          }}
        >
          BEM VINDO A NOSSA CASA
        </Typography>
        <img src={Fly} alt="header" width={mdDown ? "140px" : "240"} />
      </Box>
    </Box>
  );
}
