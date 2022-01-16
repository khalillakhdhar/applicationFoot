module.exports = (app) => {
    const App = require("../controller/joueur.controller.js");
  
    app.post("/joueur", App.add);
  
    app.get("/joueur", App.affiche);
  
    app.get("/joueur/:playerId", App.findOne);
  
    app.put("/joueur/:playerId", App.update);
  
    app.delete("/joueur/:playerId", App.delete);
  };