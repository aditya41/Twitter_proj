const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Int32 } = require('mongodb')

const CommentSchema = new mongoose.Schema({
    email:{
        required:true,
        type:String,
        trim:true
    },
    body:{
        required:true,
        type:String,
        trim:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const PostSchema = new mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique:false,
        trim:true
    },
    body:{
        required:true,
        type:String,
        trim:true
    },
    totalLikes:{
        type:Number
    },
    comments:{
        type: [CommentSchema]
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post