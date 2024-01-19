const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    instructor: {
        type: String,
        required: true,
        trim: true,
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },{
        type: Number,
        required:true
    }],
    comments:{
        type:String,
        trim: true   }
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
