<template>
    <div id="app">
   
      <table class="table table-striped mt-3">
        <thead>
          <tr>
            <th>País</th>
            <th>Latitud</th>
            <th>Longitud</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pais in paises" :key="pais.pais">
            <td>{{ pais.pais }}</td>
            <td>{{ pais.latitud }}</td>
            <td>{{ pais.longitud }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import listapaisesService from '@/services/listapaisesService';
  
  export default {
    data() {
      return {
        paises: [],
      };
    },
    mounted() {
      this.obtenerCoordenadasPaises();
    },
    methods: {
      obtenerCoordenadasPaises() {
        listapaisesService.obtenerCoordenadasPaises()
          .then(paises => {
            this.paises = paises;
          })
          .catch(error => {
            console.error('Error al obtener las coordenadas de los países:', error);
          });
      },
    },
  };
  </script>