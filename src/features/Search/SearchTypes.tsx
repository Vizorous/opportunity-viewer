// export enum ProgramTypes {
//   GV = "Volunteer for a cause",
//   GTa = "Intern for a company",
//   GTe = "Teach abroad",
//   clear = "Clear Selection",
// }

// export enum DurationTypes {
//   short = "6-12 Weeks",
//   medium = "3-6 Months",
//   long = "6-8 Months",
//   clear = "Clear Selection",
// }

export type DurationKeys = "short" | "medium" | "long";
export type IDuration = {
  name: string;
  keys: { [key in DurationKeys]: { id: string; title: string } };
};

export const DurationTypes: IDuration = {
  name: "duration_type",
  keys: {
    short: { title: "6-12 Weeks", id: "short" },
    medium: { title: "3-6 Months", id: "medium" },
    long: { title: "6-8 Months", id: "long" },
  },
};
export type ProgramKeys = "GV" | "GTa" | "GTe";
export type IPrograms = {
  name: string;
  keys: {
    [key in ProgramKeys]: {
      id: Array<number>;
      title: string;
      programName: string;
    };
  };
};
export const ProgramTypes: IPrograms = {
  name: "programmes",
  keys: {
    GV: {
      title: "Volunteer for a cause",
      programName: "Global Volunteer",
      id: [7],
    },
    GTa: {
      title: "Intern for a company",
      programName: "Global Talent",
      id: [2, 8],
    },
    GTe: { title: "Teach abroad", id: [9], programName: "Global Teacher" },
  },
};
