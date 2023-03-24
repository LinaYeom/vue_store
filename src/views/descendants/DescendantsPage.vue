<template>
    <div>
        <el-dialog
            title="자식-자손"
            width="30%"
            :visible.sync="descendants"
            center
            :close-on-click-descendants="false"
            :close-on-press-escape="false"  
         >
            
            <label>descendants 컴포넌트입니다.</label><p/>
            <label>할머니로 부터 받은 데이터</label><p/>
            <!-- {{ this.$store.state.showData }} -->
            {{ this.$store.state.showData ="데이터를 바로 넣기" }}
            <p/>
            <el-button @click="close" >닫기</el-button>

            <sub-descendants-page
                type="text"
                v-if="uncle"    
                @close="uncle=false"
            />
            <el-button @click="uncle=true">자손 형제</el-button>
        </el-dialog>
    </div>
</template>

<script>
import SubDescendantsPage from '@/views/descendants/SubDescendantsPage.vue'

export default {
  components: { SubDescendantsPage },

    data() {
        return {
            descendants:true,
            showData:'',
            uncle:false 
        }
    },
    setup() {},
    created() {},
    computed:{

    },
    mounted() {},
    unmounted() {},
    methods:{
        close(){
            this.$store.state.showData = "바뀐 데이터"
            this.descendants=false
            this.uncle=false 
            this.$emit('close')

        }
    }
}

</script>

<style scoped>

</style>