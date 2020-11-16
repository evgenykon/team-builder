<template>
    <div class="container" v-if="$store.getters.getUser">
        <h2 class="text-center">Компетенции</h2>

        <base-tabs :tabs="tags" :active="tab" v-on:tab-change="onTabChange">
            <button class="btn btn-link py-1 px-2 ml-auto" title="Тэги" @click="flags.isVisibleModalTags = true">
                <base-icon name="tags" :size="18" class="my-0"></base-icon>
            </button>
            <button class="btn btn-link py-1 px-2" title="Добавить компетенцию"  @click="flags.isVisibleModalAddCompetition = true">
                <base-icon name="plus-circle" :size="18" class="my-0"></base-icon>
            </button>
        </base-tabs>

        <base-card-tile :tiles="competitions">
            <template v-slot:default="slotParams">
                <div class="content p-2">
                    <h5 class="card-title">{{slotParams.tile.name}}</h5>
                    <p class="card-text">{{slotParams.tile.description}}</p>
                </div>
                <div class="btns ml-auto d-flex flex-column">
                    <a href="#" class="btn btn-link p-2 text-right">Сотрудники ({{slotParams.tile.member_count}})</a>
                    <a href="#" class="btn btn-link p-2 pb-0 text-right">Задачи ({{slotParams.tile.task_count}})</a>
                </div>
                <div class="pt-0">
                    <a href="#" class="p-1 d-flex text-right">
                        <base-icon name="trash" :size="12" class="my-0"></base-icon>
                    </a>
                </div>
            </template>
        </base-card-tile>

        <base-modal v-if="flags.isVisibleModalTags" title="Управление тэгами" v-on:close="flags.isVisibleModalTags = false">
            <template v-slot:body>
                <div class="container">
                    <div class="row mb-3">
                        <div class="col">
                            <button type="button" class="btn btn-primary">Добавить</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4" v-for="item in tags" :key="item.id">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Tag" :value="item.name" />
                                    <div class="input-group-append" id="button-addon4">
                                        <button class="btn btn-outline-secondary btn-sm" type="button">
                                            <base-icon name="check" :size="18"></base-icon>
                                        </button>
                                        <button class="btn btn-outline-secondary btn-sm" type="button">
                                            <base-icon name="x" :size="18"></base-icon>
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </base-modal>

        <base-modal v-if="flags.isVisibleModalAddCompetition" title="Добавление компетенции" v-on:close="flags.isVisibleModalAddCompetition = false">
            <template v-slot:body>
                <div class="form-group row">
                    <label for="component_name" class="col-sm-2 col-form-label">Наименование</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" value="" id="component_name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="component_description" class="col-sm-2 col-form-label">Описание</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="component_description">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="component_description" class="col-sm-2 col-form-label">Тэг</label>
                    <div class="col-sm-10">
                    <select class="form-control">
                        <template v-for="tag in tags">
                        <option :value="tag.id" :key="tag.id">{{tag.name}}</option>
                        </template>
                    </select>
                    </div>
                </div>
            </template>
            <template v-slot:buttons>
                <button type="button" class="btn btn-primary">Сохранить</button>
            </template>
        </base-modal>

    </div>
</template>

<script>
import BaseIcon from '../components/BaseIcon.vue';
import BaseTabs from '../components/BaseTabs.vue';
import BaseCardTile from '../components/BaseCardTile.vue';
import BaseModal from '../components/BaseModal.vue';

export default {
    components: {
        BaseIcon, BaseTabs, BaseCardTile, BaseModal
    },
    data() {
        return {
            tab: null,
            flags: {
                isVisibleModalTags: false,
                isVisibleModalAddCompetition: false
            },
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
    head() {
        return {
            title: 'Компетенции'
        }
    },
    mounted() {
        this.onTabChange(this.tags[0]);
    },
    methods: {
        onTabChange(item) {
            this.tab = item;
            //@todo dispatch
            this.competitions.push({
                id: (new Date).getTime(),
                name: 'Express.js',
                description: 'Node.js framework',
                member_count: (new Date).getTime(),
                task_count: (new Date).getTime()
            });
        }
    }
}
</script>