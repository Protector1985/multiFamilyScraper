const express = require("express");

const rentals = require("./lib/rentals")

const app = express();

app.listen(5000, () => {
    console.log("server running on 5000")
});



rentals();