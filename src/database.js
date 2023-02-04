import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/flitterdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))

  