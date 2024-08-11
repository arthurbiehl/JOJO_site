<template>
    <div class="jojo" v-for="item in jojo" :key="item">
        <img :src="`https://jojos-bizarre-api.netlify.app/assets/${item.image}`" alt="">
        <a :href="`/jojo_page/${item.id}`">{{ item.name }}</a>
    </div>
</template>

<script setup>
const store = useJojo();
const { jojo } = storeToRefs(store);

onMounted(() => {
    store.getJojo();
});
</script>

<style>
.jojo {
    width: 400px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px
}

.jojo img {
    width: 350px;
    height: 350px;
    object-fit: contain;
}

.jojo a {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #5B2295;
}
</style>
