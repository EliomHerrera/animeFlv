<script>
import axios from 'axios';

export default {
    components: {
    },
    data: () => ({
        emision: [], episodio: [], estreno: [],
    }),
    methods: {
        getAll() {
            axios.get('http://localhost:3000/todo').then(res => {
                this.emision = res.data[0].emision
                this.episodio = res.data[0].episodio
                this.estreno = res.data[0].estreno
            })
        },

    },
    mounted() {
        this.getAll()
    }
}
</script>

<template>
    <div>
        <div class="d-flex row ">
            <div class="p-3 mx-2 bg-light text-dark col-4">
                <h3 class="my-5">Animes En Emision</h3>
                <ul>
                    <li class="my-2" v-for="emision, index in emision" :key="emision">
                        <a :href=emision.link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                            </svg>
                            {{ emision.title.slice(-35, -6) }}...
                            <span class="imgAnime">Anime</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col p-3 mb-2 ">
                <div>
                    <h3 class="my-5">Ultimos Episodios</h3>
                    <ul class="d-flex flex-wrap d-flex justify-content-star">
                        <li class="w-25" v-for="episodio, index in episodio" :key="episodio">
                            <a class="row w-100 my-2" :href=episodio.link>
                                <span>
                                    <img class="imgEpisodio" :src=episodio.img width="180" height="140">
                                </span>
                                <span class="text-danger"><strong>{{ episodio.capi }}</strong></span>
                                <strong>{{ episodio.title.slice(0, 35) }} ...</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 class="my-5">Ultimos Animes Agregados</h3>
                    <ul class="d-flex flex-wrap d-flex justify-content-star">
                        <li class="w-25" v-for="estreno, index in estreno" :key="estreno">
                            <a class="row w-100 my-2" :href=estreno.link>
                                <span>
                                    <img class="imgEstreno" :src=estreno.img width="180" height="280">
                                </span>
                                <h6>{{ estreno.title.slice(0, 35) }} ...</h6>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
li {
    list-style: none;
}

a {
    text-decoration: none;
}

img {
    border-radius: 10%;
}

.imgEpisodio:hover {
    width: 170px;
    height: 130px;
    border: solid 5px rgb(61, 61, 61);
    transition: .5s;
}

.imgEstreno:hover {
    width: 170px;
    height: 270px;
    border: solid 5px rgb(63, 63, 63);
}

.imgAnime {
    font-family: open sans, sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    font-size: 10px;
    font-weight: 700;
    line-height: 16px;
    width: 60px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    display: inline-block;
    height: 16px;
    border-radius: 8px;
    opacity: .5;
    transition: all .2s;
    margin-left: 10px;
    right: 16px;
    background-color: #01bcf3;
    border-color: #01bcf3;
}
</style>