(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,r,e){"use strict";e.r(r);var n={data:function(){return{title:"Авторизация",tab:"login"}},head:function(){return{title:this.title}},methods:{onError:function(){},onClickSubmitLogin:function(){var t=this;this.$store.dispatch("login").then((function(){t.$router.push("/")})).catch(this.onError)},onClickSubmitRegistry:function(){var t=this;this.$store.dispatch("register").then((function(){t.$router.push("/")})).catch(this.onError)}}},l=e(7),component=Object(l.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("article",{staticClass:"container"},[e("h1",{staticClass:"mb-4"},[t._v(t._s(t.title))]),t._v(" "),e("ul",{staticClass:"nav nav-tabs mb-2"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",class:{active:"login"===t.tab},attrs:{href:"#login"},on:{click:function(r){t.tab="login"}}},[t._v("Вход")])]),t._v(" "),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",class:{active:"reg"===t.tab},attrs:{href:"#reg"},on:{click:function(r){t.tab="reg"}}},[t._v("Регистрация")])]),t._v(" "),t._m(0)]),t._v(" "),"login"===t.tab?e("div",{staticClass:"container-fluid"},[e("form",[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"button"},on:{click:t.onClickSubmitLogin}},[t._v("SUBMIT")])])]):t._e(),t._v(" "),"reg"===t.tab?e("div",{staticClass:"container-fluid"},[e("form",[t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.onClickSubmitRegistry}},[t._v("Submit")])])]):t._e()])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[this._v("Соцсети")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"login"}},[this._v("Identity")]),this._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text",id:"login",placeholder:"Enter email/phone/login"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password"}},[this._v("Password")]),this._v(" "),r("input",{staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Enter password"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"rememberCheck"}}),this._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"rememberCheck"}},[this._v("Remember me")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"exampleInputEmail1"}},[this._v("Email/phone/login")]),this._v(" "),r("input",{staticClass:"form-control",attrs:{type:"email",id:"login","aria-describedby":"emailHelp"}}),this._v(" "),r("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[this._v("We'll never share your data with anyone else.")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password1"}},[this._v("Password")]),this._v(" "),r("input",{staticClass:"form-control",attrs:{type:"password",id:"password1"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password2"}},[this._v("Confirm password")]),this._v(" "),r("input",{staticClass:"form-control",attrs:{type:"password",id:"password2"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"password2"}},[this._v("First and last name")]),this._v(" "),r("div",{staticClass:"input-group"},[r("input",{staticClass:"form-control",attrs:{type:"text"}}),this._v(" "),r("input",{staticClass:"form-control",attrs:{type:"text"}})])])}],!1,null,null,null);r.default=component.exports}}]);