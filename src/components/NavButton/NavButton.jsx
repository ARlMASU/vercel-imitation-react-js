import { NavLink } from "react-router-dom";
import styles from "./NavButton.module.scss";

export default function NavButton({ text, linkTo }) {
  return (
    <NavLink
      to={`/${linkTo}`}
      className={({ isActive }) =>
        `${styles.button} ${isActive ? styles.active : ""}`
      }
    >
      {text}
    </NavLink>
  );
}
