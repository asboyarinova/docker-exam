// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import { reviewsStore } from '../stores';

export const load = async ({ fetch }) => {
	const res = await fetch('/api/v1/reviews');
	const data = await res.json();
	reviewsStore.set(data);
};
