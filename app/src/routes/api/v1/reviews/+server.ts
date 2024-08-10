import { Review_Model } from '$lib/server/models';
import { db_connect } from '$lib/server/db';
// impoer {connection}

export const GET = async ({ request, url }) => {
	// const limit = Number(url.searchParams.get('limit') ?? '10')
	// const skip = Number(url.searchParams.get('skip') ?? '0')
	const data = await Review_Model.find().select('text rating');
	return new Response(JSON.stringify({ reviews: data }), { status: 200 });

	// return new Response(JSON.stringify({ reviews: ['a', 'b', 'c', 'd'] }), { status: 200 });
};

export const POST = async ({ request, url }) => {
	// const limit = Number(url.searchParams.get('limit') ?? '10')
	// const skip = Number(url.searchParams.get('skip') ?? '0')

	const params = await request.json();
	console.log(params);

	const review = new Review_Model({
		text: params?.text,
		rating: params?.rating
	});

	await review.save();

	return new Response('OK', { status: 201 });

	// return new Response(JSON.stringify({ reviews: ['a', 'b', 'c', 'd'] }), { status: 200 });
};
