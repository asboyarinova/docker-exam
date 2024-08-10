import mongoose from 'mongoose';

export async function db_connect() {
	try {
		return await mongoose.connect('mongodb://mongouser:mongopasswd@mongodb/app?authSource=admin');
	} catch (err) {
		console.log(err);
	}
}
