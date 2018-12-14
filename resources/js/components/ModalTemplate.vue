<template>
    <transition name="modal">
        <div class="modal_window" @click="$emit('close')">
            <div class="modal_window_container" @click.stop>
                <div class="modal_window_top">
                    <div class="modal_window_top_title">
                        <slot name="title">Заголовок</slot>
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
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faWindowClose, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faWindowClose, faQuestionCircle);

    export default {

        name: 'ModalTemplate',
        components: { FontAwesomeIcon }
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
        transition: opacity .3s ease;
        .modal_window_container {
            @media (min-width: 64em) { width: 985px }
            @media (min-width: 48em) and (max-width: 64em) { width: 730px }
            width: 300px;
            margin: 100px auto;
            padding: 20px 30px;
            background-color: #6e7177;
            color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            transition: all .3s ease;
            font-family: "Avenir Next Cyr W00 Regular", sans-serif;
            .modal_window_top{
                display: flex;
                .modal_window_top_close{
                    margin-left: auto;
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

    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
