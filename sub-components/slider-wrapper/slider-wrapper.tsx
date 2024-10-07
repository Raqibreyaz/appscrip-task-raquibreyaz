import { Dispatch, FunctionComponent, SetStateAction } from "react";
import styles from "./slider-wrapper.module.css";

interface SliderTypes {
  open: boolean;
  heading:string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  Child?: FunctionComponent<any>;
  childProps?: object;
}

export const Overlay: React.FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  return open ? (
    <div className={styles["overlay"]} onClick={() => setOpen(false)}></div>
  ) : null;
};

export const SliderWrapper = ({
  open,
  setOpen,
  heading,
  Child,
  childProps,
}: SliderTypes) => {
  return (
    <div>
      <div
        className={`${styles["slider"]} ${
          open ? styles["slider-open"] : styles["slider-close"]
        }`}
      >
        <h2 className="capitalize">{heading}</h2>
        {Child ? <Child {...childProps} /> : null}
      </div>
      <Overlay open={open} setOpen={setOpen} />
    </div>
  );
};
