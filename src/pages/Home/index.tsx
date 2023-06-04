import {
  Box,
  IconButton,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
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

        <Box
          component={Paper}
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          width="100%"
          height="60px"
          bgcolor="#8d5412"
          border="2px"
        >
          <IconButton
            sx={{
              backgroundColor: "#2b8d2b",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#2b8d2b",
                transform: "scale(1.1)",
              },
            }}
          >
            <WhatsAppIcon
              sx={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#FF00FF",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#FF00FF",

                transform: "scale(1.1)",
              },
            }}
            onClick={() =>
              window.open("https://www.instagram.com/ieabcariacica/", "_blank")
            }
          >
            <InstagramIcon
              fontSize="large"
              sx={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#af172c",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#af172c",

                transform: "scale(1.1)",
              },
            }}
          >
            <YouTubeIcon
              sx={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#104aa0",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#104aa0",

                transform: "scale(1.1)",
              },
            }}
            onClick={() =>
              window.open("https://www.facebook.com/ieab.cariacica.3", "_blank")
            }
          >
            <FacebookIcon
              sx={{
                color: "#fff",
                fontSize: "30px",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
