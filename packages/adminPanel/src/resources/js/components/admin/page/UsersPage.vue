<template>
    <view-table :columns="columns"/>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import ViewTable from '../comp/ViewTable'

    export default {
        name: "UsersPage",
        components: { ViewTable },
        computed: {
            ...mapState('UserTable', ['columns'])
        },
        mounted() {
            this.$on('onReload', function(){
                this.reload();
            });
        },
        methods: {
            ...mapMutations('UserTable', {reload: 'read', setSort: 'setSort'})
        },
        watch: {
            columns: function(){
                console.log('Изменение');
            }
        }
    }
</script>

<style scoped>

</style>
