import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { DurationTypes, ProgramTypes } from "./features/Search/SearchTypes";


export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Search: {
            fields: {
                program: {
                    read() {
                        return programVar();
                    }
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
                }
            }
        }
    }
});

/**
 * Set initial values when we create cache variables.
 */


export const programVar: ReactiveVar<ProgramTypes | null> = makeVar<ProgramTypes | null>(
    null
);
export const durationVar: ReactiveVar<DurationTypes | null> = makeVar<DurationTypes | null>(
    null
);
export const startDateVar: ReactiveVar<Date | null> = makeVar<Date | null>(
    new Date()
);
