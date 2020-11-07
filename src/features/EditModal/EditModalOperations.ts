import { gql } from "@apollo/client";
import { editDescriptionVar, editIdVar, editTitleVar, modalShowVar } from "../../cache";

export const updateOpportunity = gql`
mutation UpdateOpportunityMutation (
  $id:ID!,$opportunity:OpportunityInput){
    updateOpportunity(id:$id,opportunity:$opportunity){
      description
      title
    }
  }
`


export const setModalShow = (val: boolean) => {
    modalShowVar(val)
}
export const setEditTitle = (val: string | null) => {
    editTitleVar(val)
}
export const setEditId = (val: number | null) => {
    editIdVar(val)
}
export const setEditDescription = (val: string | null) => {
    editDescriptionVar(val)
}
