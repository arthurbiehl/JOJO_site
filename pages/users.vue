<template>

    <ComponentHeader></ComponentHeader>

    <div class="users">
        <div class="container_users">
            <UsersCard></UsersCard>
        </div>
    </div>

</template>

<script setup>

useHead({
  title: 'JOJO site - usuarios'
});

</script>

<style>
.users {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_users {
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>