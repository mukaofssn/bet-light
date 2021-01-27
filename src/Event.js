import { useState, useEffect } from 'react';

const Event = ({ event, markets }) => {
	const [ marketInfo, setMarketInfo ] = useState('');

	useEffect(() => {
		if (markets) {
			// console.log(markets);
			let ws = new WebSocket('ws://localhost:8889');
			ws.onmessage = (e) => {
				const result = JSON.parse(e.data);
				if (result.type === 'MARKET_DATA') {
					// console.log(result);
					setMarketInfo(`${result.data.name} (${result.data.type})`);
				}
			};
			ws.onopen = () => {
				// console.log('Getting market data for ' + markets);
				ws.send(
					JSON.stringify({
						type: 'getMarket',
						id: markets
					})
				);
			};
			ws.onclose = () => {
				// console.log('ws closed');
			};

			return () => {
				if (ws.readyState === 1) {
					ws.send(JSON.stringify({ type: 'unsubscribe' }));
					ws.close();
				}
			};
		}
	});

	return (
		<div className="event-preview">
			<p>{event.name}</p>
			<p>{markets ? marketInfo : ""}</p>
		</div>
	);
};

export default Event;
