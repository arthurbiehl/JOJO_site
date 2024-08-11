<template>


    <div class="stand">
        <h2>{{ stand.name }}</h2>
        <h2> {{ stand.japaneseName }}</h2>
        <p> {{ stand.chapter }}</p>
        <p>{{ stand.abilities }}</p>
        <p>{{ stand.catchphrase }}</p>
        <p>{{ stand.nationality }}</p>
        <img :src="`https://jojos-bizarre-api.netlify.app/assets/${stand.image}`" alt="">

        <img :src="stand.image" alt="">

    </div>

</template>

<script setup>

let route = useRoute();
const rota = route.params.stand;
const store = useJojo();
const { stand } = storeToRefs(store);

onMounted(() => {
    store.getStand(rota);
});


</script>