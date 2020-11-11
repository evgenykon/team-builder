<template>
    <div class="container" v-if="$store.getters.getUser">
        <h2 class="text-center">Компетенции</h2>

        <ul class="nav nav-tabs">
            <li class="nav-item" v-for="item in tags" :key="item.id">
                <a class="nav-link" 
                    :href="'#' + item.id" 
                    :class="{'active': tab && item.id === tab.id}"
                    @click="onClickTab(item)"
                    >{{item.name}}</a>
            </li>
            <button class="btn btn-link py-1 px-2 ml-auto" title="Тэги">
                <base-icon name="three-dots-vertical" :size="18" class="my-0"></base-icon>
            </button>
            <button class="btn btn-link py-1 px-2" title="Добавить компетенцию">
                <base-icon name="plus-circle" :size="18" class="my-0"></base-icon>
            </button>
            
        </ul>

        <div class="row pt-2">
            <div class="col-sm-6" v-for="item in competitions" :key="item.id">
                <div class="card mb-2">
                    <div class="card-body py-1 d-flex flex-row">
                        <div class="content">
                            <h5 class="card-title">{{item.name}}</h5>
                            <p class="card-text">{{item.description}}</p>
                        </div>
                        <div class="btns ml-auto d-flex flex-column">
                            <a href="#" class="btn btn-link p-2 text-right">Сотрудники ({{item.member_count}})</a>
                            <a href="#" class="btn btn-link p-2 text-right">Задачи ({{item.task_count}})</a>
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
            tab: null,
            tags: [
                {id: 1, name: 'UI/UX и дизайн'},
                {id: 2, name: 'Аналитика'},
                {id: 3, name: 'Программирование'},
                {id: 4, name: 'Тестирование'},
                {id: 5, name: 'Администрирование'},
            ],
            competitions: []
        }
    },
    mounted() {
        this.onClickTab(this.tags[0]);
    },
    methods: {
        onClickTab(item) {
            this.tab = item;
            //@todo dispatch
            this.competitions.push({
                id: 1,
                name: 'Express.js',
                description: 'Node.js framework',
                member_count: 1,
                task_count: 15
            });
            this.competitions.push({
                id: 2,
                name: 'Mongo',
                description: 'noSQL database',
                member_count: 2,
                task_count: 7
            });
            this.competitions.push({
                id: 3,
                name: 'Vue.js',
                description: 'frontend framework',
                member_count: 3,
                task_count: 6
            });
            this.competitions.push({
                id: 4,
                name: 'Webpack',
                description: 'frontend bundler',
                member_count: 2,
                task_count: 5
            });
        }
    }
}
</script>