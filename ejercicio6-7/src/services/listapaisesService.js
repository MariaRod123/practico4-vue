
import axios from 'axios';

const apiUrl = 'https://restcountries.com/v3.1/all';

export default {
    obtenerCoordenadasPaises() {
        return axios.get(apiUrl)
      .then(response => {
        return response.data.map(country => ({
          pais: country.name.common,
          latitud: country.latlng[0],
          longitud: country.latlng[1],
        }));
      })
      .catch(error => {
        console.error('Error al obtener las coordenadas de los países:', error);
        throw error;
      });
  },
};
      
