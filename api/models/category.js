// category product coffee
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
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
});
const Category = mongoose.model('Category', categorySchema);
export default Category;