<template>
    <div>
        <button v-on:click="update" class="btn btn-default test mb-1">Обновить</button>
        <span class="badge badge-primary mb-1">Обновление</span>
        <table class="table table-hover header-fixed">
            <thead>
            <tr v-for="head in heads">
                <th v-if="head[0]">{{head[0]}}</th>
                <th v-if="head[1]">{{head[1]}}</th>
                <th v-if="head[2]">{{head[2]}}</th>
                <th v-if="head[3]">{{head[3]}}</th>
                <th v-if="head[4]">{{head[4]}}</th>
                <th v-if="head[5]">{{head[5]}}</th>
                <th v-if="head[6]">{{head[6]}}</th>
                <th v-if="head[7]">{{head[7]}}</th>
                <th v-if="head[8]">{{head[8]}}</th>
                <th v-if="head[9]">{{head[9]}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in items">
                <td v-if="item[0]">{{item[0]}}</td>
                <td v-if="item[1]">{{item[1]}}</td>
                <td v-if="item[2]">{{item[2]}}</td>
                <td v-if="item[3]">{{item[3]}}</td>
                <td v-if="item[4]">{{item[4]}}</td>
                <td v-if="item[5]">{{item[5]}}</td>
                <td v-if="item[6]">{{item[6]}}</td>
                <td v-if="item[7]">{{item[7]}}</td>
                <td v-if="item[8]">{{item[8]}}</td>
                <td v-if="item[9]">{{item[9]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProbaAjax",
        data: function(){
            return {
                items: [],
                heads: [],
            }
        },
        mounted() {
            this.update();
        },
        methods: {
            update: function(){
                axios.get('proba_get').then((response) => {
                    console.log(response);
                    this.items = response.data.items;
                    this.heads = response.data.heads;
                });
            }
        }
    }
</script>

<style scoped>

</style>