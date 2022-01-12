const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const db = "notes";

// Middleware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }))

// Database connection link to file
require('./config/mongoose.config')(db);

// Routes
require('./routes/note.routes')(app);

// Start server
app.listen(port, () => console.log(` Listening on port: ${port} :) `))