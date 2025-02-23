import styles from "./Bloc.module.scss";
import Button from "../Button/Button";

export default function Bloc({ title, text }) {
  return (
    <section>
      <h1>{title}</h1>
      <p>{text}</p>
      <div>
        <Button
          isIconDisplayed={true}
          isFilled={true}
          text="Start Deploying"
        />
        <Button
          isIconDisplayed={false}
          isFilled={false}
          text="Get a demo"
        />
      </div>
    </section>
  );
}
