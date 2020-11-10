<template>
    <div class="header-menu container mb-5">
        <ul class="nav d-flex justify-content-center">
            <li class="nav-item" v-for="item in items" :key="item.name">
                <NuxtLink 
                    :to="item.target" 
                    class="nav-link" 
                    :class="{'disabled': item.isDisabled}">
                        {{item.name}}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [
                {
                    target: '#', name: 'Профиль'
                }
            ]
        },
        current: {
            type: Object,
            default: () => {
                return {
                    name: 'index',
                    path: '/'
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header-menu {
    .nav-link {
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>