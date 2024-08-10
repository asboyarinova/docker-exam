import { Review_Model } from '$lib/server/models';
import moment from 'moment';

export const GET = async ({ request, url }) => {
	// const limit = Number(url.searchParams.get('limit') ?? '10')
	// const skip = Number(url.searchParams.get('skip') ?? '0')
	const data = await Review_Model.find().select('text rating reviewDate');
	return new Response(JSON.stringify({ reviews: data }), { status: 200 });

	// return new Response(JSON.stringify({ reviews: ['a', 'b', 'c', 'd'] }), { status: 200 });
};

export const POST = async ({ request, url }) => {
	// const limit = Number(url.searchParams.get('limit') ?? '10')
	// const skip = Number(url.searchParams.get('skip') ?? '0')
	const dateString = moment(Date.now()).format('DD-MM-YY hh:mm');

	const params = await request.json();
	console.log(params);

	const review = new Review_Model({
		text: params?.text,
		rating: params?.rating,
		reviewDate: dateString
	});

	await review.save();

	return new Response('OK', { status: 201 });

	// return new Response(JSON.stringify({ reviews: ['a', 'b', 'c', 'd'] }), { status: 200 });
};
