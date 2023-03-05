const mongoose =require("mongoose"); // Importing Mongoose Package

    // Initialising database connection
mongoose.connect("mongodb://127.0.0.1:27017/urlDB",{
    useUnifiedTopology: true,
    useNewUrlParser: true
   
}); 

// storing connection promise` in a variable
const db = mongoose.connection; 

// when promise variable returns negative
db.on("failed",()=>{
    console.log("Connection to databse could not be establisted"); 
})
// when promise variable returns negative
db.once("connected",()=>{
    console.log("Connection to databse  establisted"); 
})