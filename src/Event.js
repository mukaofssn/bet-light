import useFetch from './useFetch';

const Event = ({ event, markets }) => {
	const { data: marketsResult, isPending, error } = useFetch(
		'MARKET_DATA',
		markets,
		JSON.stringify({
			type: 'getMarket',
			id: markets
		})
	);

	return (
		<div className="event-preview">
			<p>{event.name}</p>
			<p>{markets && isPending ? 'Loading markets data..' : ''}</p>
			<p>
				{markets && !isPending && !error ? (
					`${marketsResult.name} (${marketsResult.type})`
				) : (
					''
				)}
			</p>
		</div>
	);
};

export default Event;
