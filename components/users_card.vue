<template>


    <div class="jojo" v-for="item in jojo" :key="item">
        <img :src="item.image" alt="">
        <h2>{{ item.name }}</h2>
        <a :href="`/jojo_page/${item.id}`">clicar</a>

    </div>

</template>

<script setup>

const store = useJojo();
const { jojo } = storeToRefs(store);

onMounted(() => {
    store.getJojo();
});


</script>