import useFetch from './useFetch';
import './Event.css';

const Event = ({ event }) => {
	
	const { data: marketsResult, isPending, error } = useFetch(
		'MARKET_DATA',
		event.typeName === "Football Live",
		JSON.stringify({
			type: 'getMarket',
			id: event.markets[0]
		})
	);

	// const { data: eventResult, isPending, error } = useFetch(
	// 	"EVENT_DATA",
	// 	isMarketsOn,
	// 	JSON.stringify({
	// 		type: 'getEvent',
	// 		id: event.eventId
	// 	})
	// );

	return (
		<div className="event-preview">
			<div className="floats">
				{event.competitors[0].name} v {event.competitors[1].name}
			</div>
			<div className="floats">
				{(event.status.started || event.status.started) && (
					<div className="scores">
						{event.scores[event.competitors[0].position]} -{' '}
						{event.scores[event.competitors[1].position]}
					</div>
				)}
			</div>
			{/* <p>{markets && isPending ? 'Loading markets data..' : ''}</p>
			<p>
				{markets && !isPending && !error ? (
					`${marketsResult.name} (${marketsResult.type})`
				) : (
					''
				)}
			</p> */}
		</div>
	);
};

export default Event;
