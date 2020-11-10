<template>
    <div class="container" v-if="$store.getters.getUser">
        <the-section-events></the-section-events>
    </div>
</template>

<script>
import TheSectionEvents from '../components/sections/TheSectionEvents.vue';
export default {
    components: {
        TheSectionEvents
    },
    data() {
      return {
        title: 'Team Builder'
      }
    },
    head() {
        return {
            title: this.title
        }
    }
}
</script>