import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { DurationKeys, ProgramKeys } from "./features/Search/SearchTypes";


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


export const programVar: ReactiveVar<ProgramKeys | null> = makeVar<ProgramKeys | null>(
    null
);
export const durationVar: ReactiveVar<DurationKeys | null> = makeVar<DurationKeys | null>(
    null
);
export const startDateVar: ReactiveVar<Date> = makeVar<Date>(
    new Date()
);
