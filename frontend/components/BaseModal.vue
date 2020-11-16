<template>
    <section>
        <div id="exampleModalLong" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" style="display: block; padding-right: 16px;" aria-modal="true">
            <div class="modal-dialog modal-dialog-scrollable modal-xl " role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{{title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="onClickClose">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="buttons"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show"></div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClickClose() {
            this.$emit('close');
        }
    }
}
</script>