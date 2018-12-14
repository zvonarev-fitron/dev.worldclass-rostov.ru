<template>
    <section :class="[ 'admin_section', {'is_colapsed': is_toggle_aside_left} ]">
        <router-view></router-view>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "SectionContent",
        computed: {
            ...mapState('AsideLeft', ['is_toggle_aside_left'])
        }
    }
</script>

<style lang="scss" scoped>
.admin_section{
    position: absolute;
    top: 55px;
    bottom: 0;
    left: 15.1vw;
    width: 84.4vw;
    border: 1px solid #9d9d9d;
    border-radius: 3px;
    box-sizing: border-box;
    overflow: auto;
    transition: left .5s ease, width .5s ease;
    &.is_colapsed{
        left: 4.1vw;
        width: 95.4vw;
    }
    &::-webkit-scrollbar-thumb {
        width: 4px;
        height: 4px;
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
</style>
