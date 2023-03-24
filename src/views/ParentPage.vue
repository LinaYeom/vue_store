<template>
    <div>
        <el-dialog
            title="부모-자식 data"
            width="30%"
            center
            :visible.sync="parent"
            :close-on-click-parent="false"
            :close-on-press-escape="false"
        >
        {{ this.$store.state.showData }}
    
            <el-button @click="close">닫기</el-button>
        </el-dialog>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            parent:true,
            showData:'',
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        close(){
            this.$emit('close')
            this.parent=false
        }

    }
}
</script>

<style scoped>

</style>