<template>
    <div class="container" v-if="$store.getters.getUser">
        <article>
            <h2 class="text-center">Профиль</h2>
            <div class="row">
                <div class="col-3">
                    <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">Личные данные</a>
                    <a href="#" class="list-group-item list-group-item-action">Предпочтения</a>
                    <a href="#" class="list-group-item list-group-item-action">Командная работа</a>
                    </div>
                </div>
                <div class="col">
                    <form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Example multiple select</label>
                            <select multiple class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div>
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
      return {
        title: 'Профиль'
      }
    },
    head() {
        return {
            title: this.title
        }
    }
}
</script>