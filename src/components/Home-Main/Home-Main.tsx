import React from "react";

import { Partners } from "./Main-Partners"
import { JoinSteps } from "./Join-Steps"

export interface PartnersProps {
	pic: string,
	alt: string
}
export interface PictureProps {
	id: number,
	pic: string,
	text: string
}
export class HomeMain extends React.Component<{}, { dataPics: PictureProps[], partners: PartnersProps[] }> {
	state = {
		dataPics: [],
		partners: []
	}
	componentDidMount() {
		fetch("data-api/data-pics.json")
		.then(res => res.json())
		.then(data => {
			this.setState({
				dataPics: data.data_pics, 
				partners: data.partners 
			})
		})
	}
	render() {
		return <> 
			<JoinSteps picsList={ this.state.dataPics } />
			<Partners partnersPicsList={ this.state.partners } />
		</>
	}
}