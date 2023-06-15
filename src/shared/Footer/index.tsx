import {
  Box,
  IconButton,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./Footer.module.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      className={styles.footer}
      display="flex"
      justifyContent="center"
      gap={2}
    >
      <Typography fontSize={smDown ? "0.6rem" : "1rem"}>
        Avivamento Bíblico todos os direitos reservados
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={2}
        height="20px"
        border="1px"
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
              fontSize: "15px",
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
              fontSize: "15px",
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
              fontSize: "15px",
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
              fontSize: "15px",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
