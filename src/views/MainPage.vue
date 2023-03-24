<template>
    <div>
        <child-page
            type="text"
            v-if="child"
            @close="child=false"
        />
        <el-button @click="child=true">자식-부모</el-button>
        <p/>
        {{ this.$store.state.showData }} 
        <!--전역으로 공유한 데이터 설정-->
        <p/>

        <parent-page
            type="text"
            v-if="parent"
            @close="parent=false"
        />
        <input v-model="parentData" placeholder="데이터 입력"/>
        <el-button @click="save">부모-자식 전송</el-button>
        <p/>

        <sub-child-page
            type="text"
            v-if="subChild"
            @close="subChild=false"
        />
        <el-button @click="subChild=true">부모-자손</el-button>

    </div>
</template>

<script>
import ChildPage from './ChildPage.vue'
import SubChildPage from './descendants/SubChildPage.vue'
import ParentPage from './ParentPage.vue'
export default {
    components: {ChildPage, ParentPage, SubChildPage},
    data() {
        return {
            child:false,
            parent:false,
            subChild:false,
            parentData:'',
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        save(){
            this.$store.commit("save", this.parentData)
            this.$emit('close')
            this.parent = true
        }

    }
}
</script>

<style scoped>

</style>