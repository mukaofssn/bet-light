import Event from './Event';
import useFetch from './useFetch';

const Football = () => {
	const { data: liveEvents, isPending, error } = useFetch(
		'LIVE_EVENTS_DATA',
		true,
		JSON.stringify({
			type: 'getLiveEvents',
			primaryMarkets: true
		})
	);

	return (
		<div>
			{error && <h2>{error}</h2>}
			{isPending && <h3>Loading...</h3>}
			{liveEvents &&
				liveEvents.map((event, id) => {
					return (
						<Event
							event={event}
							key={id}
						/>
					);
				})}
		</div>
	);
};

export default Football;
