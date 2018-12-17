<template>
    <aside :class="[ 'aside_left_menu', { 'is_colapsed' : is_toggle_aside_left } ]">
        <tree-menu-ul :ar_menu="menus"></tree-menu-ul>
    </aside>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import TreeMenuUl from '../ui/treemenu/TreeMenuUl';

    export default {
        name: "AsideLeft",
        components: { TreeMenuUl },
        data() {
            return {
                menus: [
                    { id: '1', href: '/admin/foo', icon: ['fas', 'tachometer-alt'], name: 'Панель', active: true },
                    { id: '2', href: '/admin/bar', icon: ['fas', 'list'], name: 'Меню', active: false },
                    { id: '3', href: '/admin/users', icon: ['fas', 'users'], name: 'Пользователи', active: false },
                    { id: '4', href: '/admin', icon: ['fab', 'critical-role'], name: 'Роли', active: false, children: [
                            { id: '28', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 1', active: false },
                            { id: '29', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 2', active: false },
                            { id: '30', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 3', active: false },
                        ]
                    },
                    { id: '5', href: '/admin', icon: ['far', 'images'], name: 'Слайдеры', active: false },
                    { id: '6', href: '/admin', icon: ['far', 'file-alt'], name: 'Страницы', active: false },
                    { id: '7', href: '/admin', icon: ['fas', 'dumbbell'], name: 'Фитнес-программы', active: false },
                    { id: '8', href: '/admin', icon: ['far', 'bell'], name: 'События', active: false },
                    { id: '9', href: '/admin', icon: ['fab', 'strava'], name: 'Инфраструктура', active: false },
                    { id: '10', href: '/admin', icon: ['fab', 'blogger-b'], name: 'Блог', active: false },
                    { id: '11', href: '/admin', icon: ['far', 'newspaper'], name: 'Новости', active: false },
                    { id: '12', href: '/admin', icon: ['fas', 'chart-area'], name: 'Акции', active: false },
                    { id: '13', href: '/admin', icon: ['fas', 'user-tie'], name: 'Тренеры', active: false },
                    { id: '14', href: '/admin', icon: ['fas', 'clipboard-list'], name: 'Расписание', active: false },
                    { id: '15', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место', active: false, children: [
                            { id: '16', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 1', active: false },
                            { id: '17', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 2', active: false, children: [
                                    { id: '19', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 1', active: false },
                                    { id: '20', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 2', active: false },
                                    { id: '21', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 3', active: false, children: [
                                            { id: '22', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 1', active: false },
                                            { id: '23', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 2', active: false },
                                            { id: '24', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 3', active: false, children: [
                                                    { id: '25', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 1', active: false },
                                                    { id: '26', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 2', active: false },
                                                    { id: '27', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 3', active: false },
                                                ] },
                                        ] },
                                    { id: '31', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 1', active: false },
                                ] },
                            { id: '18', href: '/admin', icon: ['fas', 'place-of-worship'], name: 'Место 3', active: false },
                        ]
                    },
                ]
            }
        },
        computed: {
            ...mapState('AsideLeft', ['is_toggle_aside_left']),
        },
        methods: {
            selectMenu(id) {
                for(let menu of this.menus) {
                    if (id == menu.id)
                        menu.active = true;
                    else
                        menu.active = false;
                }
            },
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
    font-family: "Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.5;
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
        margin-left: 5px;
        width: 20px;
    }
    .aside_left_menu_ul {
        opacity: 1;
        transition: width .5s ease;
        .aside_left_menu_ul_li_a {
            display: flex;
            .aside_left_menu_ul_li_a_span {
                white-space: nowrap;
                .aside_left_menu_ul_li_a_span_name {
                    width: 120px;
                    display: inline-block;
                }
                .aside_left_menu_ul_li_a_span_count {
                    background-color: black;
                    color: yellow;
                    width: 15px;
                    display: inline-block;
                }
                .aside_left_menu_ul_li_a_span_icon {
                    color: darkblue;
                    margin-left: 3px;
                }
            }
        }
        margin: 0;
        padding: 0;
        .aside_left_menu_ul_li {
            list-style-type: none;
            padding: 5px 0;
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
