import { error } from '@sveltejs/kit';
import { db_connect } from '$lib/server/db';

const connection = await db_connect();
if (!connection) {
	console.log(500, 'Database connection failed');
} else {
	console.log('DB Connected');
}

export default connection;
