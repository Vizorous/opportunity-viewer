import { useReactiveVar } from "@apollo/client";
import React, { ReactElement } from "react";
import { Button } from "react-bootstrap";
import { editIdVar, modalShowVar } from "../cache";
import EditModal from "../features/EditModal/EditModal";
import EditModalContainer from "../features/EditModal/EditModalContainer";
import { setModalShow } from "../features/EditModal/EditModalOperations";
import NavBar from "../features/NavBar/NavBar";
import OppController from "../features/Opps/OppController";

export default function Routes(): ReactElement {
  const modalShow = useReactiveVar(modalShowVar);
  const editId = useReactiveVar(editIdVar);
  console.log(editId);
  return (
    <>
      <NavBar></NavBar>
      <OppController></OppController>
      <EditModalContainer></EditModalContainer>
      <div style={{ width: "90%", height: "20vh" }}></div>
    </>
  );
}
