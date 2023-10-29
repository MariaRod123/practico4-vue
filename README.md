# Práctico 4 Vue/Vue Router

Parte 1 Instancia Vue

1- Crear una app que en tiempo de ejecución despliegue: “Hola Mundo!” dentro de una etiqueta “p”
  
2- Crear una app que registre productos en una lista a través de un “v-model” y un evento “v-on:click” el resultado esperado es el siguiente:

	* Manzana

	* Banana

	* Pera

3- Con el ejercicio anterior tener la posibilidad de editar el item y/o eliminar de la lista.

4- Crear una app que liste todos los países del mundo en una lista ul, li utilizando una open API: https://restcountries.eu/rest/v2/all a través de un botón “Obtener países” con un evento “@click”

  a- Integrar con un servicio axios
  
5-Implementar una interface para buscar países por su nombre, luego de escribir el nombre del país dar click en “buscar”

  a- Utilizar “v-model” para capturar los datos
  
  b- Utilizar evento “@click” y llamar al servicio siguiente: https://restcountries.eu/rest/v2/name/{name}
  
6- Crear un buscador para obtener las coordenadas según el texto de una dirección: “Dirección, ciudad, país”

  a- Utilizar la API: https://nominatim.openstreetmap.org/search?q={str}&format=json&polygon=1&addressdetails=1
  
  b- Desplegar ciudad y coordenadas en una tabla usando la directiva “v-for”

7- Al correr una aplicación en vue, listar todos los países como en el ejercicio 4. Utilizar la función “mounted” (ver documentación)
