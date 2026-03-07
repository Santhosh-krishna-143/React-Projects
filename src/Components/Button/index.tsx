import type { ButtonHTMLAttributes } from "react";

export type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  btntxt: string;
};

const CustButton = (props: BtnProps) => {
  return <button {...props}>{props.btntxt}</button>;
};

export default CustButton;
