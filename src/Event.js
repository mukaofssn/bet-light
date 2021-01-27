

const Event = ({event}) => {
	return (
		<div className="event-preview" key={event.eventId}>
			<p>{event.name}</p>
		</div>
	);
};

export default Event;
