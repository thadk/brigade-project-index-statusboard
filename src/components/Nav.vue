<template>
    <nav>
        <div class="home">
            <router-link to="/">Brigade Project Index</router-link>
        </div>
        <ul>
            <li>
                <router-link to="/">Map</router-link>
            </li>
            <li>
                <router-link to="/leaders">Brigades</router-link>
            </li>
            <li>
                <router-link to="/topics">Topics</router-link>
            </li>
            <li>
                <router-link to="/topics/covid19">Covid-19 Related Projects</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Nav"
};
</script>

<style>
nav {
    top: 0;
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5rem solid #ae0518;
    background-color: white;
}
nav .home {
    width: fit-content;
    vertical-align: baseline;
    font-size: 1.5rem;
}
nav ul {
    list-style: none;
    display: flex;
    align-items: flex-end;
    margin: unset;
}
nav ul li {
    padding-left: 1rem;
}
</style>