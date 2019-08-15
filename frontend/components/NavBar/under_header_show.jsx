import React from "react";
import { Link } from "react-router-dom";

const UnderHeaderShow = () => {
	const content = (
	<div className="under-header">
		<div className="under-header-left">
			<div>Food</div>
			<div>Drinks</div>
			<div>Other</div>
		</div>
		<div className="under-header-right">
  		<div>All Businesses</div>~
		</div>
	</div>
	)

	return content;
}

export default UnderHeaderShow


// <div className="under-header">
// <div className="under-header-left">
//   <div>Food</div>
//   <div id="under-header-left-middle">Drinks</div>
//   <div>Other</div>
// </div>
// <div className="under-header-right">
//   <div>All Businesses</div>
// </div>
// </div>