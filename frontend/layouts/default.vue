<template>
  <div class="container-fluid">
    <base-page-header 
      :company-name="$store.getters.getUser ? $store.getters.getUser.company : ''"
      :user-name="$store.getters.getUser ? $store.getters.getUser.name : ''"
    ></base-page-header>
    <base-page-top-menu 
      :items="$store.getters.getUser ? menu.loggedIn : menu.notLoggedIn"
      :current="$route"
    ></base-page-top-menu>
    <nuxt/>
  </div>
</template>

<script>
import BasePageHeader from '../components/BasePageHeader.vue';
import BasePageTopMenu from '../components/BasePageTopMenu.vue';
export default {
  components: {
    BasePageHeader, BasePageTopMenu
  },
  data: () => {
    return {
      menu: {
        loggedIn: [
          {
            target: {name: 'profile'},
            name: 'Профиль'
          },
          {
            target: {name: 'team'},
            name: 'Команды'
          },
          {
            target: {name: 'competitions'},
            name: 'Компетенции'
          },
          {
            target: {name: 'hire'},
            name: 'Найм'
          },
          {
            target: {name: 'grading'},
            name: 'Грейдирование'
          },
          {
            target: {name: 'work'},
            name: 'Занятость'
          },
          {
            target: {name: 'polls'},
            name: 'Опросы'
          }
        ],
        notLoggedIn: [
          {
            target: {name: 'auth'},
            name: 'Авторизация'
          },
          {
            target: '#',
            name: 'О проекте'
          },
          {
            target: '#',
            name: 'Помощь'
          },
          {
            target: '#',
            name: 'Контакты'
          }
        ]
      }
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">@import '../sass/theme.scss';</style>

