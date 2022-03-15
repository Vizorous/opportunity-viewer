import React, { ReactElement } from "react";
import { Alert } from "react-bootstrap";

export default function ErrorAlert(): ReactElement {
  return <Alert variant={"danger"}>An error Occurred. Please try again.</Alert>;
}
