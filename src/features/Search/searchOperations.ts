import { gql } from "@apollo/client";
import { durationVar, programVar, startDateVar } from "../../cache";
import { DurationTypes, ProgramTypes } from "./SearchTypes";
export const getProgram = gql`
  query getProgram {
    program @client
  }
`
export const getDate = gql`
  query getDate {
    date @client
  }
`
export const getDuration = gql`
query getDuration {
  duration @client
}
`

export const getSearchOptions = gql`
  query getDate {
    program @client
    duration @client
    date @client
  }
`
export const setProgram = (val: string) => {
  console.log(val)
  if (val === 'clear') {
    return programVar(null)
  }
  programVar(ProgramTypes[val])
}

export const setDuration = (val: string) => {
  durationVar(DurationTypes[val])
}

export const setStartDate = (val: Date) => {
  startDateVar(val)
}
