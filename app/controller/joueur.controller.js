const player=require("../model/joueur.model.js");
exports.add=(req,res)=>{
const joueur=new player(
    {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        categorie: req.body.categorie

    }
);
joueur.save().then(
  ()=>{res.send("joueur ajouté")}
);
}
exports.affiche=(res,req)=>{
    player.find()
    .then((data) => {
      res.send(data);
    })
};

// Find a single message with a messageId
exports.findOne = (req, res) => {
    player.findById(req.params.playerId)
      .then((data) => {
     
        res.send(data);
      })
     
  };
  
  // Update a message identified by the messageId in the request
  exports.update = (req, res) => {
    player.findByIdAndUpdate(
      req.params.playerId,
      {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        categorie: req.body.categorie
      },
      { new: true }
    )
      .then((data) => {
        
        res.send(data);
      })
     
  };
  
  // Delete a message with the specified messageId in the request
  exports.delete = (req, res) => {
    player.findByIdAndRemove(req.params.playerId)
      .then((data) => {
      
        res.send({ message: "Message deleted successfully!" });
      })
   
  };

