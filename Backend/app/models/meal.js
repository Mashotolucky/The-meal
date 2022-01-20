const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema = new Schema({
    favourites: [String]
});

module.exports = mongoose.model('meal',mealSchema);