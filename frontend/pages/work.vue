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
                    <dd class="col-sm-8">Анализ кода</dd>
                    <dt class="col-sm-4">Выполнено задач за неделю</dt>
                    <dd class="col-sm-8">5</dd>
                    <dt class="col-sm-4">Участие в команде</dt>
                    <dd class="col-sm-8">-</dd>
                    <dt class="col-sm-4">Оценка загруженности</dt>
                    <dd class="col-sm-8">3 из 5</dd>
                    <dt class="col-sm-4">Последняя отслеживаемая активность</dt>
                    <dd class="col-sm-8">15 минут назад (коммит в репозиторий)</dd>
                    <dt class="col-sm-4">Коммитов в день</dt>
                    <dd class="col-sm-8">5</dd>
                    <dt class="col-sm-4">Взаимодействие с командой (месяц)</dt>
                    <dd class="col-sm-8">высокое (3 оценки, 1 грейдирование, 1 лидерство)</dd>
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
                    <dd class="col-sm-8">через 3 месяца (01.01.21)</dd>
                    <dt class="col-sm-4">Задач в очереди</dt>
                    <dd class="col-sm-8">1</dd>
                    <dt class="col-sm-4">Следующая встреча в каленаре</dt>
                    <dd class="col-sm-8">10 ноября в 13:00</dd>
                    <dt class="col-sm-4">Достижение целей грейдирования</dt>
                    <dd class="col-sm-8">1 из 3</dd>
                    
                </dl>
            </div>
        </div>


    </div>
</template>