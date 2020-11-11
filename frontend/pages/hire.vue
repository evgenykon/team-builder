<template>
    <div class="container" v-if="$store.getters.getUser">
        <h2 class="text-center">Вакансии</h2>

        <div class="row pt-2">
            <div class="col-sm-6" v-for="item in vacancy" :key="item.id">
                <div class="card mb-2 d-flex flex-row">
                    <div class="card-icon d-flex align-items-center p-2">
                        <base-icon :name="item.icon"></base-icon>
                    </div>
                    <div class="card-body">
                        <div class="content">
                            <h5 class="card-title">{{item.name}}</h5>
                            <p class="card-text">{{item.description}}</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center p-2">
                        <div class="location">
                            <base-icon :size="16" name="map" class="mr-1"></base-icon>
                            {{item.location}}
                        </div>
                        <div class="time">
                            <base-icon :size="16" name="clock" class="mr-1"></base-icon>
                            {{item.time}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import BaseIcon from '../components/BaseIcon.vue';
export default {
    components: {
        BaseIcon
    },
    data() {
        return {
            vacancy: [
                {
                    id: 1,
                    icon: 'journal-code',
                    name: 'Web Developer',
                    description: 'Full stack developer',
                    location: 'office (Moscow)',
                    time: 'fulltime'
                }
            ]
        }
    },
    head() {
        return {
            title: 'Вакансии'
        }
    }
}
</script>