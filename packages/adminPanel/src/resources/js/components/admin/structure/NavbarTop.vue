<template>
    <nav class="top_nav">
        <ul class="top_nav_ul">
            <li class="top_nav_ul_li">
                <a href="/" title="Перейти на сайт"  class="top_nav_ul_li_a">
                    <img src="http://dev.worldclass-rostov.ru/svg/logo.svg" alt="Перейти на сайт" class="logo_image">
                </a>
            </li>
            <li class="top_nav_ul_li">
                <button v-on:click="toggle"  class="top_nav_ul_li_a">
                    <i class="top_nav_ul_li_a_i">
                        <font-awesome-icon icon="outdent" :class="{ 'rotate': is_toggle_aside_left }" />
                    </i>
                </button>
            </li>
            <li class="top_nav_ul_li">
                <div>Поиск</div>
            </li>
            <li class="top_nav_ul_li">
                <div>Личные данные</div>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { mapState, mapMutations} from 'vuex'

    export default {
        name: "NavbarTop",
        computed: {
            ...mapState('AsideLeft', ['is_toggle_aside_left'])
        },
        methods: {
            ...mapMutations('AsideLeft', {toggle: 'ToggleAsideLeft'})
        }
    }
</script>

<style lang="scss" scoped>
    .top_nav{
        background-color: #f5f5f5;
        color: #363636;
        width: 99.5vw;
        border: 1px solid #9d9d9d;
        border-radius: 3px;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        height: 54px;
        z-index: 2;
        .top_nav_ul {
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            .top_nav_ul_li {
                list-style-type: none;
                margin: 0 18px;
                .top_nav_ul_li_a {
                    cursor: pointer;
                    .top_nav_ul_li_a_i {
                        font-size: 21px;
                        color: black;
                    }
                    .logo_image {
                        height: 50px;
                        /*margin: 10px 0;*/
                    }
                }
            }
        }
        .fa-outdent {
            transition: transform .5s linear;
            &.rotate {
                transform: rotate(180deg);
            }
        }
    }

</style>
