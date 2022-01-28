import { browser } from '$app/env';

export function browserGet(key) {
	if (browser) {
		const item = localStorage.getItem(key);
		if (item) {
			return JSON.parse(item);
		}
	}
	return null;
}

export function browserSet(key, value) {
	if (browser) {
		localStorage.setItem(key, value);
	}
}

export async function post(fetch, url, body) {
	let customError = false;
	try {
		let headers = {};
		headers['Content-Type'] = 'application/json';
		body = JSON.stringify(body);

		const res = await fetch(url, {
			method: 'POST',
			body,
			headers
		});

		if (!res.ok) {
			try {
				const data = await res.json();
				const error = data.errors[0].message;
				customError = true;
				throw { id: 401, message: error };
			} catch (err) {
				console.log(err);
				throw err;
			}
		}
		return res;
	} catch (err) {
		console.log(err);
		throw customError ? err : { id: '', message: 'unknown error' };
	}
}
