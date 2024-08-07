<template>


    <div class="jojo">
        <h2>{{ jojoP.name }}</h2>
        <h2> {{ jojoP.japaneseName }}</h2>
        <p> {{ jojoP.chapter }}</p>
        <p>{{ jojoP.abilities }}</p>
        <p>{{ jojoP.catchphrase }}</p>
        <p>{{ jojoP.nationality }}</p>
        <img :src="jojoP.image" alt="">

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