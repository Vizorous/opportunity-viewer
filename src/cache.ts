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
                },
                modalShow: {
                    read() {
                        return modalShowVar();
                    }
                },
                editTitle: {
                    read() {
                        return editTitleVar();
                    }
                },
                editId: {
                    read() {
                        return editIdVar();
                    }
                },
                editDescription: {
                    read() {
                        return editDescriptionVar();
                    }
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
export const modalShowVar: ReactiveVar<boolean> = makeVar<boolean>(
    false
);
export const editTitleVar: ReactiveVar<string | null> = makeVar<string | null>(
    null
);
export const editDescriptionVar: ReactiveVar<string | null> = makeVar<string | null>(
    null
);
export const editIdVar: ReactiveVar<number | null> = makeVar<number | null>(
    null
);
