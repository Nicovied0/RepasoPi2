const { Router } = require("express");
const {getAllInfo}= require("../controllers/characters");
const {getEpisodesApi} = require("../controllers/episodes");


const router = Router();

// Configurar los routers

router.get("/characters", async (req, res)=>{
  try {
      res.send(await getAllInfo());
  } catch {
      res.status(400).json('error en get characters');
  }
});

router.get("/episodes", async (req, res)=>{
  try {
      res.send(await getEpisodesApi());
  } catch {
      res.status(400).json('error en get episodes');
  }
});


module.exports = router;
