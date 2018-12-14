<template>
    <div>
        <table class="table table-hover header-fixed">
            <thead>
            <tr>
                <th>Id</th>
                <th>Логин</th>
                <th>Почта</th>
                <th>Фамилия</th>
                <th>Отчество</th>
                <th>Имя</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <td>{{user[0]}}</td>
                <td>{{user[1]}}</td>
                <td>{{user[2]}}</td>
                <td>{{user[3]}}</td>
                <td>{{user[4]}}</td>
                <td v-if="user[5]">{{user[5]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProbaDunamic",
        mounted() {
            console.log('Компонент proba.vue');
            console.log(this.users);
        },
        props: [
            'users'
        ]
    }
</script>

<style scoped>

</style>