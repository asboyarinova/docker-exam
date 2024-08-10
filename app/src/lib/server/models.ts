import mongoose, { Mongoose } from 'mongoose';

const Review_Schema = new mongoose.Schema({
	text: { type: String, default: '', required: true },
	rating: { type: Number, default: 5, required: true },
	reviewDate: { type: String, default: '10.08.2024 10:55', required: true }
});

export const Review_Model = mongoose.model('Review', Review_Schema);
