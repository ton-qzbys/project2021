const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookT = new Schema({
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
    },
    actionTeacher: {
        type: String
    }
    ,
    studentID: {
        type: String
    },
    



}, {
    collection: 'booksT'
})

module.exports = mongoose.model('BookT', BookT);  