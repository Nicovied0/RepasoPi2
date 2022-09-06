const { Router } = require("express");
const {getCharacters, getEpisodes, getId}= require("../controllers/index");


const router = Router();

// Configurar los routers

router.get("/characters", async (req, res)=>{
  try {
      res.send(await getCharacters());
  } catch {
      res.status(400).json('error en get characters');
  }
});


module.exports = router;
