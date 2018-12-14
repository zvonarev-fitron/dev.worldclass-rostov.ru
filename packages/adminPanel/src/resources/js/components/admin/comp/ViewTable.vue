<template>
    <div class="table_container">
        <div class="table_top_rules_panel">
            <MultiSelectListDropDown v-bind:list="columns.props"></MultiSelectListDropDown>
            <SelectCountRowTable :listCount="columns.listCount"></SelectCountRowTable>
            <button class="sync_users" v-on:click="reload">
                <i class="sync_icon">
                    <FontAwesomeIcon v-bind:icon="['fas', 'sync']"></FontAwesomeIcon>
                </i>
            </button>
            <SelectFieldFilter v-bind:fields="columns.props"></SelectFieldFilter>
            <SearchInput v-model="columns.search" class="search_input" :list="columns.props"></SearchInput>
            <button class="add_user">Добавить</button>
        </div>
        <table class="table_item">
            <thead class="thead_item">
                <tr>
                    <th v-for="prop in columns.props" class="thead_th_item" v-if="prop.visible">
                        <span class="thead_title">{{ prop.title }}</span>
                        <i v-bind:class="['tsort', { 'sort': !!prop.sort }]" v-on:click="selectSort(prop)">
                            <font-awesome-icon v-bind:icon="iconSelect(prop.sort)"></font-awesome-icon>
                        </i>
                        <i class="tsort" v-if="!!prop.sort" v-on:click="noneSort">
                            <font-awesome-icon v-bind:icon="['far', 'times-circle']"></font-awesome-icon>
                        </i>
                    </th>
                </tr>
            </thead>
            <tbody class="tbody_item" @contextmenu="context">
                <tr v-for="(item, index) in columns.items" class="tbody_tr_item" v-on:dblclick="dbClick" v-bind:key="index">
                    <td v-for="(it, code) in item" :data-id="item.id" class="tbody_td_item" v-if="showColumn(code)" :style="textAlign(code)">
                        {{ it }}
                    </td>
                </tr>
            </tbody>
            <tfoot>
            <tr>
                <td>
                    Pagenator
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    import MultiSelectListDropDown from "../ui/MultiSelectListDropDown"
    import SelectCountRowTable from "../ui/SelectCountRowTable"
    import SearchInput from '../ui/SearchInput'
    import SelectFieldFilter from '../ui/SelectFieldFilter'

    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
    import { faSort, faSortAmountDown, faSortAmountUp, faSync } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    library.add(faSort, faTimesCircle, faSortAmountDown, faSortAmountUp, faSync);

    export default {
        name: "ViewTable",
        components: { MultiSelectListDropDown, SelectCountRowTable, FontAwesomeIcon, SearchInput, SelectFieldFilter },
        props: {
            columns: {
                type: Object,
                requerid: true
            }
        },
        methods: {
            iconSelect(sort){
                if(undefined == sort) return 'sort';
                if('asc' == sort) return 'sort-amount-down';
                if('desc' == sort) return 'sort-amount-up';
            },
            selectSort(in_prop){
                let sort = in_prop.sort;
                for(let prop of this.columns.props) prop.sort = null;
                if(undefined == sort) in_prop.sort = 'asc';
                if('asc' == sort) in_prop.sort = 'desc';
                if('desc' == sort) in_prop.sort = 'asc';
            },
            noneSort(){
                for(let prop of this.columns.props)
                    prop.sort = null;
            },
            showColumn(code) {
                for(let prop of this.columns.props)
                    if(code == prop.code)
                        return prop.visible;
                return false;
            },
            textAlign(code) {
                 let r = 'center';
                 for(let prop of this.columns.props){
                     if(code == prop.code) {
                         if('phone' == prop.type) {
                             r = 'right';
                             break;
                         }
                         if('str' == prop.type){
                             r = 'center';
                             break;
                         }
                         if('int' == prop.type){
                             r = 'left';
                             break;
                         }
                     }
                 }
                 return 'text-align: ' + r + ';';
            },
            reload(){
                alert('reload')
            },
            dbClick(event){
                console.log(event.target.dataset.id);
                event.stopPropagation();
//                alert('dbClick');
            },
            context(event){
//                console.log(event.target);
                console.log(event.target.dataset.id);



//                event.stopPropagation();




                event.preventDefault();
                return false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sync_users {
        box-sizing: border-box;
        height: 25px;
        border-radius: 5px;
        outline: none;
        margin-left: 10px;
        display: flex;
        align-items: center;
    }
    .add_user {
        height: 25px;
        margin: 0 10px;
        border-radius: 5px;
        outline: none;
    }
    .search_input {
        margin-left: 10px;
    }
    .table_container {
        height: 100%;
        .table_item {
            display: flex;
            flex-flow: column;
            height: calc(100% - 35px);
            width: 100%;
            text-align: center;
            border-spacing: 0;
            border-collapse: collapse;
            background-color: #f5f5f5;
            .thead_item {
                display: table;
                table-layout: fixed;
                flex: 0 0 auto;
                width: calc(100% - 7px);
                background-color: #f5f5f5;
                .thead_th_item {
                    border: 1px solid #dbdbdb;
                }
                .tsort {
                    margin: 0 1px;
                    cursor: pointer;
                    color: #c6c6c6;
                    &:hover {
                        color: #363636;
                    }
                    &.sort {
                        color: #3273dc;
                    }
                }
            }
            .tbody_item {
                flex: 1 1 auto;
                display: block;
                overflow-y: scroll;
                .tbody_tr_item {
                    display: table;
                    table-layout: fixed;
                    width: calc(100% - 1px);
                    background-color: white;
                    .tbody_td_item {
                        border: 1px solid #dbdbdb;
                    }
                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
                &::-webkit-scrollbar-thumb {
                    width: 6px;
                    height: 6px;
                    background-image: -webkit-linear-gradient(#F5F5F5, #8A8A8A);
                    border-radius: 10px;
                }
                &::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                    border: 1px solid #eee;
                }
                &::-webkit-scrollbar-button {
                    background-color: #cebdbd;
                    height: 6px;
                    width: 6px;
                }
            }
        }
        .table_top_rules_panel {
            width: 100%;
            background-color: #f5f5f5;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            display: flex;
            height: 35px;
            align-items: center;
            .showhide_column {
                border: 1px solid black;
                background-color: white;
                width: 15px;
                height: 10px;
            }
        }
    }
</style>
