const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors());

// Import the config file and route file
require("./server/config/belt.config");
require("./server/routes/pet.route")(app);

// Add ${} to the port at the end
app.listen(port, () => console.log(`Listening on port: ${port}`) );