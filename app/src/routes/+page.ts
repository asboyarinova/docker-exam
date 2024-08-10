import { reviewsStore } from '../stores';

export const load = async ({ fetch }) => {
	const res = await fetch('/api/v1/reviews');
	const data = await res.json();
	reviewsStore.set(data);
};
