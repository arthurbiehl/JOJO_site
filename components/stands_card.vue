<template>


    <div class="stands" v-for="item in stands" :key="item">
        <img :src="`https://jojos-bizarre-api.netlify.app/assets/${item.image}`" alt="">
        <a :href="`/stand_page/${item.id}`">{{ item.name }}</a>
    </div>

</template>

<script setup>

const store = useJojo();
const { stands } = storeToRefs(store);

onMounted(() => {
    store.getStands();
});


</script>

<style>
.stands {
    width: 400px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px
}

.stands img {
    width: 350px;
    height: 350px;
    object-fit: contain;
}

.stands a {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #5B2295;
}
</style>
