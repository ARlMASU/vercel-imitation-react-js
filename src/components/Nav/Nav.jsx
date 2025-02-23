import logo from "../../assets/images/vercel-logo.svg";
import styles from "./Nav.module.scss";
import NavButton from "../NavButton/NavButton";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div>
        <NavLink to='/'>
          <img src={logo} alt="" />
        </NavLink>
        <div>
          <NavButton text="Products" linkTo="products"></NavButton>
          <NavButton text="Solutions" linkTo="solutions"></NavButton>
        </div>
      </div>
      <Button
        text="Contact"
        isFilled
        isIconDisplayed={false}
        smallFontSize
        isSquared
      ></Button>
    </nav>
  );
}
