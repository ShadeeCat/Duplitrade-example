import React from 'react';

interface Charts {
	strategy: string,
	net_pl: number,
	net_profit: string,
	trades: number,
	win: number,
	profit_factor: number,
	weeks: number,
	followers: number
}
export class StrategyProviders extends React.Component<{}, {dataChart: Charts[]}> {
	state = {
		dataChart: []
	}
	componentDidMount() {
		fetch("data-api/data.json")
		.then(res => res.json())
		.then(data => {
			this.setState({ dataChart: data })
		})
	}
	render () {
		return <div>
			
		</div>
	}
}