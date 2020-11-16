<template>
    <div class="row pt-2">
        <div class="col-sm-6" v-for="item in tiles" :key="item.id">
            <div class="card mb-3">
                <div class="card-body d-flex flex-row p-0">
                    <slot v-bind:tile="item"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tiles: {
            type: Array,
            default: () => []
        }
    }
}
</script>