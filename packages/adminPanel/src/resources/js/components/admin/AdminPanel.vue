<template>
    <div id="admin">
        <navbar-top></navbar-top>
        <div class="main_route">
            <aside-left></aside-left>
            <section-content></section-content>
            <aside-right></aside-right>
        </div>
        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import NavbarTop from './structure/NavbarTop'
    import AsideLeft from './structure/AsideLeft'
    import SectionContent from './structure/SectionContent'
    import AsideRight from './structure/AsideRight'
    import FooterBottom from './structure/FooterBottom'

    export default {
        name: "AdminPanel",
        components: { NavbarTop, AsideLeft, SectionContent, AsideRight, FooterBottom }
    }
</script>

<style lang="scss" scoped>
.main_route{
    position: relative;
    flex: 1;
    width: 99.5vw;
}
</style>
