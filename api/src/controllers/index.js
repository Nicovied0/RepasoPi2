const express = require ('express')
const axios = require('axios');
// const fetch = require('node-fetch');
const { Character, Episode } = require('../db')




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
const getCharacters = async () => {
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
  return characterApi

}




module.exports={
  getCharacters,
  // getEpisodes,
  // getId
}