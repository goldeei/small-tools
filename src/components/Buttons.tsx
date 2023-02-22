import { MouseEventHandler } from "react";

interface Button {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

export const Button = ({ className, children, onClick }: Button) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
