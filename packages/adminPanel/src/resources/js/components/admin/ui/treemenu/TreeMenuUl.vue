<template>
    <transition name="treemenuui">
        <!--<ul v-if="is_sub_menu">-->
        <ul>
            <tree-menu-li v-for="menu in ar_menu" :key="menu.id" :ar_menu="menu">{{ menu.name }}</tree-menu-li>
        </ul>
    </transition>
</template>

<script>
    import TreeMenuLi from "./TreeMenuLi";

    export default {
        name: "TreeMenuUl",
        components: { TreeMenuLi },
        props: {
            ar_menu: {
                type: Array,
                required: true
            },
            // is_sub_menu: {
            //     type: Boolean,
            //     default: false
            // }
        },
    }
</script>

<style lang="scss" scoped>

</style>
