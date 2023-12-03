
<template>
    <div id="app">
      <input v-model="searchText" placeholder="Dirección, ciudad, país">
      <button @click="buscarCoordenadas" class="btn btn-primary">Buscar</button>

    <table v-if="resultados.length > 0" class="table table-striped mt-3">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Latitud</th>
          <th>Longitud</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="resultado in resultados" :key="resultado.place_id">
          <td>{{ resultado.display_name }}</td>
          <td>{{ resultado.lat }}</td>
          <td>{{ resultado.lon }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else class="alert alert-info mt-3" role="alert">
      No se encontró ningún resultado para la búsqueda.
    </div>
      

  </div>
</template>


  <script>

  import buscadorService from '@/services/buscadorService';
  
  export default {
    data() {
      return {
        searchText: '',
        resultados: [],
      };
    },
    methods: {
      buscarCoordenadas() {
        buscadorService.buscar(this.searchText)
          .then(resultados => {
            this.resultados = resultados;
          })
          .catch(error => {
            console.error('Error al buscar coordenadas:', error);
          });
      },
    },
  };
  </script>

 <!-- <style scoped>


</style>-->