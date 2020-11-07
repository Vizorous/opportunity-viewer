import React, { ReactElement, useEffect } from "react";
import EditModalContainer from "../features/EditModal/EditModalContainer";
import NavBar from "../features/NavBar/NavBar";
import OppController from "../features/Opps/OppController";
import queryString from "query-string";
import qs from "query-string";
import { useHistory } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { durationVar, programVar, startDateVar } from "../cache";
import {
  setDuration,
  setProgram,
  setStartDate,
} from "../features/Search/searchOperations";
import { format, parse } from "date-fns";
import { isValidDate } from "../utils/helpers";
import _ from "underscore";
export default function Routes(props): ReactElement {
  const history = useHistory();
  const duration = useReactiveVar(durationVar);
  const program = useReactiveVar(programVar);
  const startDate = useReactiveVar(startDateVar);
  useEffect(() => {
    const values = queryString.parse(props.location.search);
    const programValue = values?.program ? values.program : null;
    const durationValue = values?.duration ? values.duration : null;
    const dateValue = values?.earliest_start_date
      ? values.earliest_start_date
      : null;
    if (_.contains(["GV", "GTe", "GTa"], programValue)) {
      setProgram(programValue as any);
    } else {
      setProgram(null);
    }
    if (_.contains(["short", "medium", "long"], programValue)) {
      setDuration(durationValue as any);
    } else {
      setDuration(null);
    }

    if (dateValue) {
      const date = parse(dateValue as string, "yyyy-L-d", new Date());
      const isValid: boolean = isValidDate(date);
      if (isValid) {
        setStartDate(date);
      }
    }
  }, []);
  useEffect(() => {
    const query = {
      program: program ? program : undefined,
      duration: duration ? duration : undefined,
      earliest_start_date: format(startDate, "yyyy-L-d"),
    };
    const searchString = qs.stringify(query);
    history.push({
      pathname: "/search",
      search: searchString,
    });
  }, [program, duration, startDate]);
  return (
    <>
      <NavBar></NavBar>
      <OppController></OppController>
      <EditModalContainer></EditModalContainer>
      <div style={{ width: "90%", height: "20vh" }}></div>
    </>
  );
}
