<template>
    <li>
        <router-link :to="ar_menu.href">
            <i :title="ar_menu.name"><font-awesome-icon :icon="ar_menu.icon" /></i>
            <transition name="fade">
                <span v-if="!is_toggle_aside_left">
                    <span :class="['aaaaaa', {'active': ar_menu.active}]"><slot></slot></span>
                    <span v-if="0 < ar_menu.count">{{ ar_menu.count }}</span>
                </span>
            </transition>
        </router-link>
        <template v-if="!!ar_menu.children">
            <i><font-awesome-icon :icon="['fas', 'angle-left']" /></i>
            <tree-menu-ul :ar_menu="ar_menu.children"></tree-menu-ul>
        </template>
    </li>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "TreeMenuLi",
        components: {
            TreeMenuUl: () => import('./TreeMenuUl')
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
        methods: {
            toogleChildrenMenu(){
                $this.$emmit('tCM', this.id);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
