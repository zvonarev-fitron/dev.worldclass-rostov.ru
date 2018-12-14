<template>
    <div class="dropdown_header" :class="[{ 'is_show': isShow }]">
        <div class="fon" v-if="isShow" v-on:click="isShow = !isShow"></div>
        <button class="dropdown_button" v-on:click="isShow = !isShow">
            <span class="first_icon">
                {{ activeCount()  }}
            </span>
            <i class="last_icon">
                <font-awesome-icon icon="angle-up" />
            </i>
        </button>
        <transition name="fade">
            <ul class="dropdown_list" v-if="isShow">
                <li v-for="(list, key) in listCount" v-on:click="activateCount(list.count); isShow = !isShow" :class="['dropdown_list_li', { 'is_active': list.visible } ]" :key="key">
                    {{ list.count }}
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>

    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    export default {
        name: "SelectCountRowTable",
        components: { FontAwesomeIcon },
        props: {
            listCount: {
                type: Array,
                required: true
            }
        },
        data(){
            return {
            //     listCount: [
            //         { count: 10, active: false },
            //         { count: 15, active: false },
            //         { count: 20, active: false },
            //         { count: 25, active: false },
            //         { count: 30, active: false },
            //         { count: 35, active: false },
            //         { count: 40, active: false },
            //         { count: 45, active: false },
            //         { count: 50, active: false }
            //     ],
                isShow: false
            }
        },
        // mounted(){
        //     for(let list of this.listCount)
        //         if(list.active)
        //             return;
        //     this.listCount[0].active = true;
        // },
        methods: {
            activeCount(){
                for(let list of this.listCount)
                    if(list.active)
                        return list.count;
            },
            activateCount(count){
                for(let list of this.listCount){
                    if(count == list.count){
                        list.active = true;
                    }
                    else {
                        list.active = false;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
    .fon {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: beige;
        opacity: 0.2;
        z-index: 10;
    }
    .dropdown_header {
        position: relative;
        .dropdown_button {
            z-index: 11;
            margin-left: 10px;
            border-radius: 5px;
            border: 1px solid #dbdbdb;
            background-color: white;
            height: 25px;
            outline: none;
            cursor: pointer;
        }
        .dropdown_list{
            z-index: 11;
            position: absolute;
            margin: 0;
            padding: 0;
            background-color: white;
            /*display: none;*/
            /*opacity: 0;*/
            /*transition: opacity .5s ease;*/
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            left: 10px;
            .dropdown_list_li {
                /*line-height: 22px;*/
                cursor: pointer;
                border: 1px solid white;
                list-style-type: none;
                padding: 2px 15px;
                &:hover {
                    background-color: #f5f5f5;
                    border: 1px solid #f5f5f5;
                    border-radius: 5px;
                }
                &.is_active {
                    /*border-radius: 5px;*/
                    border: 1px solid #3273dc;
                    background-color: #3273dc;
                    color: white;
                    &:hover {
                        /*border-radius: 5px;*/
                        border: 1px solid white;
                        background-color: #3273dc;
                        color: white;
                    }
                }
            }
        }
        .first_icon {
            margin-right: 10px;
        }
        .last_icon {
            transition: transform .5s ease;
            display: inline-block;
        }
        &.is_show {
            .dropdown_list {
                /*display: block;*/
                /*transition: opacity .5s ease;*/
                /*opacity: 1;*/
                /*left: 10px;*/
            }
            .last_icon {
                transition: transform .5s ease;
                transform: rotate(-180deg);
            }
        }
    }
</style>
