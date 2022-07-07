import { gql } from "@apollo/client";
import { format } from "date-fns";
import { DurationKeys, DurationTypes, ProgramKeys, ProgramTypes } from "../Search/SearchTypes";

export const getAllOpportunities = gql`
	query GetAllOpportunitiesQuery(
		$page: Int
		$per_page: Int
		$sort: String
		$smart_search: Boolean
		$filters: OpportunityFilter
		$cdn_links: Boolean
	) {
		allOpportunity: allOpportunity(
			page: $page
			per_page: $per_page
			sort: $sort
			smart_search: $smart_search
			filters: $filters
		) {
			data {
				...Opportunity
			}
			paging {
				total_items
				total_pages
				current_page
			}
		}
	}
	fragment Opportunity on Opportunity {
		applicants_count
		location
		id
		available_slots {
			start_date
			end_date
		}
		sdg_info {
			sdg_target {
				parent {
					sdg_goal_no
					short_name
				}
			}
		}
		opportunity_duration_type {
			id
			duration_type
		}
		branch {
			company {
				id
				name
				profile_photo(cdn_links: $cdn_links)
			}
			id
		}
		cover_photo(cdn_links: $cdn_links)
		description
		programme {
			id
			short_name
			short_name_display
		}
		title
		specifics_info {
			salary
			salary_currency {
				alphabetic_code
			}
			salary_periodicity
		}
	}
`;
export const passedVariables = (
	startDate: Date,
	duration: DurationKeys | null,
	program: ProgramKeys | null,
	entity: number | null,
	page?: number
) => {
	const date = format(startDate, "yyyy-L-d");
	const durationVal = duration ? DurationTypes.keys[duration as DurationKeys].id : undefined;
	const programVal = program ? ProgramTypes.keys[program as ProgramKeys].id : undefined;

	return {
		page: page ? page : 1,
		per_page: 10,
		smart_search: true,
		filters: {
			earliest_start_date: {
				from: date,
			},
			[DurationTypes.name]: durationVal,
			[ProgramTypes.name]: programVal,
			// sub_products: 55,
			committee: entity || 1623,
		},
		sort: "relevance",
	};
};
