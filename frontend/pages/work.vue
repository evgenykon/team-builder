<template>
    <div class="container" v-if="$store.getters.getUser">

        <h2 class="text-center mb-3">Занятость</h2>

        <div class="card">
            <div class="card-header">
                Статистика
            </div>
            <div class="card-body">
                
                <dl class="row">
                    <dt class="col-sm-4">Текущая задача</dt>
                    <dd class="col-sm-8">Анализ кода <a href="#"><base-icon name="list-task" :size="16"></base-icon></a></dd>
                    <dt class="col-sm-4">Выполнено задач за неделю</dt>
                    <dd class="col-sm-8">5</dd>
                    <dt class="col-sm-4">На прошлой неделе</dt>
                    <dd class="col-sm-8">15</dd>
                    <dt class="col-sm-4">Участие в команде</dt>
                    <dd class="col-sm-8">-</dd>
                    <dt class="col-sm-4">Оценка загруженности</dt>
                    <dd class="col-sm-8">
                        <div class="progress">
                            <div class="progress-bar" 
                                role="progressbar" 
                                style="width: 60%;" 
                                aria-valuenow="60" 
                                aria-valuemin="0" 
                                aria-valuemax="100">3 из 5</div>
                        </div>
                    </dd>
                    <dt class="col-sm-4">Последняя отслеживаемая активность</dt>
                    <dd class="col-sm-8">15 минут назад (коммит в репозиторий)</dd>
                    <dt class="col-sm-4">Коммитов в день</dt>
                    <dd class="col-sm-8">5</dd>
                    <dt class="col-sm-4">Взаимодействие с командой (месяц)</dt>
                    <dd class="col-sm-8">
                        <a href="#link-to-profile-command-tab">высокое (3 оценки, 1 грейдирование, 1 лидерство)</a>
                    </dd>
                </dl>
            </div>
        </div>

        <div class="card mt-4">
            <div class="card-header">
                Планы
            </div>
            <div class="card-body">
                
                <dl class="row">
                    <dt class="col-sm-4">Следующий отпуск</dt>
                    <dd class="col-sm-8">через 3 месяца (01.01.21) 
                        <a href="#"><base-icon name="calendar-check" :size="16"></base-icon></a>
                    </dd>
                    <dt class="col-sm-4">Задач в очереди</dt>
                    <dd class="col-sm-8">1 <a href="#"><base-icon name="list-task" :size="16"></base-icon></a></dd>
                    <dt class="col-sm-4">Следующая встреча в календаре</dt>
                    <dd class="col-sm-8">10 ноября в 13:00
                        <a href="#"><base-icon name="calendar-check" :size="16"></base-icon></a>
                    </dd>
                    <dt class="col-sm-4">Достижение целей грейдирования</dt>
                    <dd class="col-sm-8">1 из 3</dd>
                    
                </dl>
            </div>
        </div>

        <h2 class="text-center mb-3 mt-5">Командная занятость</h2>

        <div class="card mt-4">
            <div class="card-header">
                Feature team <b>Team 1</b>
            </div>
            <div class="card-body">
                
                <dl class="row">
                    <dt class="col-sm-4">Простаивает</dt>
                    <dd class="col-sm-8">
                        <a href="#"><base-icon name="person" :size="16"></base-icon> Петров Петр (дизайнер)</a>
                    </dd>
                    <dt class="col-sm-4">Задачи в спринте</dt>
                    <dd class="col-sm-2">
                        3 в очереди
                    </dd>
                    <dd class="col-sm-2">
                        2 выполняются
                    </dd>
                    <dd class="col-sm-2">
                        2 выполнено
                    </dd>
                    <dd class="col-sm-2">
                        1 отменена <a href="#"><base-icon name="list-task" :size="16"></base-icon></a>
                    </dd>
                    <dt class="col-sm-4">Следующее собрание</dt>
                    <dd class="col-sm-8">10 ноября в 13:00 - Утренний митинг
                        <a href="#"><base-icon name="calendar-check" :size="16"></base-icon></a>
                    </dd>
                    <dt class="col-sm-4">Текущий спринт</dt>
                    <dd class="col-sm-8">2</dd>
                    <dt class="col-sm-4">Завершение</dt>
                    <dd class="col-sm-8">14 ноября</dd>
                </dl>
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
            title: 'Занятость'
        }
    }
}
</script>