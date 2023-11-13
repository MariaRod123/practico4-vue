<template>
  <div class="container" id="app">
    <h2>Lista de Productos</h2>
    <input type="text" v-model="nombreProducto" id="nombreProducto" placeholder="Agregar producto">
    <button id="boton_agregar" @click="agregarProducto">Agregar</button>
    <p v-if="mensajeAdvertencia" class="mensaje-advertencia">{{ mensajeAdvertencia }}</p>
    <ul id="listaProductos">
      <li v-for="(producto, index) in productos" :key="index">
        {{ producto.nombre }}
        <button @click="editarProducto(index)" class="btn btn-info">Editar</button>
        <button @click="eliminarProducto(index)" class="btn btn-danger">Eliminar</button>
      </li>
    </ul> 
       
</div>
  </template>
  
  <script>
  export default {
    name: 'ListaProductos',
    data() {
    return {
      nombreProducto: '',
      productos: [],
      productoEditando: null,
      mensajeAdvertencia: ''
    };
  },
  methods: {
    agregarProducto() {
      if (this.nombreProducto.trim() === '') {
        alert('Por favor, ingresa un nombre de producto.');
      } else {
        const productoExistente = this.productos.find(p => p.nombre === this.nombreProducto);
        if (productoExistente) {
          alert('El producto ingresado ya existe.');
        } else {
          if (this.productoEditando !== null) {
            // Editar producto existente
            this.productos[this.productoEditando].nombre = this.nombreProducto;
            this.productoEditando = null;
          } else {
            // Agregar nuevo producto
            this.productos.push({ nombre: this.nombreProducto });
          }

          // Limpiar el campo después de agregar o editar
          this.nombreProducto = '';
          
        }
      }
    },

      
    editarProducto(index) {
      // Inicia la edición del producto
      this.productoEditando = index;
      this.nombreProducto = this.productos[index].nombre;
    },
    eliminarProducto(index) {
      // Confirma antes de eliminar
      const confirmar = window.confirm('¡Atención! está por eliminar un producto, ¿Quieres eliminarlo?');
      if (confirmar) {
        // Eliminar producto
        this.productos.splice(index, 1);
        // Limpiar el campo después de eliminar
        this.nombreProducto = '';
        this.productoEditando = null;
      }
  },
},
};

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container {
    text-align: center;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 5px;
    background-color: rgb(187, 185, 185);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    color: rgb(51, 51, 51);
    font-size: 24px;
}

#nombreProducto{
    width: 300px;
    height: 29px;
    border-radius: 5px;
    border:none;
    font-family:'Courier New', Courier, monospace;
    font-size: medium;



}
#boton_agregar{
    cursor:pointer;
    background-color: rgb(36, 83, 36);
    color:aliceblue;
    font-family:'Courier New', Courier, monospace;
    font-size:medium;
    font-weight: bold;
    width: 120px;
    height: 35px;
    border-radius: 5px;
    border:none;
}

#boton_agregar:hover{
    background-color:rgb(2, 66, 2) ;
    
}

#listaProductos {
    list-style: none;
    padding: 0;
}

#listaProductos li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid rgb(221, 221, 221);
    background-color:aliceblue;
}
 
  </style>
  