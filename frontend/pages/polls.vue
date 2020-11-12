<template>
    <div class="container" v-if="$store.getters.getUser">

        <h2 class="text-center mb-3">Опросы</h2>

        <div class="jumbotron jumbotron-fluid py-4">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="border rounded p-3 bg-muted text-center">
                            <base-icon name="pie-chart" :size="100"></base-icon>
                        </div>
                    </div>
                    <div class="col-8">
                        <dl class="row">
                            <dt class="col-sm-3">Тема</dt>
                            <dd class="col-sm-9">Команда "Team 1"</dd>
                            <dt class="col-sm-3">Категория</dt>
                            <dd class="col-sm-9">Результат спринта</dd>
                            <dt class="col-sm-3">Дата</dt>
                            <dd class="col-sm-9">August 15, 2020</dd>
                        </dl>
                        <p>Вы присутствовали на демонстрации функционала 11.11.2011 по результатам спринта. Пожалуйста, оцените результат работы.</p>
                        <div class="row">
                            <div class="col">
                                <a href="#" class="btn btn-primary">Оценить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col text-center">
                <a href="#" class="btn btn-outline-secondary">
                    <base-icon name="receipt" :size="16"></base-icon> Прежние опросы
                </a>
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
    head() {
        return {
            title: 'Опросы'
        }
    }
}
</script>