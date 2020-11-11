<template>
    <img :src="getSrc" alt="" :width="size" :height="size" title="Bootstrap">
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'bootstrap'
        },
        size: {
            type: Number,
            default: 32
        }
    },
    computed: {
        getSrc() {
            return '/bootstrap-icons/icons/' + this.name + '.svg';
        }
    }
}
</script>