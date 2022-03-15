import Joi from "joi";
const lorem: string =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
export const dataSchema = Joi.array().items(
	Joi.object({
		available_slots: Joi.array()
			.items(
				Joi.object({
					start_date: Joi.string().allow("", null).empty(["", null]).default("Not found"),
					end_date: Joi.string().allow("", null).empty(["", null]).default("Not found"),
				})
			)
			.allow(null),
		description: Joi.string().allow("", null).empty(["", null]).default(lorem),
		title: Joi.string().allow("", null).empty(["", null]).default("Default Title"),
		location: Joi.string().allow("", null).empty(["", null]).default("Default Location"),
		branch: Joi.object({
			company: Joi.object({
				name: Joi.string().allow("", null).empty(["", null]).default("Default Company"),
			}),
		})
			.allow(null)
			.empty(null)
			.default({
				company: {
					name: "Default Company",
				},
			}),
		cover_photo: Joi.object({
			url: Joi.string()
				.uri()
				.allow("", null)
				.empty(["", null])
				.default("https://s3.eu-west-1.amazonaws.com/gis-production-eu/7o7Fw4Zs994VT3BTfvMeh4XL"),
		})
			.allow(null)
			.empty(null)
			.default({
				url: "https://cdn-expa.aiesec.org/gis-img/gt_default.png",
			}),
		sdg_info: Joi.object({
			sdg_target: {
				parent: {
					short_name: Joi.string().allow("", null).empty(["", null]).default("Default Name"),
					sdg_goal_no: Joi.string().allow("", null).empty(["", null]).default("0"),
				},
			},
		}).allow(null),
		specifics_info: Joi.object({
			salary: Joi.number().allow(null),
			salary_currency: Joi.object({
				alphabetic_code: Joi.string().allow("", null),
			}).allow(null),
			salary_periodicity: Joi.string().allow("", null),
		}).allow(null),
		programme: Joi.object({
			short_name_display: Joi.string()
				.allow("", null)
				.empty(["", null])
				.empty(Joi.not("GV", "GTa", "GTe"))
				.default("GTa"),
		})
			.allow(null)
			.empty(null)
			.default({
				short_name_display: "GTa",
			}),
		opportunity_duration_type: Joi.object({
			duration_type: Joi.string().allow("", null).empty(["", null]).default("short"),
		})
			.allow(null)
			.empty(null)
			.default({
				duration_type: "short",
			}),
		id: Joi.number().integer(),
		applicants_count: Joi.number().integer(),
	})
);
export type dataSchemaObj = {
	specifics_info: {
		salary: number | null;
		salary_currency: {
			alphabetic_code: string | null;
		};
		salary_periodicity: string | null;
	};
	description: string;
	title: string;
	location: string;
	sdg_info: {
		sdg_target: {
			parent: {
				sdg_goal_no: string;
				short_name: string;
			};
		};
	};
	available_slots: Array<{
		start_date: string;
		end_date: string;
	}>;
	branch: {
		company: {
			name: string;
		};
	};
	cover_photo: {
		url: string;
	};
	programme: {
		short_name_display: string;
	};
	opportunity_duration_type: {
		duration_type: string;
	};
	id: number;
	applicants_count: number;
};
export type dataSchemaType = Array<dataSchemaObj>;
