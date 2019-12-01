import React from 'react';

import { ChartProps } from "./Strategy-Providers"

export const StrategyProvider = (props: { data: ChartProps }) => {
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