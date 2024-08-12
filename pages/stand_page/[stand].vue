<template>

    <componentHeader></componentHeader>

    <div class="stand">
        <div class="container_stand">

            <div class="descricao_stand">
                <h2>{{ stand.name }}</h2>
                <h2> {{ stand.japaneseName }}</h2>
                <p>Capitulos: {{ stand.chapter }}</p>
                <p>Abilidades: {{ stand.abilities }}</p>
            </div>

            <img :src="`https://jojos-bizarre-api.netlify.app/assets/${stand.image}`" alt="">

        </div>

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

<style>
.stand {
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container_stand {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_stand img {
    width: 500px;
    height: 500px;
    object-fit: auto;
}

.descricao_stand {
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
}

.descricao_stand h2 {
    font-size: 35px;
    font-weight: 700;
}

.descricao_stand p {
    font-size: 16px;
    font-weight: 600;
    margin: 1.5px
}
</style>