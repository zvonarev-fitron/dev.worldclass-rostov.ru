<template>
    <div>
        <div>Создать нового пользователя</div>
        <toggle-button :value="true" :labels="true" v-model="onoff" :width="36" :height="16"/>
        <toggle-button :value="true" :labels="true" :width="36" :height="16"/>
        <toggle-button :value="false" :labels="true" :width="36" :height="16" :disabled="true"/>
    </div>
</template>

<script>
    export default {
        name: "NewUserPage",
        data(){
            return {
                onoff: false
            }
        }
    }
</script>

<style scoped>

</style>
