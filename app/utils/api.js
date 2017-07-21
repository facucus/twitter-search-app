import "whatwg-fetch";
import _ from "lodash";

const getTweets = ( search, max_id = '' ) => {
	const encodedSearch = encodeURIComponent(search);
	return fetch(`http://localhost:3333/tweets/${encodedSearch}/${max_id}`)
		.then( res => res.json() );
}

const getUsers = ( search ) => {
	const encodedSearch = encodeURIComponent(search);
	return fetch(`http://localhost:3333/users/${encodedSearch}`)
	.then( res => res.json() );
}

const getTweet = ( id ) => {
	return fetch(`http://localhost:3333/tweet/${id}`)
		.then( res => res.json() );
}

const api = {
	getTweets,
	getUsers,
	getTweet
}

export default api;
