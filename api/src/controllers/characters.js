const axios = require('axios');
//const fetch = require('node-fetch');
const { Character, Episode } = require('../db')



// GET 20 PJS WITH FETCH
// const getCharacters = async () => {
//   try {
//     let info = fetch('https://rickandmortyapi.com/api/character')
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
//         return infoApi
//       });
//     return info
//   } catch {
//     console.log('error')
//   }
// })

//   GET 20 PJS WITH AXIOS
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

//GET X WITH FETCH (BROKEN)
// const getCharacters = async () => {
//   try {
//     let info = fetch('https://rickandmortyapi.com/api/character')
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
//         return infoApi
//       });
//     return info
//   } catch {
//     console.log('error')
//   }
// }


// GET X PJS WHIT AXIOS
const getCharacters = async () => {
  try {
    const charactersApi = [];
    let apiUrl = 'https://rickandmortyapi.com/api/character';
    for (let i = 0; i < 2; i++) {
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
      apiUrl = apiInfo.data.info.next
    }
    return charactersApi
  } catch {
    console.log("error en get api")
  }
}
const getDbCharacter = async () => {
  return await Character.findAll({
    include: {
      model: Episode
    }
  });
}

const getAllInfo = async () => {
  try {
    const dbInfo = await getDbCharacter();
    const apiInfo = await getCharacters();

    const InfoTotal = dbInfo?.concat(apiInfo);
    return InfoTotal;
  } catch {
    console.log('Error al hacer el llamdo a all Info')
  }
}






module.exports = {
  getAllInfo
}