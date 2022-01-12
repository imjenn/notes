const Note = require("../controllers/note.controller");

module.exports = (app) => {
    // Create
    app.post('/api/new', Note.create)
    // Read all
    app.get('/api/notes', Note.findAll)
    // Read one
    app.get('/api/note/:id', Note.findOne)
    // Update
    app.put('/api/update/:id', Note.update)
    // Delete
    app.delete('/api/delete/:id', Note.delete)
}