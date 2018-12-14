<template>
    <transition name="modal-menu-right">
        <div class="modal_window" @click="$emit('close')">
            <div class="modal_window_container" @click.stop>
                <div class="modal_window_top">
                    <div class="modal_window_top_title">
                        <slot name="title">Титл</slot>
                    </div>
                    <div class="modal_window_top_close" @click.stop="$emit('close')">
                        <font-awesome-icon :icon="['far', 'window-close']" class="modal_window_top_close_icon" />
                    </div>
                </div>
                <div class="modal_window_header">
                    <slot name="header">Заголовок</slot>
                </div>
                <div class="modal_window_body">
                    <slot name="body">Тело</slot>
                </div>
                <div class="modal_window_footer">
                    <slot name="footer"><hr/></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ModalMenuRightTemplate"
    }
</script>

<style lang="scss" scoped>
    .modal_window {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        /*transition: opacity .3s ease;*/
        .modal_window_container {
            width: 320px;
            height: 100%;
            margin-left: auto;
            padding-top: 10px;
            /*position: fixed;*/
            /*top: 0;*/
            /*right: 0;*/
            /*bottom: 0;*/
            background-color: #ed1c24;
            .modal_window_top{
                display: flex;
                /*margin-top: 10px;*/
                margin-right: 10px;
                .modal_window_top_close{
                    margin-left: auto;
                    color: white;
                    .modal_window_top_close_icon{
                        font-size: 20px;
                        cursor: pointer;
                        opacity: 0.5;
                    }
                    :hover{
                        opacity: 1;
                    }
                }
            }
        }
    }
    .modal-menu-right-enter,
    .modal-menu-right-leave-to
    {
        background-color: rgba(0, 0, 0, 0);
        left: 1500px;
    }
    .modal-menu-right-enter-to,
    .modal-menu-right-leave
    {
        background-color: rgba(0, 0, 0, .5);
        left: 0;
    }

    .modal-menu-right-enter-active  {
        transition: left 0.5s ease, background-color .3s ease 0.5s;
    }
    .modal-menu-right-leave-active{
        transition: background-color 0.3s ease, left .5s ease 0.3s;
    }
</style>
