<template>
    <HDialog title='星河' ref="dialogRef" @submit="handleSubmit"></HDialog>
</template>

<script setup>
let dialogRef = ref()
/** 显示弹框 */
const show = () => {
  dialogRef.value.show()
}

const emit = defineEmits(['change'])
const handleSubmit = () => {
  // 子组件调用父组件的方法 更新父组件的列表数据
  emit('change')
  dialogRef.value.close()
}

/** 组件出口 */
defineExpose({
  show
})

/**
 *
 * 父组件使用子组件
 *
 *  <el-button @click="show">点我</el-button>
 *  <use-dialog ref="dialogRef" @change="handleOk"></use-dialog>
 *
 * <script setup>
 *
 * let dialogRef = ref(null)
 * const show = () => {
 *   dialogRef.value.show()
 * }
 *
 * const handleOk = ()=>{
 *   // 更新
 *   nextTick(()=>{
 *     getList()
 *   })
 * }
 *
 * const getList = ()=>{
 *   let li = {
 *     name: '123',
 *     age: 12
 *   }
 *   console.log(li,'测试')
 * }
 *
 *
 *
 *
 * */

</script>

<style scoped lang="scss">
</style>


