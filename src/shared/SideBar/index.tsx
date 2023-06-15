import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../assets/header.jpeg";
import { Theme, Typography, useMediaQuery } from "@mui/material";

export default function SideBar() {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Igreja - Home">
          <img src={Logo} width="100px" height="32px" alt="" />
        </Link>
        <div className={`${styles.links}`}>
          <Link className={styles.login} to="/">
            <Typography fontSize={smDown ? "0.7rem" : "1.2rem"}>
              Inicio
            </Typography>
          </Link>
          <Link className={styles.login} to="/sobre">
            <Typography fontSize={smDown ? "0.7rem" : "1.2rem"}>
              Sobre
            </Typography>
          </Link>
          <Link className={styles.login} to="/eventos">
            <Typography fontSize={smDown ? "0.7rem" : "1.2rem"}>
              Agenda
            </Typography>
          </Link>
        </div>
      </nav>
    </header>
  );
}
