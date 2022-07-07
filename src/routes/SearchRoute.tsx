import React, { ReactElement, useEffect, useState } from "react";
import OppController from "../features/Opps/OppController";
import queryString from "query-string";
import qs from "query-string";
import { useHistory, useParams } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import {
	durationVar,
	isFirstRenderVar,
	programVar,
	setIsSearch,
	startDateVar,
	setIsFirstRender,
	entityVar,
} from "../cache";
import { setDuration, setEntity, setProgram, setStartDate } from "../features/Search/searchOperations";
import { format, parse } from "date-fns";
import { isValidDate } from "../utils/helpers";
import _ from "underscore";
export default function SearchRoute(props): ReactElement {
	const history = useHistory();
	const duration = useReactiveVar(durationVar);
	const program = useReactiveVar(programVar);
	const startDate = useReactiveVar(startDateVar);
	const isFirstRender = useReactiveVar(isFirstRenderVar);
	const entity = useReactiveVar(entityVar);
	const entityValue = useParams<{ entity: string }>().entity;

	useEffect(() => {
		setIsSearch(true);
		const values = queryString.parse(props.location.search);
		const programValue = values?.program ? values.program : null;
		const durationValue = values?.duration ? values.duration : null;
		// const dateValue = values?.earliest_start_date ? values.earliest_start_date : null;
		// const entityValue = values?.entity ? values.entity : null;
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
		if (entityValue) {
			const value = parseInt(entityValue);
			console.log(value);
			setEntity(isNaN(value) ? 1623 : value);
		}
		// if (dateValue) {
		// 	const date = parse(dateValue as string, "yyyy-L-d", new Date());
		// 	const isValid: boolean = isValidDate(date);
		// 	if (isValid) {
		// 		setStartDate(date);
		// 	}
		// }
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
				// earliest_start_date: format(startDate, "yyyy-L-d"),
			};
		}
		const searchString = qs.stringify(query);
		history.push({
			pathname: `/search/${entityValue ? entityValue : 1623}`,
			search: searchString,
		});
	}, [program, duration, entity]);
	return (
		<>
			<OppController></OppController>
			<div style={{ width: "90%", height: "20vh", alignSelf: "center" }}></div>
		</>
	);
}
