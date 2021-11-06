const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    story: {
        type: String
    },
    term: {
        type: String
    },
    year: {
        type: String
    },
    address: {
        type: String
    },
    tel: {
        type: String
    },
    description: {
        type: String
    }

}, {
    collection: 'books'
})

module.exports = mongoose.model('Book', Book);