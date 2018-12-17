<template>
    <div class="search_div">
        <i class="icon" title="Найти"><font-awesome-icon v-bind:icon="['fas', 'search']"></font-awesome-icon></i>
        <input class="search_input" type="text" :value="value" v-on:input="$emit('input', $event.target.value)" >
        <i class="icon"><font-awesome-icon v-bind:icon="['far', 'times-circle']" v-on:click="$emit('input', null)"></font-awesome-icon></i>
    </div>
</template>

<script>
    // import { library } from '@fortawesome/fontawesome-svg-core'
    // import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
    // import { faSearch } from '@fortawesome/free-solid-svg-icons'
    // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    //
    // library.add( faSearch, faTimesCircle );

    export default {
        name: "SearchInput",
//        components: { FontAwesomeIcon },
        props: {
            list: {
                type: Array,
                requerid: true
            },
            value: {
                type: String,
                required: false
            }
        },
        data() {
            return {
                isShow: false
            }
        }
    }
</script>

<style lang="scss" scoped>
.search_div {
    height: 25px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: white;
    display: flex;
    align-items: center;
    position: relative;
    .search_input {
        border: 0;
        outline: none;
        width: 25vw;
    }
    .icon {
        font-size: 13px;
        margin: 0 5px;
        color: #c6c6c6;
        cursor: pointer;
        &:hover {
            color: #1e3b89;
        }
    }
}
</style>
