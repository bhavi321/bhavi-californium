const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        unique:true,
        required:true
    },
    authorName:String,
    prices:{
        indianPrice: String,
        europeanPrice:String,
        japanPrice:String
    },
    year:Number,
    tags:[String],
    totalPages:Number,
    stockAvailable:Boolean
},
    
 { timestamps: true });

module.exports=mongoose.model('Book2',bookSchema)


