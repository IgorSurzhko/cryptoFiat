const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dealsList = new Schema(
	{
		buyerId: {
			type: String,
			required: true
		},
		sellerId: {
			type: String,
			required: true
		},
		buyerName: {
			type: String,
			required: true
		},
		sellerName: {
			type: String,
			required: true
		},
		country: {
			type: String,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		amountBtc: {
			type: Number,
			required: true
		},
		currentBtcPrice: {
			type: Number
		}
	},
	{
		timestamps: true,
		collection: 'dealsList'
	}
);

module.exports = mongoose.model('Deals', dealsList);
