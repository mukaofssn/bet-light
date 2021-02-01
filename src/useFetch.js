import { useState, useEffect } from 'react';

const useFetch = (type, trigger, request) => {
	const [ data, setData ] = useState(null);
	const [ isPending, setIsPending ] = useState(true);
	const [ error, setError ] = useState(null);

	useEffect(
		() => {
			if (!trigger || trigger === undefined)
				return { data: null, isPending: false, error: null };
			let ws = new WebSocket('ws://localhost:8889');
			ws.onmessage = (e) => {
				const result = JSON.parse(e.data);	
				// console.log(result.data);			
				if (result.type === type) {
					console.log(result.data);
					setData(result.data);
					setIsPending(false);
					setError(false);
				}				
			};
			ws.onopen = () => {
				// console.log(type, trigger, request);
				ws.send(request);
			};
			ws.onclose = () => {
				// console.log('ws closed');
			};

			ws.onerror = (err) => {
				console.log(err);
				setError(err.message);
				setIsPending(false);
			};

			return () => {
				if (ws.readyState === 1) {
					ws.send(JSON.stringify({ type: 'unsubscribe' }));
					ws.close();
				}
			};
		},
		[ type, trigger, request ]
	);

	return { data, isPending, error };
};

export default useFetch;
