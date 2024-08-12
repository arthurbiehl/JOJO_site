
<template>

    <ComponentHeader></ComponentHeader>

    <div class="stands_index">
        <div class="container_stands_index">
            <StandsCard></StandsCard>
        </div>
    </div>

</template>

<script setup>

useHead({
  title: 'JOJO site - stands'
});

</script>

<style>
.stands_index {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_stands_index {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>