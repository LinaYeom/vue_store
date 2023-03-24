<template>
    <div>
        <el-dialog
            title="부모-자식 SubComponent"
            width="30%"
            :visible.sync="subChild"
            center
            :close-on-click-subChild="false"
            :close-on-press-escape="false"
            
         >
            <label>SubChild 컴포넌트입니다.</label><p/>
            {{ this.$store.state.showData }}
            <p/>

            <descendants-page
                type="text"
                v-if="descendants"
                @close="descendants=false"
            />
            <el-button @click="descendants=true">자식-자손</el-button>
            <el-button @click="close">닫기</el-button>
        </el-dialog>
    </div>
</template>

<script>
import descendantsPage from '@/views/descendants/DescendantsPage.vue'

export default {
  components: { descendantsPage },
    data() {
        return {
            subChild:true,
            descendants:false,
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        close(){
            this.$emit('close')
            this.subChild=false
            this.descendants=false
        }
        }
    }

</script>

<style scoped>

</style>