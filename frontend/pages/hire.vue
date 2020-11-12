<template>
    <div class="container" v-if="$store.getters.getUser">
        <div class="row">
            <div class="col-1"></div>
            <div class="col"><h2 class="text-center">Вакансии</h2></div>
            <div class="col-1 d-flex align-middle">
                <button class="btn btn-link py-1 px-2 ml-auto" title="Добавить вакансию">
                    <base-icon name="plus-circle" :size="18" class="my-0"></base-icon>
                </button>
            </div>
        </div>

        <div class="row pt-2">
            <div class="col-sm-6" v-for="item in vacancy" :key="item.id">
                <div class="card mb-3 d-flex flex-row">
                    <div class="card-icon d-flex align-items-center p-2">
                        <base-icon :name="item.icon"></base-icon>
                    </div>
                    <div class="card-body">
                        <div class="content">
                            <h5 class="card-title"><a href="#">{{item.name}}</a></h5>
                            <p class="card-text">{{item.description}}</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center p-2">
                        <div class="location">
                            <base-icon :size="16" name="geo-alt" class="mr-1"></base-icon>
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

        <div class="row">
            <div class="col-1"></div>
            <div class="col"><h2 class="text-center">Анкеты кандидатов</h2></div>
            <div class="col-1 d-flex align-middle">
                <button class="btn btn-link py-1 px-2 ml-auto" title="Добавить анкету">
                    <base-icon name="plus-circle" :size="18" class="my-0"></base-icon>
                </button>
            </div>
        </div>

        <div class="row pt-2">
            <div class="col-sm-6" v-for="item in candidates" :key="item.id">
                <div class="card mb-3 d-flex flex-row">
                    <div class="card-icon d-flex align-items-center p-2">
                        <base-icon name="person-bounding-box"></base-icon>
                    </div>
                    <div class="card-body">
                        <div class="content">
                            <h5 class="card-title"><a href="#">{{item.name}}</a></h5>
                            <p class="card-text mb-0">Target: {{item.target}}</p>
                            <p class="card-skills mb-0">Skills: 
                                <span v-for="skill in item.skills" :key="skill" class="badge badge-secondary mr-1">{{skill}}</span>
                            </p>
                            <p class="card-stage mb-0"><span class="badge badge-info">{{item.stageCode}}</span></p>
                        </div>
                    </div>
                    <div class="d-flex flex-column justify-content-center p-2">
                        <div>
                            <base-icon :size="16" name="compass" class="mr-1"></base-icon> 
                            Age: {{item.age}} y.o.
                        </div>
                        <div>
                            <base-icon :size="16" name="smartwatch" class="mr-1"></base-icon>
                            Exp.: {{item.experience}} y.o.
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
                },
                {
                    id: 2,
                    icon: 'journal-code',
                    name: 'Web Developer',
                    description: 'Full stack developer',
                    location: 'office (Moscow)',
                    time: 'fulltime'
                },
                {
                    id: 3,
                    icon: 'journal-code',
                    name: 'Web Developer',
                    description: 'Full stack developer',
                    location: 'office (Moscow)',
                    time: 'fulltime'
                }
            ],
            candidates: [
                {
                    id: 1,
                    name: 'Andrey',
                    age: 15,
                    experience: 0,
                    target: 'Web developer, junior',
                    skills: ['php', 'js'],
                    stageCode: 'preview'
                },
                {
                    id: 2,
                    name: 'Alexandr',
                    age: 25,
                    experience: 5,
                    target: 'Web developer, middle',
                    skills: ['GoLang', 'Node.js', 'sql'],
                    stage: 'на рассмотрении',
                    stageCode: 'approved'
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