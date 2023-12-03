
import axios from 'axios';

const apiUrl = 'https://nominatim.openstreetmap.org/search?q={str}';

export default {
   buscar(ciudad) {
    const params = {
      q: ciudad,
      format: 'json',
      polygon: 1,
      addressdetails: 1,
    };

    return axios.get(apiUrl, { params })
      .then(response => response.data)
      
  },
};
