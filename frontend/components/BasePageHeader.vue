<template>
    <nav class="header-navbar navbar navbar-light bg-light m-0">
        <div class="left side">{{companyName}}</div>
        <NuxtLink to="/" class="navbar-brand header-text">
            Team Builder
        </NuxtLink>
        <div class="right side">{{userName}}</div>
    </nav>
</template>

<script>
export default {
    components: {
    },
    props: {
        companyName: {
            type: String,
            default: 'CompanyName'
        },
        userName: {
            type: String,
            default: 'UserName'
        }
    }
}
</script>

<style lang="scss">
.header-navbar {
    .navbar-brand.header-text {
        font-size: 40px;
        font-weight: 300;
    }
    .side {
        font-weight: 300;
    }
}
</style>