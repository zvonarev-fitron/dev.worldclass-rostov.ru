<template>
    <ul>
        <tree-menu-li v-for="menu in ar_menu" :key="menu.id" :ar_menu="menu">{{ menu.name }}</tree-menu-li>
    </ul>
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
            }
        }
    }
</script>

<style scoped>

</style>