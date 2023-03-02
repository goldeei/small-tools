import { MouseEventHandler } from "react";

interface Button {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: MouseEventHandler;
}

export const Button = ({ id, className, children, onClick }: Button) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
