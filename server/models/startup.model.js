import mongoose from "mongoose"

const startupSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    logo : {
        type : String,
        required : true,
    },
    tags : {
        type : [String],
        // required : true,
        default : []
    },
    description : {
        type : String,
        required : true,
        
    },
    url : {
        type : String,
        required : true
    }
}, {timestamps : true})

const StartUp = mongoose.model('StartUp', startupSchema)

export default StartUp