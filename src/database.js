const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/smsdb", {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("Database: connected"));