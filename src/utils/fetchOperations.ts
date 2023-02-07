import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";

export const httpLink = createHttpLink({
	uri: "https://gis-api.aiesec.org/graphql",
});
export const authLink = setContext(async (_, { headers }) => {
	const config = {
		method: "get",
		url: "https://aiesec.org/getEnvironment",
		headers: {
			// "origin": 'https://jlc-opportunity-viewer.web.app/',
			// 'authority': 'aiesec.org',
			accept: "application/json, text/plain, */*",
			// 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36',
			// 'dnt': '1',
			// 'sec-fetch-site': 'same-origin',
			// 'sec-fetch-mode': 'cors',
			// 'sec-fetch-dest': 'empty',
			// 'referer': 'https://aiesec.org/search',
			"accept-language": "en-US,en;q=0.9",
		},
	};
	let token = "";
	// try {
	//     const data = await axios(config as any)
	//     token = data?.data?.environment?.publicToken

	// }
	// catch (err) {
	//     console.log(err)

	// }
	// const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			Authorization: token ? token : "",
		},
	};
});

// curl 'https://gis-api.aiesec.org/graphql' \
// -H 'Connection: keep-alive' \
// -H 'Accept: application/json, text/plain, */*' \
// -H 'DNT: 1' \
// -H 'Authorization: e316ebe109dd84ed16734e5161a2d236d0a7e6daf499941f7c110078e3c75493' \
// -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36' \
// -H 'Content-Type: application/json' \
// -H 'Origin: https://aiesec.org' \
// -H 'Sec-Fetch-Site: same-site' \
// -H 'Sec-Fetch-Mode: cors' \
// -H 'Sec-Fetch-Dest: empty' \
// -H 'Referer: https://aiesec.org/' \
// -H 'Accept-Language: en-US,en;q=0.9,si-LK;q=0.8,si;q=0.7,ta;q=0.6' \
// --data - binary $'{"operationName":"GetAllOpportunitiesQuery","variables":{"page":1,"q":null,"smart_search":true,"filters":{"earliest_start_date":{"from":"2020-11-11"},"programmes":[7],"duration_type":"short"},"sort":"relevance","loggedInUser":false,"gep_page":1,"gep_per_page":3,"gepFilters":{"earliest_start_date":{"from":"2020-11-11"},"programmes":[2,8],"duration_type":"short","is_gep":true}},"query":"query GetAllOpportunitiesQuery($only: String, $page: Int, $per_page: Int, $q: String, $with: String, $sort: String, $smart_search: Boolean, $filters: OpportunityFilter, $cdn_links: Boolean, $loggedInUser: Boolean\u0021, $gep_page: Int, $gep_per_page: Int, $gepFilters: OpportunityFilter) {\\n  allOpportunity: allOpportunity(only: $only, page: $page, per_page: $per_page, q: $q, with: $with, sort: $sort, smart_search: $smart_search, filters: $filters) {\\n    data {\\n      ...Opportunity\\n      __typename\\n    }\\n    paging {\\n      total_items\\n      total_pages\\n      current_page\\n      __typename\\n    }\\n    __typename\\n  }\\n  gepOpportunities: allOpportunity(only: $only, page: $gep_page, per_page: $gep_per_page, q: $q, with: $with, sort: $sort, smart_search: $smart_search, filters: $gepFilters) {\\n    data {\\n      ...Opportunity\\n      __typename\\n    }\\n    paging {\\n      total_items\\n      total_pages\\n      current_page\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment Opportunity on Opportunity {\\n  applicants_count\\n  applications_close_date\\n  applied_to @include(if: $loggedInUser)\\n  branch {\\n    company {\\n      id\\n      name\\n      profile_photo(cdn_links: $cdn_links)\\n      __typename\\n    }\\n    id\\n    __typename\\n  }\\n  cover_photo(cdn_links: $cdn_links)\\n  description\\n  host_lc {\\n    id\\n    address_detail {\\n      id\\n      country\\n      __typename\\n    }\\n    __typename\\n  }\\n  id\\n  is_gep\\n  is_global_project\\n  is_favourited @include(if: $loggedInUser)\\n  duration\\n  opportunity_duration_type {\\n    id\\n    duration_type\\n    __typename\\n  }\\n  earliest_start_date\\n  location\\n  programme {\\n    id\\n    short_name\\n    short_name_display\\n    __typename\\n  }\\n  project_name\\n  remote_opportunity\\n  role_info {\\n    learning_points_list\\n    __typename\\n  }\\n  sdg_info {\\n    id\\n    sdg_target {\\n      goal_index\\n      id\\n      parent {\\n        id\\n        name\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  title\\n  __typename\\n}\\n"}' \
// --compressed
