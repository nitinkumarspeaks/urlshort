const mongoose = require("mongoose"); // Importing mongoose module to work on mongodb

// defining schema for url table/ collection

 const urlSchema = new mongoose.Schema({
    OriginalURL: {type:String, required: true}, // original url passed by the user
    UniqueId: {type:String, required: true}, // Randon generated unique id 
    ShortURl: {type: String, required: true}, // processed url 
    date: {type: Date, default: Date.now()}, // date 
    visits: {type: Number, default: 0} // count the number of visit on the shortened url

 })

 // using mongoose model method to convert the defined schema into a collection
// this will create a new collection name "URLs" in databse

 const urlCollection = mongoose.model("URL", urlSchema); // caution passting the first argument of model method, node will postfix a 's'
 module.exports = urlCollection; // exporting 