const express = require("express"); // importing express module
const app = express();
const Router = express.Router(); // creating Router
const {nanoid} = require("nanoid");
//var ID = nanoid();
const urlCollection = require("../models/urlschema")

Router.get("/",(req,res)=>{
   try {
      
   res.status(404).json("Page Not found");
   
      
   } catch (error) {
      console.log(error);
      
   }
   
})
Router.get("/short",(req,res)=>{
   try {
      // res.status(200).json("this is short page")
   res.render("api/short");
   //const uniqueId = nanoid();
      //console.log(uniqueId)
      
   } catch (error) {
      console.log(error);
      
   }
   
})

Router.post("/short",async (req, res)=>{
   try {
      const oUrlExist = await urlCollection.findOne({OriginalURL:req.body.OU})
      console.log(oUrlExist)
      if(!oUrlExist){
         const originalURL = req.body.OU;
         const baseURL ="http://localhost:9000";
         const uniqueId = nanoid();
         const processedShortURL = baseURL+"/"+uniqueId
        
        const urlData = urlCollection({
         OriginalURL: originalURL,
         UniqueId: uniqueId,
         ShortURl: processedShortURL
        })
        await urlData.save();
        res.send(processedShortURL)

      }
      else {
         res.status(200).send(oUrlExist.ShortURl)
      }
 
      
   } catch (error) {
      res.status(200).json(error)
   }
   
})

Router.get("/*",(req,res)=>{
   try {
      
   res.status(404).json("Page Not found");
   
      
   } catch (error) {
      console.log(error);
      
   }
   
})



module.exports = Router;