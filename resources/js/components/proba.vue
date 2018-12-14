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
            <tr>
                <td>1.</td>
                <td>login_1</td>
                <td>login_1@example.com</td>
                <td>Famaly_1</td>
                <td>Otchestvo_1</td>
                <td>Name_1</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>login_2</td>
                <td>login_2@example.com</td>
                <td>Famaly_2</td>
                <td>Otchestvo_2</td>
                <td>Name_2</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>login_3</td>
                <td>login_3@example.com</td>
                <td>Famaly_3</td>
                <td>Otchestvo_3</td>
                <td>Name_3</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>login_4</td>
                <td>login_4@example.com</td>
                <td>Famaly_4</td>
                <td>Otchestvo_4</td>
                <td>Name_4</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "proba",
        mounted() {
            console.log('Компонент proba.vue');
        }
    }
</script>

<style scoped>

</style>