import React from 'react';
import axios from 'axios';
import _ from 'lodash';

/*Fetch custom hook for all the API calls*/

const useFetch = (url) => {
	// setting data state with empty arrays to avoid errors for filtering undefined data in the single components
	const [data, setData] = React.useState({
		result: [],
		co2: [],
		methane: [],
		nitrous: [],
		arcticData: [],
	});
	// error state
	const [error, setError] = React.useState('');

	// to cancel requests when component is unmounted
	const source = axios.CancelToken.source();

	const handleFetch = async (url) => {
		try {
			const response = await axios.get(url, { cancelToken: source.token });
			if (response) {
				setError('');
				setData(_.get(response, 'data'));
			}
		} catch (error) {
			setData([]);
			setError(error.response.status);

			console.log(error);
		}
	};

	React.useEffect(() => {
		handleFetch(url);

		return () => {
			source.cancel();
		};
	}, [url]);

	return { data, error };
};

export default useFetch;
