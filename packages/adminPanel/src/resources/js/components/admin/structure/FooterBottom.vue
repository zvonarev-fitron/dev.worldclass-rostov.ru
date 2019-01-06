<template>
    <footer class="footer">
        Footer:
        <p v-if="!!debug">{{ debug }}</p>
    </footer>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "FooterBottom",
        computed: {
            ...mapState('Tables', ['debug'])
        }
    }
</script>

<style scoped>
.footer{
    background-color: #9d9d9d;
    text-align: center;
    color: white;
    border: 1px solid #2ca02c;
    border-radius: 3px;
    box-sizing: border-box;
    width: 99.5vw;
}
</style>
