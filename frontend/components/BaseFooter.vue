<template>
    <footer class="footer position-sticky">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <NuxtLink to="/" class="navbar-brand">Team Builder</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/about" class="nav-link">О проекте</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/contact" class="nav-link">Контакты</NuxtLink>
            </li>
            
        </ul>
    </footer>
</template>

<script>
export default {
    props: {

    }
}
</script>

<style lang="scss">
footer {
    width: 100%;
}
</style>