import React, { ReactElement, useEffect } from "react";
import OppController from "../features/Opps/OppController";
import queryString from "query-string";
import qs from "query-string";
import { useHistory } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { durationVar, isFirstRenderVar, programVar, setIsSearch, startDateVar, setIsFirstRender } from "../cache";
import { setDuration, setProgram, setStartDate } from "../features/Search/searchOperations";
import { format, parse } from "date-fns";
import { isValidDate } from "../utils/helpers";
import _ from "underscore";
export default function SearchRoute(props): ReactElement {
	const history = useHistory();
	const duration = useReactiveVar(durationVar);
	const program = useReactiveVar(programVar);
	const startDate = useReactiveVar(startDateVar);
	const isFirstRender = useReactiveVar(isFirstRenderVar);
	useEffect(() => {
		setIsSearch(true);
		const values = queryString.parse(props.location.search);
		const programValue = values?.program ? values.program : null;
		const durationValue = values?.duration ? values.duration : null;
		const dateValue = values?.earliest_start_date ? values.earliest_start_date : null;
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
		return () => {
			setIsSearch(false);
		};
	}, []);
	useEffect(() => {
		let query;
		if (isFirstRender) {
			query = {
				program: program ? program : undefined,
				duration: duration ? duration : undefined,
			};
			setIsFirstRender(false);
		} else {
			query = {
				program: program ? program : undefined,
				duration: duration ? duration : undefined,
				earliest_start_date: format(startDate, "yyyy-L-d"),
			};
		}
		const searchString = qs.stringify(query);
		history.push({
			pathname: "/search",
			search: searchString,
		});
	}, [program, duration, startDate]);
	return (
		<>
			<OppController></OppController>
			<div style={{ width: "90%", height: "20vh", alignSelf: "center" }}></div>
		</>
	);
}
