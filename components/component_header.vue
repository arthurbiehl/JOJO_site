<template>

    <div class="header">
        <div class="container_header">
            <a href="/"><img src="../static/logo.png" alt=""></a>
            <div class="links_header">
                <a href="/users">USUARIOS</a>
                <a href="/stand">STANDS</a>
            </div>
        </div>
    </div>

</template>

<style>
.header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5B2295;
}

.container_header {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container_header img {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.links_header {
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.links_header a {
    color: white;
}
</style>