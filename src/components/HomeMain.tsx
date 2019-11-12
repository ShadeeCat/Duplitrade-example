import React from "react";

interface Picture {
	id: number,
	pic: string, 
	text: string 
}
interface Partners {
	pic: string,
	alt: string
}
export class HomeMain extends React.Component<{}, { dataPics: Picture[], partners: Partners[] }> {

	state = {
		dataPics: [],
		partners: [],
	}
	componentDidMount() {
		fetch("data-api/data-pics.json")
		.then(res => res.json())
		.then(data => {
			this.setState({ dataPics: data.data_pics, partners: data.partners })
		})
	}
	render() {
		console.log(this.state.partners)
		return <> 
			<JoinSteps picsList={ this.state.dataPics } />
			<Partners partnersPicsList={ this.state.partners } />
		</>
	}
}

const JoinSteps = (props: { picsList: Picture[] }) => {
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

const Partners = (props: { partnersPicsList: Partners[] }) => {
	console.log(props)
	return <section className="partner_brokers">
		<h2>Our Partner Brokers</h2>
		<div>
			{ props.partnersPicsList.map((singlePic, index) => {
				return	<img src={`images/partners/${ singlePic.pic }`} alt={singlePic.alt} key={index} />
			}) }
		</div>
		<button>Create Account</button>
	</section>
}