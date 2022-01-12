const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 characters"]
    },
    content: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [5, "{PATH} must be at least 5 characters"]
    },
    isImportant: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports.Note = mongoose.model('Note', NoteSchema);