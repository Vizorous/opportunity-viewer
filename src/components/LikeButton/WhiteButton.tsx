import React, { ReactElement } from "react";
import { Button, ButtonProps } from "react-bootstrap";

interface Props extends ButtonProps {
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhiteButton({}: Props): ReactElement {
  return <Button></Button>;
}