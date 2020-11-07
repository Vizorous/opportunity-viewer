import { gql } from "@apollo/client";
import { durationVar, programVar, startDateVar } from "../../cache";
import { DurationKeys, ProgramKeys } from "./SearchTypes";
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
export const setProgram = (val: ProgramKeys | null) => {
  programVar(val)
}

export const setDuration = (val: DurationKeys | null) => {
  durationVar(val)
}

export const setStartDate = (val: Date) => {
  startDateVar(val)
}
