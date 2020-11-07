import React, { ReactElement } from "react";
import NavBar from "../features/NavBar/NavBar";
import OppController from "../features/Opps/OppController";

export default function Routes(): ReactElement {
  return (
    <>
      <NavBar></NavBar>
      <OppController></OppController>
      <div style={{ width: "90%", height: "20vh" }}></div>
    </>
  );
}
