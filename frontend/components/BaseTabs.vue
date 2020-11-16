<template>
    <ul class="nav nav-tabs">
        <li class="nav-item" v-for="item in tabs" :key="item.id">
            <a class="nav-link" 
                :href="'#' + item.id" 
                :class="{'active': active && item.id === active.id}"
                @click="onClickTab(item)"
                >{{item.name}}</a>
        </li>
        <slot>

        </slot>
        
    </ul>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            default: () => []
        },
        active: {
            type: Object,
            default: () => null
        }
    },
    methods: {
        onClickTab(item) {
            this.$emit('tab-change', item);
        }
    }
}
</script>