import styles from "./Button.module.scss";
import vercelIcon from "../../assets/images/vercel-icon.svg";

export default function Button({
  isIconDisplayed,
  isFilled,
  text,
  smallFontSize,
  isSquared,
  linkTo,
}) {
  return (
    <a
      className={`${styles.wrapper} ${
        isFilled ? styles.wrapperFilled : styles.wrapperTransparent
      } ${isSquared && styles.squared}`}
    >
      {isIconDisplayed && <img src={vercelIcon} alt="" />}
      <p className={`${smallFontSize && styles.smallFontSize}`}>{text}</p>
    </a>
  );
}
