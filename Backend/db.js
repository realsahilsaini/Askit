//Database connection 

const mongoose = require('mongoose')

const url  = "mongodb+srv://test:9GSnPmDkympy0UOE@cluster0.spdkgen.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose
      .connect(url, {
        //for avoiding unexpected
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };