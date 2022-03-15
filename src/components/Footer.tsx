import React, { ReactElement } from "react";
import wolves from "../assets/ebwolves.png";
export default function Footer(): ReactElement {
	return (
		<div className="p-3 border-top footer">
			<div className="d-flex align-items-center justify-content-between">
				<div>
					<div className="f12 mb-1">Developed by</div>
					<h6 className="mb-1 font-weight-bold">Vikum Wijekoon</h6>
					<h6 className="mb-1">LCVP - Digital Experience</h6>
					<h6 className="mb-1">EB Wolves 20.21</h6>
				</div>
				<img src={wolves} height={60}></img>
			</div>
			<h5 className="mb-1">AIESEC in University of Sri Jayewardenepura </h5>
		</div>
	);
}
