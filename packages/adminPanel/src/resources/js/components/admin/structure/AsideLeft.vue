<template>
    <aside :class="[ 'aside_left_menu', { 'is_colapsed' : is_toggle_aside_left } ]">
        <ul class="aside_left_menu_ul">
            <li v-for="menu in menus" :menu_id="menu.id" :class="[ 'aside_left_menu_ul_li', {'is_active' : menu.active} ]" v-on:click="selectMenu(menu.id)">
                <router-link :to="menu.href" class="aside_left_menu_ul_li_a">
                    <i class="aside_left_menu_ul_li_a_i" :title="menu.name">
                        <font-awesome-icon :icon="menu.icon" />
                    </i>
                    <transition name="fade">
                        <span  class="aside_left_menu_ul_li_a_span" v-if="!is_toggle_aside_left">
                            {{ menu.name }}
                        </span>
                    </transition>
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faBars, faTachometerAlt, faList, faUsers, faDumbbell, faChartArea, faUserTie,
        faClipboardList, faPlaceOfWorship} from '@fortawesome/free-solid-svg-icons'
    import { faCriticalRole, faStrava, faBloggerB } from '@fortawesome/free-brands-svg-icons'
    import { faImages, faFileAlt, faBell, faNewspaper } from '@fortawesome/free-regular-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    library.add(faBars, faTachometerAlt, faList, faUsers, faCriticalRole, faImages, faFileAlt, faDumbbell,
        faBell, faStrava, faBloggerB, faNewspaper, faChartArea, faUserTie, faClipboardList, faPlaceOfWorship);

    export default {
        name: "AsideLeft",
        components: { FontAwesomeIcon },
        data() {
            return {
                menus: [
                    { id: '1', href: '/admin/foo', icon: 'tachometer-alt', name: 'Панель', active: true },
                    { id: '2', href: '/admin/bar', icon: 'list', name: 'Меню', active: false },
                    { id: '3', href: '/admin/users', icon: 'users', name: 'Пользователи', active: false },
                    { id: '4', href: '/admin', icon: ['fab', 'critical-role'], name: 'Роли', active: false },
                    { id: '5', href: '/admin', icon: ['far', 'images'], name: 'Слайдеры', active: false },
                    { id: '6', href: '/admin', icon: ['far', 'file-alt'], name: 'Страницы', active: false },
                    { id: '7', href: '/admin', icon: 'dumbbell', name: 'Фитнес-программы', active: false },
                    { id: '8', href: '/admin', icon: ['far', 'bell'], name: 'События', active: false },
                    { id: '9', href: '/admin', icon: ['fab', 'strava'], name: 'Инфраструктура', active: false },
                    { id: '10', href: '/admin', icon: ['fab', 'blogger-b'], name: 'Блог', active: false },
                    { id: '11', href: '/admin', icon: ['far', 'newspaper'], name: 'Новости', active: false },
                    { id: '12', href: '/admin', icon: 'chart-area', name: 'Акции', active: false },
                    { id: '13', href: '/admin', icon: 'user-tie', name: 'Тренеры', active: false },
                    { id: '14', href: '/admin', icon: 'clipboard-list', name: 'Расписание', active: false },
                    { id: '15', href: '/admin', icon: 'place-of-worship', name: 'Место', active: false },
                ]
            }
        },
        computed: {
            ...mapState('AsideLeft', ['is_toggle_aside_left'])
        },
        methods: {
            selectMenu(id) {
                for(let menu of this.menus) {
                    if (id == menu.id)
                        menu.active = true;
                    else
                        menu.active = false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active {
        transition: opacity .5s ease;
    }
    .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
.aside_left_menu{
    background-color: white;
    color: #4a4a4a;
    border: 1px solid #9d9d9d;
    border-radius: 3px;
    position: absolute;
    box-sizing: border-box;
    top: 55px;
    bottom: 0;
    overflow-y: auto;
    width: 15vw;
    overflow-x: hidden;
    transition: width .5s ease;
    &::-webkit-scrollbar-thumb {
        width: 4px;
        background-image: -webkit-linear-gradient(#F5F5F5, #8A8A8A);
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        width: 6px;
        border: 1px solid #eee;
    }
    &::-webkit-scrollbar-button {
        background-color: #cebdbd;
        height: 8px;
    }
    &.is_colapsed {
        width: 4%;
    }
    .aside_left_menu_ul_li_a_i {
        margin: 0 10px;
    }
    .aside_left_menu_ul {
        opacity: 1;
        transition: width .5s ease;
        .aside_left_menu_ul_li_a {
            display: flex;
            .aside_left_menu_ul_li_a_span {
                white-space: nowrap;
            }
        }
        margin: 0;
        padding: 0;
        .aside_left_menu_ul_li {
            list-style-type: none;
            padding: 10px 0;
            &:hover {
                background-color: #f5f5f5;
                .aside_left_menu_ul_li_a {
                    color: #363636;
                }
            }
            &.is_active {
                background-color: #3273dc;
                .aside_left_menu_ul_li_a {
                    color: #fff;
                }
            }
            .aside_left_menu_ul_li_a {
                text-decoration: none;
                color: #3d4852;
            }
        }
    }
}
</style>
