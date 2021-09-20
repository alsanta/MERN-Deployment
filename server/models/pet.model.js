const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    // fields that a table would have
    name:{
        type: String,
        required:[true, "A name is required."],
        minlength: [3, "The name must be longer than 3 characters"]
    },
    type:{
        type:String,
        required:[true, "What animal is the pet?"],
        minlength: [3, "Type must be longer than 3 characters"]
    },
    description:{
        type:String,
        required:[true, "Please provide a short description."],
        minlength: [3, "Description must be longer than 3 characters"]
    },
    skill1:{
    type:String,
    },
    skill2:{
    type:String,
    },
    skill3:{
    type:String
    }
})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet;