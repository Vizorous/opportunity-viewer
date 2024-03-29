import { gql } from "@apollo/client";
import { durationVar, entityVar, programVar, startDateVar } from "../../cache";
import { DurationKeys, ProgramKeys } from "./SearchTypes";

export const setProgram = (val: ProgramKeys | null) => {
	programVar(val);
};

export const setDuration = (val: DurationKeys | null) => {
	durationVar(val);
};

export const setStartDate = (val: Date) => {
	startDateVar(val);
};

export const setEntity = (val: number) => {
	entityVar(val);
};
