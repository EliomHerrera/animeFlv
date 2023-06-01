

<script>
import axios from 'axios';
import busqueda from './components/busqueda.vue'

export default {
  components: {
    busqueda
  },
  data: () => ({
    lista: [], palabraBuscar: '', activo: 1, result: [], nombre: 'enyer'
  }),
  methods: {
    fnBuscar() {
      this.activo = 2 // buscar


      axios.get('http://localhost:3000/lista').then(res => {
        this.lista = []
        for (let i of res.data) {
          for (let j of i.lista) {
            this.lista.push(j)
          }
        }

        this.result = []
        console.log(this.palabraBuscar)
        for (var i = 0; i < this.lista.length; i++) {
          if (this.lista[i].title.toLowerCase().includes(this.palabraBuscar)) {
            this.result.push(this.lista[i])
          }
        }
        console.log(this.result)
      })
    },
    inicio() {
      this.activo = 1 // inicio
      // console.log(this.activo)
    },
  },

}

</script>

<template>
  <header class="p-3 bg-dark text-white py-5 d-flex justify-content-between">

    <a href="/" class="ms-5">
      <img src="./assets/logo.png" alt="AnimeFLV">
    </a>

    <ul class="d-flex align-items-center me-5">

      <RouterLink @click="inicio()" active-class="text-primary" class="me-3" to="/">
        <h4>Inicio</h4>
      </RouterLink>

      <RouterLink @click="inicio()" active-class="text-primary" class="me-3" to="directorio">
        <h4>Directorio Anime</h4>
      </RouterLink>

      <input type="text" v-model="palabraBuscar" @keyup.enter="fnBuscar()" autocomplete="off" placeholder="Buscar...">
    </ul>
  </header>

  <div v-show="activo == 2">
    <busqueda :result="result" nombre="Enyer" />
  </div>

  <RouterView v-show="activo == 1" />

  <div class="p-5 my-5 bg-dark text-white ">
    <p>
      <span>Anime Online</span> - Ningún vídeo se encuentra alojado en nuestros servidores.
    </p>
    <nav>
      <a class="me-4" href="/condiciones-de-uso.html">Términos y Condiciones</a>
      <a class="me-4" href="/politica-de-privacidad.html">Política de Privacidad</a>
      <a href="/sobre-animeflv.html">Sobre AnimeFLV</a>
    </nav>
  </div>
</template>

