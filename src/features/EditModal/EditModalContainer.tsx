import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React, { ReactElement, useEffect, useState } from "react";
import {
  editDescriptionVar,
  editIdVar,
  editTitleVar,
  modalShowVar,
} from "../../cache";
import { getAllOpportunities, passedVariables } from "../Opps/OppOperations";
import EditModal from "./EditModal";
import {
  setEditDescription,
  setEditTitle,
  setModalShow,
  updateOpportunity,
} from "./EditModalOperations";
import { durationVar, programVar, startDateVar } from "../../cache";
import produce from "immer";

interface Props {}

export default function EditModalContainer({}: Props): ReactElement {
  const [isLoading, setLoading] = useState(false);
  const modalShow = useReactiveVar(modalShowVar);
  const editId = useReactiveVar(editIdVar);
  const editTitle = useReactiveVar(editTitleVar);
  const editDescription = useReactiveVar(editDescriptionVar);
  const duration = useReactiveVar(durationVar);
  const program = useReactiveVar(programVar);
  const startDate = useReactiveVar(startDateVar);
  const [updateOpp] = useMutation(updateOpportunity);
  const doUpdate = async (
    editId: number,
    editTitle: string,
    editDescription: string,
    updater: typeof updateOpp
  ) => {
    setLoading(true);
    await updater({
      variables: {
        id: editId,
        opportunity: { description: editDescription, title: editTitle },
      },
      update: async (cache, { data }) => {
        console.log(data);
        try {
          const currentData: any = await cache.readQuery<
            typeof getAllOpportunities
          >({
            query: getAllOpportunities,
            variables: passedVariables(startDate, duration, program),
          });
          const id = currentData?.allOpportunity?.data?.findIndex((item) => {
            if (editId === parseInt(item.id)) {
              return item;
            }
          });
          cache.writeQuery({
            query: getAllOpportunities,
            variables: passedVariables(startDate, duration, program),
            data: produce(currentData, (x: any) => {
              x.allOpportunity.data[id].description = editDescription;
              x.allOpportunity.data[id].title = editTitle;
            }),
          });
          console.log(currentData);
        } catch (error) {
          console.log(error);
        }
      },
    });
    setModalShow(false);
    setLoading(false);
    // console.log("test");
  };

  return (
    <EditModal
      isLoading={isLoading}
      show={modalShow}
      onHide={() => setModalShow(false)}
      updaterFunc={() =>
        doUpdate(
          editId as number,
          editTitle as string,
          editDescription as string,
          updateOpp
        )
      }
      editDescription={editDescription as string}
      editTitle={editTitle as string}
      setEditDescription={setEditDescription}
      setEditTitle={setEditTitle}></EditModal>
  );
}
