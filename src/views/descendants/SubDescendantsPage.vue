<template>
    <div>
        <el-dialog
            title="부모-자식 data"
            width="30%"
            center
            :visible.sync="uncle"
            :close-on-click-uncle="false"
            :close-on-press-escape="false"
        >

        <input v-model="parentData" placeholder="데이터 입력"/><p/>
        {{ this.$store.state.showData }}
            <el-button @click="save">전송</el-button>
            <el-button @click="close">닫기</el-button>
        </el-dialog>
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            uncle:true,
            parentData:'',
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        close(){
            this.$emit('close')
            this.uncle =false
        },
        save(){
            this.$store.commit("save", this.parentData)
            
        }
    }
}
</script>

<style scoped>

</style>