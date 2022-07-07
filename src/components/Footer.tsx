import React, { ReactElement } from "react";
import lions from "../assets/Colored.png";
export default function Footer(): ReactElement {
	return (
		<div className="p-3 border-top footer">
			<div className="d-flex align-items-end justify-content-between">
				<div>
					{/* <div className="f12 mb-1">Developed by</div> */}
					{/* <h6 className="mb-1 font-weight-bold">Vikum Wijekoon</h6> */}
					{/* <h6 className="mb-1">Vice President - Information Management</h6> */}
					<p className="mb-1">All rights reserved </p>
					<h5 className="mb-1">AIESEC in Sri Lanka</h5>
				</div>
				<img src={lions} height={80}></img>
			</div>
		</div>
	);
}
