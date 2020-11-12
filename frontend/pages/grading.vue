<template>
    <div class="container" v-if="$store.getters.getUser">

        <h2 class="text-center mb-5">Грейдирование</h2>

        <div class="row mb-5">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        Ваш текущий грейд
                    </div>
                    <div class="card-body">
                        <div class="display-2">1</div>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>Что это значит?</h4>
                <p>Короткое описание</p>
            </div>
        </div>

        <div class="row">
            <div class="col-1"></div>
            <div class="col"><h3 class="text-center">Этапы</h3></div>
            <div class="col-1 d-flex align-middle"></div>
        </div>

        <div class="row">
            <div class="col">
                <div class="jumbotron border border-primary">
                    <h3>1. Performance review</h3>
                    <p class="lead">This is a sample description of the stage</p>
                </div>
            </div>
            <div class="col">
                <div class="jumbotron">
                    <h3>2. Goals</h3>
                    <p class="lead">This is a sample description of the stage</p>
                </div>
            </div>
            <div class="col">
                <div class="jumbotron">
                    <h3>3. Results</h3>
                    <p class="lead">This is a sample description of the stage</p>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-1"></div>
            <div class="col"><h2 class="text-center">Performance review</h2></div>
            <div class="col-1 d-flex align-middle"></div>
        </div>

        <div class="row">
            <div class="col">
                form 1
            </div>
        </div>

        <div class="row">
            <div class="col-1"></div>
            <div class="col"><h2 class="text-center">Goals</h2></div>
            <div class="col-1 d-flex align-middle"></div>
        </div>

        <div class="row mb-5">
            <div class="col">
                form 2
            </div>
        </div>

        <div class="row">
            <div class="col-1"></div>
            <div class="col"><h2 class="text-center">Грейдирование других сотрудников</h2></div>
            <div class="col-1 d-flex align-middle"></div>
        </div>

        <table class="table table-sm table-bordered mt-3">
            <thead>
                <tr>
                    <th>Сотрудник</th>
                    <th>Роль</th>
                    <th>Грейд</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in members" :key="item.id">
                    <td>{{item.name}}</td>
                    <td>{{item.role}}</td>
                    <td>
                        <div class="d-flex">
                            <span>{{item.grade}}</span>
                            <a href="#" class="ml-auto">
                                <base-icon name="play" :size="18"></base-icon>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

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
            members: [
                {
                    id: 1,
                    name: 'Алексей',
                    role: 'Web developer',
                    grade: 10
                }
            ]
        }
    },
    head() {
        return {
            title: 'Грейдирование'
        }
    }
}
</script>