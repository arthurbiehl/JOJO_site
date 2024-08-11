<template>


    <div class="stands" v-for="item in stands" :key="item">
        <img :src="`https://jojos-bizarre-api.netlify.app/assets/${item.image}`" alt="">
        <h2>{{ item.name }}</h2>
        <a :href="`/stand_page/${item.id}`">clicar</a>

    </div>

</template>

<script setup>

const store = useJojo();
const { stands } = storeToRefs(store);

onMounted(() => {
    store.getStands();
});


</script>