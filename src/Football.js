import Events from './Events';
import './Home.css';
import useFetch from './useFetch';

const Football = () => {
	const { data: liveEvents, isPending, error } = useFetch(
		'LIVE_EVENTS_DATA',
		true,
		JSON.stringify({
			type: 'getLiveEvents',
			primaryMarkets: false
		})
	);

	return (
		<div className="home">
			<div className="encloseEvents">
				{error && <h2>{error}</h2>}
				{isPending && <h2>Loading...</h2>}
				{liveEvents && (
					<Events events={liveEvents} />
				)}
			</div>
		</div>
	);
};

export default Football;
