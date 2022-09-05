const { Router } = require("express");
const fetch = require('node-fetch');
const axios = require('axios')

const router = Router();

// Configurar los routers

// router.get('/characters', (req, res) => {
//   try {
//     fetch('https://rickandmortyapi.com/api/character')
//       .then(response => response.json())
//       .then(data => {
//         const infoApi = data.results.map(e => {
//           return {
//             id: e.id,
//             name: e.name,
//             species: e.species,
//             origin: e.origin.name,
//             image: e.image,
//           }
//         })
//         res.status(200).send(infoApi)
//       });
//   } catch {
//     console.log('error')
//   }
// })

router.get('/characters', async (req, res) => {
  const getApi = await axios('https://rickandmortyapi.com/api/character')
  const characterApi = getApi.data.results.map(e => {
    return {
      id: e.id,
      name: e.name,
      species: e.species,
      origin: e.origin.name,
      image: e.image,
    }
  })
  console.log(getApi.data.results)
  res.send(characterApi)
})

module.exports = router;
