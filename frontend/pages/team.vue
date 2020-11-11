<template>
    <div class="container" v-if="$store.getters.getUser">
        <article>
            <h2 class="text-center">Feature Teams</h2>
            <p class="text-center">участвующие в разработке в данный момент</p>
        
            <ul class="list-group">
                <li class="list-group-item d-flex" v-for="item in featureTeams" v-bind:key="item.id">
                    <div class="icon-column d-flex flex-column">
                        <base-icon :size="42" :name="item.icon" class="d-inline-block align-top"></base-icon>
                    </div>
                    <div class="item-content d-flex flex-column justify-content-center">
                        <h4>{{item.name}}</h4>
                        <p class="mb-1">{{item.task}}</p>
                        <p class="mb-1 members-label">{{item.members}} участников</p>
                        <p class="mb-0 sprint-label">{{item.sprint}} спринт</p>
                    </div>
                    <div class="link">
                        <button type="button" class="btn btn-outline-secondary">Подробнее</button>
                    </div>
                </li>
            </ul>

            <nav class="nav mt-3">
                <button type="button" class="btn btn-primary">Создать Feature Team</button>
                <button type="button" class="btn btn-primary ml-2">График спринтов</button>
            </nav>
        </article>

        <article class="mt-5">
            <h2 class="text-center">Постоянные команды</h2>
        
            <ul class="list-group">
                <li class="list-group-item d-flex" v-for="item in staticTeams" v-bind:key="item.id">
                    <div class="icon-column d-flex flex-column">
                        <base-icon :size="42" :name="item.icon" class="d-inline-block align-top"></base-icon>
                    </div>
                    <div class="item-content d-flex flex-column justify-content-center">
                        <h4>{{item.name}}</h4>
                        <p class="mb-1">{{item.task}}</p>
                        <p class="mb-1 members-label">{{item.members}} участников</p>
                    </div>
                    <div class="link">
                        <button type="button" class="btn btn-outline-secondary">Подробнее</button>
                    </div>
                </li>
            </ul>

            <nav class="nav mt-3">
                <button type="button" class="btn btn-primary">Создать постоянную команду</button>
            </nav>
        </article>

        <article class="mt-5">
            <h2 class="text-center">Разработчики без команды</h2>
        
            <ul class="list-group">
                <li class="list-group-item d-flex" v-for="item in singleDevelopers" v-bind:key="item.id">
                    <div class="icon-column d-flex flex-column">
                        <base-icon :size="42" :name="item.icon" class="d-inline-block align-top"></base-icon>
                    </div>
                    <div class="item-content d-flex flex-column justify-content-center">
                        <h4>{{item.name}}</h4>
                        <p class="mb-0">{{item.role}}</p>
                        <p class="mb-1">{{item.task}}</p>
                    </div>
                    <div class="link d-flex flex-column">
                        <button type="button" class="btn btn-outline-secondary mb-1">События</button>
                        <button type="button" class="btn btn-outline-secondary">Профиль</button>
                    </div>
                </li>
            </ul>
        </article>
    </div>
</template>

<script>
import BaseIcon from '../components/BaseIcon.vue';
export default {
    components: {
        BaseIcon
    },
    props: {
        featureTeams: {
            type: Array,
            default: () => {
                return [
                    {
                        id: 1,
                        icon: 'puzzle',
                        name: 'Team 1',
                        task: 'Рефакторинг модуля заказов',
                        members: 5,
                        sprint: 2
                    },
                    {
                        id: 2,
                        icon: 'peace',
                        name: 'Team 2',
                        task: 'Рефакторинг модуля заказов',
                        members: 5,
                        sprint: 2
                    }
                ];
            }
        },
        staticTeams: {
            type: Array,
            default: () => {
                return [
                    {
                        id: 3,
                        icon: 'exclamation-diamond',
                        name: 'Пожарники',
                        task: '',
                        members: 2
                    }
                ]
            }
        },
        singleDevelopers: {
            type: Array,
            default: () => {
                return [
                    {
                        id: 4,
                        icon: 'person-fill',
                        name: 'Иван Иванов',
                        role: 'Архитектор',
                        task: 'масштабирование сервиса авторизации'
                    },
                    {
                        id: 5,
                        icon: 'person-fill',
                        name: 'Петр Петров',
                        role: 'Тестировщик',
                        task: 'Формирование кодовой базы unit-тестов'
                    }
                ]
            }
        }
    },
    head() {
        return {
            title: 'Команды'
        }
    }
}
</script>

<style lang="scss">
@import '~/sass/theme.scss';
.list-group-item {
    .icon-column {
        flex-grow: 1;
    }
    .item-content {
        flex-grow: 5;
        .members-label {
            font-size: $font-size-sm;
        }
        .sprint-label {
            font-size: $font-size-sm;
        }
    }
}
</style>