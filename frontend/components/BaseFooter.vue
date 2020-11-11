<template>
    <footer class="footer mt-5">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <NuxtLink to="/" class="navbar-brand">
                    <base-icon :size="30" name="x-diamond" class="d-inline-block align-top"></base-icon>
                    Team Builder
                </NuxtLink>
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
import BaseIcon from './BaseIcon.vue';
export default {
    components: {
        BaseIcon
    },
    props: {

    }
}
</script>

<style lang="scss">
footer {
    width: 100%;
}
</style>