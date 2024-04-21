import type { PropsWithChildren } from "react";
import React from "react";
import clsx from "clsx";
import { ButtonStyle } from "./Button.styles";

type Props = {
  icon?: string;
  color?: "blue" | "yellow" | "grey";
  toggleBtn?: boolean;
  disabled?: boolean;
  classNames?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  icon,
  color = "blue",
  toggleBtn = false,
  disabled = false,
  handleClick,
  classNames = "",
  children,
}: PropsWithChildren<Props>) => {
  return (
    <ButtonStyle
      color={color}
      onClick={handleClick}
      disabled={disabled}
      className={clsx(
        {
          disabled: disabled,
          "panel-toggle": toggleBtn,
        },
        color,
        classNames
      )}
      // $children={children}
    >
      {icon && <img src={`/img/icons/${icon}`} alt="btn-ico" />}
      <span> {children}</span>
    </ButtonStyle>
  );
};

export default Button;
