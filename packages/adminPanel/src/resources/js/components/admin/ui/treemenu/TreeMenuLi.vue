<template>
    <li>
        <router-link :to="ar_menu.href" exact class="route">
            <i :title="ar_menu.name"><font-awesome-icon :icon="ar_menu.icon" /></i>
            <transition name="fade">
                <div class="content" v-if="!is_toggle_aside_left">
                    <span><slot></slot></span>
                    <span v-if="0 < ar_menu.count">({{ ar_menu.count }})</span>
                </div>
            </transition>
            <i v-if="!!ar_menu.children && !is_toggle_aside_left" v-on:click.prevent="sub_menu=!sub_menu" :class="['icon', {'active':sub_menu}]"><font-awesome-icon :icon="['fas', 'angle-left']" /></i>
        </router-link>
        <!--<tree-menu-ul :ar_menu="ar_menu.children" :is_sub_menu="this.sub_menu" v-if="!!ar_menu.children && !is_toggle_aside_left"></tree-menu-ul>-->
        <tree-menu-ul :ar_menu="ar_menu.children" v-if="sub_menu && !!ar_menu.children && !is_toggle_aside_left"></tree-menu-ul>
    </li>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "TreeMenuLi",
        components: {
            TreeMenuUl: () => import('./TreeMenuUl')
        },
        data(){
            return {
                sub_menu: false
            }
        },
        props: {
            ar_menu: {
                type: Object,
                required: true
            }
        },
        computed: {
            ...mapState('AsideLeft', ['is_toggle_aside_left']),
        },
        // methods: {
        //     toogleSubMenu(){
        //         this.sub_menu = !this.sub_menu;
        //     },
        //     selectMenu(){
        //         this.$root.$emit('selectmenu', this.ar_menu.id);
        //     }
        // }
    }
</script>

<style lang="scss" scoped>
.content {
    display: inline-block;
}
li {
    i.icon {
        width: 20px;
        height: 20px;
        text-align: center;
        transition: transform .5s ease;
        float: right;
        &.active {
            transform: rotate(-90deg);
            transition: transform .5s ease;
        }
    }
    .route {
        text-decoration: none;
        color: black;
        padding: 3px 0;
        width: 100%;
        display: inline-block;
        &:hover {
            background-color: lightgray;
        }
        &.router-link-active {
            color: white;
            background-color: dodgerblue;
        }
    }
}
.fade-enter-active {
    transition: opacity .5s ease;
}
.fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
