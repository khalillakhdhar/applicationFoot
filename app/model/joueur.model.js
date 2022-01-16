const mongoose=require("mongoose");
const JoueurSchema=mongoose.Schema(
    {
        nom:String,
        prenom:String,
        age:Number,
        categorie:String
    }
);
module.exports=mongoose.model("joueur",JoueurSchema);