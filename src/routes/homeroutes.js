const express = require("express"); // importing express module
const app = express();
const Router = express.Router(); // creating Router
const {nanoid} = require("nanoid");
//var ID = nanoid();
const urlCollection = require("../models/urlschema")


Router.get("/:uniqueId",async (req,res)=>{
   try {
    const retrivedUniqueid = req.params.uniqueId;
   
    const retrivedUrlData = await  urlCollection.findOne({UniqueId:retrivedUniqueid});
      //console.log(retrivedUrlData)
      //res.json(retrivedUrlData)
      if(!!retrivedUrlData){
        res.redirect("http://"+retrivedUrlData.OriginalURL)

      } else{
        res.status(404).send("invalid url")
      }

   } catch (error) {
      console.log(error);
      
   }
   
})




module.exports = Router;