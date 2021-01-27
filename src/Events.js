import Event from "./Event";

const Events = ({events}) => {
    return ( 
        events && events.map((event) => {
            return (
                <Event event={event}/>
            );
        })
     );
}
 
export default Events;