/* eslint-disable */
<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <header>
        <img src="logo.jpg" id="logo">
        <h1>GymBook</h1>
        <div class="header_link">About us</div>
        <div class="header_link">Update reports</div>
        <div class="header_link">FAQ</div>
        <a href="https://github.com/zorjfx/vue_projects" id="repositoryRef">Our repository</a>
    </header>
</template>

<script>
export default {

}
</script> 

<style>
header {
    background-color: black;
    margin: 0%;
    padding: 0%;
    height: 90px;
    width: 100%;
    display: flex;
}

h1 {
    margin: 0%;
    color: red;
    font-family: 'Oswald', sans-serif;
    font-size: 350%;
}



.header_link {
    color: whitesmoke;
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    display: inline-block;
    padding-left: 70px;
    position: relative;
    top: 40px;
    transition: 50ms;
}


#logo {
    height: 90px;
    background-color: black;
    width: 90px;
    padding: 0%;
    margin: 0%;
}

#repositoryRef {
    font-family: 'Oswald', sans-serif;
    padding-top: 50px;
    padding-left: 900px;
    transition: 50ms;
    font-size: 20px;
    color: whitesmoke;

}
</style>