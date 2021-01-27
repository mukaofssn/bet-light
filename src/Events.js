import Event from "./Event";

const Events = ({events, showPrimary}) => {    
    return ( 
        events && events.map((event, id) => {            
            return (
                <Event event={event} key={id} markets={showPrimary && event.markets ? event.markets[0] : null} />
            );
        })
     );
}
 
export default Events;