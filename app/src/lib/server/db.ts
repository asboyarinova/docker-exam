import { SECRET_MONGODB_URI } from '$env/static/private';
import mongoose from 'mongoose';

export async function db_connect() {
	try {
		// return await mongoose.connect(SECRET_MONGODB_URI);
		return await mongoose.connect(
			'mongodb://mongouser:mongopasswd@10.100.12.13/app?authSource=admin'
			// 'mongodb://mongouser:mongopasswd@mongodb/app?authSource=admin'
		);
	} catch (err) {
		console.log(err);
	}
}
