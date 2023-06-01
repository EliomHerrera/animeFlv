<script>
export default {
    components: {
    },
    props: { result: Array },
    data: () => ({
    }),
    methods: {
    },
    mounted() {
    },

}
</script>

<template>
    <div>

        <h1 class="text-center my-5">Lista Completa de Animes</h1>
        <ul class="d-flex flex-wrap d-flex justify-content-star">
            <li class="m-1" v-for="result, index in result" :key="result" style="width: 190px;">
                <a class="row  my-2" :href=result.link>
                    <span class="w-75">
                        <img class="imgLista" :src=result.img width="180" height="280">
                    </span>
                    <strong class="my-2">{{ result.title.slice(0, 40) }} ...</strong>
                </a>
            </li>
        </ul>

    </div>
</template>

<style></style>