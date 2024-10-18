<template>
    <div class="input-div">
        <span class="input-span">PDF所在目录</span>
        <input class="input-class" v-model="path" placeholder="请选择目录文件" />
    </div>
</template>

<style scoped>
.input-div{
    padding: 10px 0;
    border-bottom: 1px solid #eeeeee;
    font-size: 14px;
}
.input-span{
    color: #666666;
}
.input-class{
    border:1px solid #eeeeee;
    padding: 4px 10px;
    border-radius: 4px;
    color: #333333;
    margin-left: 10px;
    width: 400px;
    height: 40px;
    line-height: 40px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "SampleSettingTabPage",
    data() {
        return {
            path: `D:/\文件/\pdf`
        }
    },
    methods: {
        
    }
})
</script>