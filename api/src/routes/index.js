const { Router } = require("express");
const { getAllInfo } = require("../controllers/characters");
const { getEpisodesApi } = require("../controllers/episodes");
const { characterPost } = require('../controllers/characterPost')


const router = Router();

// Configurar los routers

router.get("/characters", async (req, res) => {
  try {
    res.status(200).send(await getAllInfo());
  } catch {
    res.status(400).send('error en get characters');
  }
});

router.get("/episodes", async (req, res) => {
  try {
    res.send(await getEpisodesApi());
  } catch {
    res.status(400).send('error en get episodes');
  }
});
router.post('character', async (req, res) => {
  try {
    res.stauts(200).send(characterPost())
  } catch {
    res.status(404).send('error en post character')
  }
})

module.exports = router;
