<template>
    <div>
        <el-dialog
            title="부모-자식 data"
            width="30%"
            center
            :visible.sync="child"
            :close-on-click-child="false"
            :close-on-press-escape="false"
        >
        <input v-model="parentData" placeholder="데이터 입력"/>
            <el-button @click="save">전송</el-button>
            <el-button @click="close">닫기</el-button>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            child:true,
            parentData:'',
        }
    },
    methods: {
        save(){
            this.$store.commit("save", this.parentData)
            this.$emit('close')
            this.child=false
        },
        close(){
            this.$emit('close')
            this.child=false
        }

    }
}
</script>

<style scoped>

</style>