<template>
    <view-table :columns="columns"/>
</template>

<script>
    import { mapState } from 'vuex';
    import ViewTable from '../comp/ViewTable'

    export default {
        name: "UsersPage",
        components: { ViewTable },
        computed: {
            ...mapState('UserTable', ['columns'])
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
