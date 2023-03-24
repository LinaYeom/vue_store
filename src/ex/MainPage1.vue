<template>
    <div>
        {{ this.$store.state.count }}
        <button @click=" doubleCount">더블더블</button>
        <p>-----------------------------------------</p>

        <input v-model="number" placeholder="데이터 입력"/>
        <button @click="multiCountAndNumber">multiCountAndNumber</button>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            number : 0, 
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        doubleCount(){
            this.$store.commit("doubleCount")
        },
        multiCountAndNumber(){
            this.$store.commit("multiCountAndNumber", this.number)
        }
    }
}
</script>

<style scoped>

</style>