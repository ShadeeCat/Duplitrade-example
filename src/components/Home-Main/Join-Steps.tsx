import React from "react";

import { PictureProps } from "./Home-Main"

export const JoinSteps = (props: { picsList: PictureProps[] }) => {
	return <section className="join_steps">
		<h2>How do I join?</h2>
		<div>
			{ props.picsList.map((singlePic, index) => {
				return <div className="single_step" key={index}>
					<p className="num_of_step">{singlePic.id}</p>
					<img src={`images/how-do-join/${ singlePic.pic }`} alt={singlePic.text} />
					<p className="step_description">{singlePic.text}</p>
					<div className="triangle"></div>
				</div>
			}) }
		</div>
	</section>
}