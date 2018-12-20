<template>
    <aside :class="[ 'aside_left_menu', { 'is_colapsed' : is_toggle_aside_left } ]">
        <tree-menu-ul :ar_menu="menus" :is_sub_menu="true"></tree-menu-ul>
    </aside>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import TreeMenuUl from '../ui/treemenu/TreeMenuUl';
    import axios from 'axios';

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
                ],
                sub_menu: false,
            }
        },
        // mounted() {
        //     this.$root.$on('selectmenu', id => {
        //
        //         console.log('selectmenu = ' + id);
        //
        //         this.menus = this.selectMenu(id, this.menus);
        //     });
        // },
        created(){
            axios.get('/admin/menu')
                .then(responce => {
                    this.menus = responce.data;
                })
                .catch(e => {
                    console.log(e);
                })
        },
        computed: {
            ...mapState('AsideLeft', ['is_toggle_aside_left']),
        },
//         methods: {
//             selectMenu(id, obj){
//                 for(let i = 0; i < obj.length; i++) {
//                     obj[i] = this.activeMenu(id, obj[i]);
//
//
//                     if(!!obj[i].children) obj[i].children = this.selectMenu(id, obj[i].children);
//
//
//                 }
//                 return obj;
//             },
//             activeMenu(id, obj) {
//
// //                console.log(id + ' -- ' + obj.id);
//
//                 if(id == obj.id){
//
//                     console.log(id + ' -- ' + obj.id);
//
//                     obj.active = true;
//                 }
//                 else {
//                     obj.active = false;
//                 }
//                 return obj;
//             },
//             toogleSubMenu(sub_menu) {
//                 this.sub_menu = sub_menu;
//             }
//         }
    }

</script>

<style lang="scss">
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
    overflow-x: auto;
    width: 18vw;
    /*overflow-x: hidden;*/
    transition: width .5s ease;
    &::-webkit-scrollbar-thumb {
        width: 4px;
        background-image: -webkit-linear-gradient(#F5F5F5, #8A8A8A);
        border-radius: 10px;
    }
    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        border: 1px solid #eee;
    }
    &::-webkit-scrollbar-button {
        background-color: #cebdbd;
        height: 8px;
        width: 8px
    }
    &.is_colapsed {
        width: 2.3vw;
        overflow-x: hidden;
    }
    ul{
        &:first-child {
            opacity: 1;
            transition: width .5s ease;
            margin: 0;
            padding: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        li {
            list-style-type: none;
            /*padding: 5px 0;*/
            >a {
                text-decoration: none;
                >i {
                    display: inline-block;
                    width: 15px;
                    padding-left: 5px;
                }
            }
            >i {
                float: right;
                margin-right: 5px;
                cursor: pointer;
            }
        }
        padding-left: 10px;
    }
}
</style>
