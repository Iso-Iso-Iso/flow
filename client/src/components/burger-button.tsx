import React from "react";
import { BurgerProps } from "@interfaces/components/burger-menu";
import "./burger-button.scss";

function BurgerButton(props: BurgerProps) {
  const { isBurgerSeen, setIsBurgerSeen } = props;

  return (
    <div
      className="burger _mobile"
      onClick={() => setIsBurgerSeen(!isBurgerSeen)}
    >
      <div
        className={
          "burger__sticks " + (isBurgerSeen ? "burger__sticks_active " : "")
        }
      ></div>
    </div>
  );
}

export default BurgerButton;
