<template>
    <view-table :columns="columns" :hrefAddRecord="'/admin/user/new'" v-on:onReload="reload"/>
</template>

<script>
    import { mapGetters, mapMutations, mapActions } from 'vuex';
    import ViewTable from '../comp/ViewTable';

    export default {
        name: "UsersPage",
        components: { ViewTable },
        data(){
            return {
                firstLoad: true
            }
        },
        computed: {
              ...mapGetters('Tables', {columns: 'getUsers'})
        },
        mounted() {
            if(this.firstLoad) this.reload();
            this.firstLoad = !this.firstLoad;
        },
        methods: {
            ...mapMutations('Tables', {setSort: 'setSortUsers'}),
            ...mapActions('Tables', {reload: 'readUsers'})
        },
    }
</script>

<style scoped>

</style>
