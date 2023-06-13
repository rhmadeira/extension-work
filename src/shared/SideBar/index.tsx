import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../assets/header.jpeg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, IconButton, Paper } from "@mui/material";
export default function SideBar() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Igreja - Home">
          <img src={Logo} width="100px" height="32px" alt="" />
        </Link>
        <div className={`${styles.links}`}>
          <Link className={styles.login} to="/">
            Inicio
          </Link>
          <Link className={styles.login} to="/sobre">
            Sobre
          </Link>
          <Link className={styles.login} to="/eventos">
            Agenda
          </Link>
          <Box
            component={Paper}
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
            width="100%"
            height="30px"
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
                window.open(
                  "https://www.instagram.com/ieabcariacica/",
                  "_blank"
                )
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
                window.open(
                  "https://www.facebook.com/ieab.cariacica.3",
                  "_blank"
                )
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
        </div>
      </nav>
    </header>
  );
}
