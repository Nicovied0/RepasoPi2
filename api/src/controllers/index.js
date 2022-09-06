const express = require('express')
const axios = require('axios');
// const fetch = require('node-fetch');
const { Character, Episode } = require('../db')



//GET 20 PJS WITH FETCH
// const getCharacters = async ()=> {
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

//GET 20 PJS WITH AXIOS
// const getCharacters = async () => {
//   const getApi = await axios('https://rickandmortyapi.com/api/character')
//   const characterApi = getApi.data.results.map(e => {
//     return {
//       id: e.id,
//       name: e.name,
//       species: e.species,
//       origin: e.origin.name,
//       image: e.image,
//     }
//   })
//   return characterApi

// }

const getCharacters = async () => {
  try {
    const charactersApi = [];
    let apiUrl = 'https://rickandmortyapi.com/api/character';
    for (let i = 0; i <= 2; i++) {
      let apiInfo = await axios(apiUrl)

     apiInfo.data.results.forEach(e => {
        return charactersApi.push({
          id: e.id,
          name: e.name,
          species: e.species,
          origin: e.origin.name,
          image: e.image,

        })
      })
      console.log(charactersApi)
      apiUrl = apiInfo.data.info.next
      
    }
    return charactersApi

   
  } catch {
    console.log("error")
  }

}




module.exports = {
  getCharacters,
  // getEpisodes,
  // getId
}