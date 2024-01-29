const mongoose = require('mongoose');
//product coffee
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 6,
        max: 255,
        trim: true
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
        trim: true
    },
    image: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
        trim: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    date: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        default: 0
    },
    numberReviews: {
        type: Number,
        default: 0
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L'],
        default: 'S'
    },
});

const Product = mongoose.model('Product', productSchema);

export default Product;