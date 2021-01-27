import { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
	const [ liveEvents, setLiveEvents ] = useState(null);
	const [ isPending, setIsPending ] = useState(true);
	const [ error, setError ] = useState(null);

	useEffect(() => {
		let ws = new WebSocket('ws://localhost:8889');
		ws.onopen = () => {
			console.log('ws opened');
			ws.send(
				JSON.stringify({ type: 'getLiveEvents', primaryMarkets: false })
			);
		};
		ws.onclose = () => console.log('ws closed');
		ws.onmessage = (e) => {
			const result = JSON.parse(e.data);
			console.log(result);
			if (result.type === 'LIVE_EVENTS_DATA') {
				setLiveEvents(result.data);
				setIsPending(false);
				setError(false);
			}
		};

		return () => {
			ws.send(JSON.stringify({ type: 'unsubscribe' }));
			ws.close();
		};
	}, []);

	return (
		<div className="home">
			{error && <h2>{error}</h2>}
			{isPending && <h2>Loading...</h2>}
			{liveEvents && liveEvents.map((event) => {
				return (
					<div className="event-preview" key={event.eventId}>
						<h9>{event.name}</h9>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
