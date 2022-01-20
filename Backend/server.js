const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();

const corsOptions = {
    origin: "http://localhost:4200"
}

const app = express();

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log("could not connect to the db!", err);
    process.exit();
});

const port = process.env.PORT || 3000;

app.listen(PORT => {
    console.log(`Server running on PORT ${port}`);
})

