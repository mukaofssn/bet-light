import { useState, useEffect } from 'react';
import Events from './Events';
import './Home.css';

const Home = ({ primaryMarkets }) => {
	const [ liveEvents, setLiveEvents ] = useState(null);
	const [ isPending, setIsPending ] = useState(true);
	const [ error, setError ] = useState(null);

	useEffect(
		() => {
			let ws = new WebSocket('ws://localhost:8889');
			ws.onmessage = (e) => {
				const result = JSON.parse(e.data);
				// console.log(result);
				if (result.type === 'LIVE_EVENTS_DATA') {
					setLiveEvents(result.data);
					setIsPending(false);
					setError(false);
				}
			};
			ws.onopen = () => {
				// console.log('ws opened');
				// console.log('Sending with primary markets = ' + primaryMarkets);
				ws.send(
					JSON.stringify({
						type: 'getLiveEvents',
						primaryMarkets: primaryMarkets
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
		},
		[ primaryMarkets ]
	);

	return (
		<div className="home">
			<div className="encloseEvents">
				{error && <h2>{error}</h2>}
				{isPending && <h2>Loading...</h2>}
				<Events events={liveEvents} showPrimary={primaryMarkets} />
			</div>
		</div>
	);
};

export default Home;
