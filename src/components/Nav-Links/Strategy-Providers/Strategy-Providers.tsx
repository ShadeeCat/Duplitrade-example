import React from 'react';

import { StrategyProvider } from "./Provider"

export interface ChartProps {
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
	dataChart: ChartProps[],
	followersLotToFew: boolean,
	strategyLotToFew: boolean
}
export class StrategyProviders extends React.Component<{}, StrategyProvidersState> {
	state: StrategyProvidersState = {
		dataChart: [],
		followersLotToFew: true,
		strategyLotToFew: false
	}
	componentDidMount() {
		fetch("data-api/data.json")
		.then(res => res.json())
		.then((data: ChartProps[]) => {
			this.setState({ dataChart: data })
		})
	}

	sortByFollowers = () => {
		const { followersLotToFew, dataChart: list } = this.state
		this.setState({ dataChart: list.sort((c1, c2) => {
			var diff = c2.followers - c1.followers
			return followersLotToFew ? diff : diff * -1
		}), followersLotToFew: !followersLotToFew })
	}
	sortByName = () => {
		const { strategyLotToFew, dataChart: list } = this.state
		this.setState({ dataChart: list.sort((c1, c2) => {
				var diff = c2.strategy.localeCompare(c1.strategy)
				return strategyLotToFew ? diff : diff * -1
			}),
			strategyLotToFew: !strategyLotToFew			
		})
	}
	render () {
		return <div className="parentChart"> 
		<table className="charts">
			<thead>
				<tr>
					<th onClick={ this.sortByName }>Strategy</th>
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
		</div>
	}
}