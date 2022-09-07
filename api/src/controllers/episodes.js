const axios = require('axios');
const { Episode } = require('../db');

 

const getEpisodesApi = async () => {
  try {
    const allEpisodes = [];
    let apiUrl = "https://rickandmortyapi.com/api/episode"
    for (let i = 0; i <= 1; i++) {
      let apiData = await axios.get(apiUrl);

      apiData.data.results.forEach(e => {
        return allEpisodes.push({
          id:e.id,
          name: e.name,
        });
      });
      apiUrl = apiData.data.info.next;
    }
///bulkCreate:Crea e inserta varias instancias de forma masiva.
///
    await Episode.bulkCreate(allEpisodes);

    return allEpisodes;

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getEpisodesApi
}
