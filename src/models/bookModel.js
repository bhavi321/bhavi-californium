const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    firstName: {
        type:String,
        unique:true,
        required:true
    },
    authorName: {
        type: String,
        unique: true,
        required: true
    },
    category: String,

    year: Number,
},
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
 { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array