const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json())

require("./src/config/db");

const router = require("./src/routes/employee");
app.use('/api',router)

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Server up and running on port ${PORT}`)
})