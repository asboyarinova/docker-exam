import mongoose, { Mongoose } from 'mongoose';

const Review_Schema = new mongoose.Schema({
	text: { type: String },
	rating: { type: Number }
});

export const Review_Model = mongoose.model('Review', Review_Schema);
