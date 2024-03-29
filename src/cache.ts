import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { DurationKeys, ProgramKeys } from "./features/Search/SearchTypes";

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Search: {
			fields: {
				program: {
					read() {
						return programVar();
					},
				},
				duration: {
					read() {
						return durationVar();
					},
				},
				startDate: {
					read() {
						return startDateVar();
					},
				},
				entity: {
					read() {
						return entityVar();
					},
				},

				fullViewId: {
					read() {
						return fullViewIdVar();
					},
				},

				error: {
					read() {
						return errorVar();
					},
				},

				isSearch: {
					read() {
						return isSearchVar();
					},
				},
				isFirstRender: {
					read() {
						return isFirstRenderVar();
					},
				},
			},
		},
	},
});

/**
 * Set initial values when we create cache variables.
 */

export const programVar: ReactiveVar<ProgramKeys | null> = makeVar<ProgramKeys | null>(null);
export const durationVar: ReactiveVar<DurationKeys | null> = makeVar<DurationKeys | null>(null);
export const startDateVar: ReactiveVar<Date> = makeVar<Date>(new Date());

export const fullViewIdVar: ReactiveVar<number | null> = makeVar<number | null>(null);
export const entityVar: ReactiveVar<number | null> = makeVar<number | null>(null);
export const isSearchVar: ReactiveVar<boolean> = makeVar<boolean>(false);
export const isFirstRenderVar: ReactiveVar<boolean> = makeVar<boolean>(true);
export const errorVar: ReactiveVar<boolean> = makeVar<boolean>(false);
export const setError = (val: boolean) => {
	errorVar(val);
};
export const setIsSearch = (val: boolean) => {
	isSearchVar(val);
};
export const setIsFirstRender = (val: boolean) => {
	isFirstRenderVar(val);
};
