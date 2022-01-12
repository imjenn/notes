const { Note } = require('../models/note.model');

module.exports = {
    
    // Create
    create: (req, res) => {
        Note.create(req.body)
            .then(note => res.json(note))
            .catch(err => res.status(400).json(err))
    },

    // Read all
    findAll: (req, res) => {
        Note.find()
            .then(notes => res.json(notes))
            .catch(err => res.json(err))
    },

    // Read one
    findOne: (req, res) => {
        Note.findById(req.params.id)
            .then(note => res.json(note))
            .catch(err => res.json(err))
    },

    // Update
    update: (req, res) => {
        Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedNote => res.json(updatedNote))
        .catch(err => res.status(400).json(err))
    },

    // Delete
    delete: (req, res) => {
        Note.findByIdAndDelete(req.params.id)
            .then( result => res.json({ result: result }))
            .catch( err => console.log(err))
    }
}