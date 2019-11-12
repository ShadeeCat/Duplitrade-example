import React from 'react';

interface Chart {
	id: number,
	strategy: string,
	net_pl: number,
	net_profit: string,
	trades: number,
	win: number,
	profit_factor: number,
	weeks: number,
	followers: number
}
interface StrategyProvidersState {
	dataChart: Chart[]
}
export class StrategyProviders extends React.Component<{}, StrategyProvidersState> {
	state: StrategyProvidersState = {
		dataChart: [],

	}
	componentDidMount() {
		fetch("data-api/data.json")
		.then(res => res.json())
		.then((data: Chart[]) => {
			this.setState({ dataChart: data.sort((c1, c2) => c2.followers - c1.followers) })
		})
	}

	sortByFollowers = () => {
		const list = this.state.dataChart
		this.setState({ dataChart: list.reverse() })
	}

	render () {
		return <table className="charts">
			<thead>
				<tr>
					<th>Strategy</th>
					<th>Net P/L %</th>
					<th>Net Profit</th>
					<th>Trades</th>
					<th>Win %</th>
					<th>Profit Factor</th>
					<th>Weeks</th>
					<th onClick={ this.sortByFollowers }>Followers</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
			{
				this.state.dataChart.map(
					singleChart => <StrategyProvider data={ singleChart } key={ singleChart.id } />
				)
			}
			</tbody>
		</table>
	}
}

function StrategyProvider(props: { data: Chart }) {
	return <tr>
		<td className="chart-strategy">{ props.data.strategy }</td>
		<td className={(props.data.net_pl > 0 ? 'positive' : 'negative') + ' chart-net_pl'}>{ props.data.net_pl } %</td>
		<td className="chart-net_profit">{ props.data.net_profit }</td>
		<td className="chart-trades">{ props.data.trades }</td>
		<td className="chart-win">{ props.data.win }</td>
		<td className="chart-profit_factor">{ props.data.profit_factor }</td>
		<td className="chart-weeks">{ props.data.weeks }</td>
		<td className="chart-followers">{ props.data.followers }</td>
		<td className="chart-duplicate-action no-action"><button onClick={ e => console.log(e.nativeEvent) }>Duplicate</button></td>
	</tr>
}