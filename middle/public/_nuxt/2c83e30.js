(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{183:function(t,n,e){"use strict";e.r(n);var c={components:{BaseIcon:e(77).a},data:function(){return{tab:null,tags:[{id:1,name:"UI/UX и дизайн"},{id:2,name:"Аналитика"},{id:3,name:"Программирование"},{id:4,name:"Тестирование"},{id:5,name:"Администрирование"}],competitions:[]}},head:function(){return{title:"Компетенции"}},mounted:function(){this.onClickTab(this.tags[0])},methods:{onClickTab:function(t){this.tab=t,this.competitions.push({id:1,name:"Express.js",description:"Node.js framework",member_count:1,task_count:15}),this.competitions.push({id:2,name:"Mongo",description:"noSQL database",member_count:2,task_count:7}),this.competitions.push({id:3,name:"Vue.js",description:"frontend framework",member_count:3,task_count:6}),this.competitions.push({id:4,name:"Webpack",description:"frontend bundler",member_count:2,task_count:5})}}},o=e(7),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.$store.getters.getUser?e("div",{staticClass:"container"},[e("h2",{staticClass:"text-center"},[t._v("Компетенции")]),t._v(" "),e("ul",{staticClass:"nav nav-tabs"},[t._l(t.tags,(function(n){return e("li",{key:n.id,staticClass:"nav-item"},[e("a",{staticClass:"nav-link",class:{active:t.tab&&n.id===t.tab.id},attrs:{href:"#"+n.id},on:{click:function(e){return t.onClickTab(n)}}},[t._v(t._s(n.name))])])})),t._v(" "),e("button",{staticClass:"btn btn-link py-1 px-2 ml-auto",attrs:{title:"Тэги"}},[e("base-icon",{staticClass:"my-0",attrs:{name:"tags",size:18}})],1),t._v(" "),e("button",{staticClass:"btn btn-link py-1 px-2",attrs:{title:"Добавить компетенцию"}},[e("base-icon",{staticClass:"my-0",attrs:{name:"plus-circle",size:18}})],1)],2),t._v(" "),e("div",{staticClass:"row pt-2"},t._l(t.competitions,(function(n){return e("div",{key:n.id,staticClass:"col-sm-6"},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"card-body py-1 d-flex flex-row"},[e("div",{staticClass:"content"},[e("h5",{staticClass:"card-title"},[t._v(t._s(n.name))]),t._v(" "),e("p",{staticClass:"card-text"},[t._v(t._s(n.description))])]),t._v(" "),e("div",{staticClass:"btns ml-auto d-flex flex-column"},[e("a",{staticClass:"btn btn-link p-2 text-right",attrs:{href:"#"}},[t._v("Сотрудники ("+t._s(n.member_count)+")")]),t._v(" "),e("a",{staticClass:"btn btn-link p-2 text-right",attrs:{href:"#"}},[t._v("Задачи ("+t._s(n.task_count)+")")])])])])])})),0)]):t._e()}),[],!1,null,null,null);n.default=component.exports}}]);