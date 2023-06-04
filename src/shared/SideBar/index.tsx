import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../assets/header.jpeg";
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
        </div>
      </nav>
    </header>
  );
}
