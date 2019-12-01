import React from "react";

import { PartnersProps } from "./Home-Main"

export const Partners = (props: { partnersPicsList: PartnersProps[] }) => {
	return <section className="partner_brokers">
		<h2>Our Partner Brokers</h2>
		<div>
			{ props.partnersPicsList.map((singlePic, index) => {
				return	<img 
					src={ `images/partners/${ singlePic.pic }` } 
					alt={ singlePic.alt } 
					key={ index } 
				/>
			}) }
		</div>
		<button>Create Account</button>
	</section>
}