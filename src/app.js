const dotenv = require("dotenv"); // importing dotenv NPM package to use environmental variables
dotenv.config();
const express = require("express"); // importinh express framework
const app = express();
const hbs = require("hbs"); // importing view engine "hbs"
const PORT = process.env.PORT || 9000; //Establisting port value

// importing all the local modules
require("./config/dbConnection"); // importing datavase connection module
 
const apiRouter = require("./routes/apiRoutes");
const homeRouter = require("./routes/homeroutes")

// View Engine configuration
app.set("view engine","hbs"); //  decalaring the type of view engine being used
app.set("views", "src/templates/views"); // the root folder of view engine

//middleware
//app.use(express.static(path.join(__dirname,"../public")))
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use("/",homeRouter);
app.use("/api",apiRouter);
//app.use(express.static())

app.listen(PORT, ()=>{
    console.log(`Listening to the port:${PORT}`);
})