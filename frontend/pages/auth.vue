<template>
    <article class="container">
        <h1 class="mb-4">{{title}}</h1>
        <ul class="nav nav-tabs mb-2">
            <li class="nav-item">
                <a class="nav-link" :class="{'active': tab === 'login'}" href="#login" @click="tab='login'">Вход</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" :class="{'active': tab === 'reg'}" href="#reg" @click="tab='reg'">Регистрация</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Соцсети</a>
            </li>
        </ul>
        <div class="container-fluid" v-if="tab === 'login'">
            <form>
                <div class="form-group">
                    <label for="login">Login</label>
                    <input type="text" class="form-control" id="login" placeholder="Enter email/phone/login">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="rememberCheck">
                    <label class="form-check-label" for="rememberCheck">Remember me</label>
                </div>
                <button type="submit" class="btn btn-primary mt-3">SUBMIT</button>
            </form>
        </div>
        <div class="container-fluid" v-if="tab === 'reg'">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email/phone/login</label>
                    <input type="email" class="form-control" id="login" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your data with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="password1">Password</label>
                    <input type="password" class="form-control" id="password1">
                </div>
                <div class="form-group">
                    <label for="password2">Confirm password</label>
                    <input type="password" class="form-control" id="password2">
                </div>
                <div class="form-group">
                    <label for="password2">First and last name</label>
                    <div class="input-group">
                        <input type="text" class="form-control">
                        <input type="text" class="form-control">
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </article>
</template>

<script>
export default {
    data() {
      return {
        title: 'Авторизация',
        tab: 'login'
      }
    },
    head() {
        return {
            title: this.title
        }
    }
}
</script>