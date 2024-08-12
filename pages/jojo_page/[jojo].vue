<template>
    <componentHeader></componentHeader>

    <div class="jojo">
        <div class="container_jojo">

            <div class="descricao_jojo">
                <h2> {{ jojoP.japaneseName }}</h2>
                <h2>{{ jojoP.name }}</h2>
                <p> Capitulos: {{ jojoP.chapter }}</p>
                <p> Abilidades: {{ jojoP.abilities }}</p>
                <p> Frase de efeito: {{ jojoP.catchphrase }}</p>
                <p> Nacionalidade: {{ jojoP.nationality }}</p>

            </div>

            <img :src="`https://jojos-bizarre-api.netlify.app/assets/${jojoP.image}`" alt="">

        </div>



    </div>

</template>

<script setup>

let route = useRoute();
const rota = route.params.jojo;
const store = useJojo();
const { jojoP } = storeToRefs(store);

onMounted(() => {
    store.getJojoP(rota);
});


</script>

<style>
.jojo {
    width: 100%;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.container_jojo {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_jojo img {
    width: 500px;
    height: 500px;
    object-fit: auto;    
}

.descricao_jojo {
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
}

.descricao_jojo h2 {
    font-size: 35px;
    font-weight: 700;
}

.descricao_jojo p {
    font-size: 16px;
    font-weight: 600;
    margin: 1.5px
}
</style>