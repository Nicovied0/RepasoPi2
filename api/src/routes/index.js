const { Router } = require("express");
const fetch = require('node-fetch');

const router = Router();

// Configurar los routers

router.get('/characters', async (req, res) => {
  try {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        const infoApi = data.results.map(e => {
          return {
            id: e.id,
            name: e.name
          }
    
        })
        res.status(200).send(infoApi)
      });
    

  } catch {
    console.log('error')
  }


})

module.exports = router;
