<script>
import axios from 'axios';

export default {
  components: {
  },
  data: () => ({
    lista: [], ruta: "lista/", cRuta: [], oneNumber: 0,
  }),
  methods: {
    getAll() {
      axios.get('http://localhost:3000/lista').then(res => {
        // console.log(res.data[0].lista)
        this.cRuta = res.data
        this.lista = res.data[this.oneNumber].lista
      })
    },
    fnCambioRuta(index) {
      console.log(index)
      this.oneNumber = index
      this.getAll()
    },
  },
  mounted() {
    this.getAll()
  },

}
</script>

<template>
  <div>
    <h1 class="text-center my-5">Lista Completa de Animes</h1>
    <ul class="d-flex flex-wrap d-flex justify-content-center">
      <li class="m-1" v-for="lista, index in lista" :key="lista" style="width: 190px;">
        <a class="row  my-2" :href=lista.link>
          <span class="w-75">
            <img class="imgLista" :src=lista.img width="180" height="280">
          </span>
          <strong class="my-2">{{ lista.title.slice(0, 40) }} ...</strong>
        </a>
      </li>
    </ul>
    <div>
      <ul class=" d-flex justify-content-center">
        <li v-for="cantidad, index in cRuta" :key="cantidad">
          <button class="btn btn-primary me-2" @click="fnCambioRuta(index)">{{ index + 1 }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 10%;

}

.imgLista:hover {
  width: 170px;
  height: 270px;
  border: solid 5px rgb(63, 63, 63);
}
</style>
