<template>
  <div class="dragDialog">
    <el-dialog v-model="dialogVisible" draggable destroyOnClose :fullscreen="fullscreen" :modal="false"
      :close-on-click-modal="false" :width="width"  @close="handleDestroy">
      <template #header="{ close, titleId, titleClass }">
        <div class="dialog-header">
         <div class="dialog-box">
           <div class="dialog-icon" v-if="urlshow.active">
             <el-image style="width: 80%; height: 80%;border-radius: 50%;" :src="urlshow.icon" />
           </div>
           <span :id="titleId" :class="titleClass">{{ title }}</span>
           <el-icon @click="handleFull" class="el-dialog__headerbtn" style="margin-right: 35px" title="全屏">
             <FullScreen/>
           </el-icon>
         </div>
        </div>
      </template>
      <slot></slot>
      <template v-if="footer" #footer>
        <div class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="handleSubmit">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue'

/** 组件入口 */
defineProps({
  title: {
    type: [String],
    required: false,
    default: ''
  },
  width: {
    type: [String],
    required: false,
    default: '500'
  },
  footer: {
    type: [Boolean],
    required: false,
    default: true
  },
  urlshow:{
    type: Object,
    required: false,
    default: {
      icon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      active: false
    }
  }
})
/** 显示 */
const dialogVisible = ref(false)
const show = () => {
  dialogVisible.value = true
}
/** 关闭 */
const close = () => {
  dialogVisible.value = false
}
const handleDestroy = () => {
  emit('close')
}
const emit = defineEmits(['submit', 'close'])
/** 确认 */
const handleSubmit = () => {
  emit('submit')
}
/** 全屏 */
const fullscreen = ref(false)
const handleFull = () => {
  fullscreen.value = !fullscreen.value
}
/** 组件出口 */
defineExpose({
  dialogVisible,
  show,
  close
})
</script>
<style lang="scss" scoped>
.dragDialog {
  //pointer-events: none;

  .dialog-header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .dialog-box{
      display: flex;
      align-items: center;
      .dialog-icon{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #FFFFFF;
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

:deep(.el-dialog) {
  padding: 0;
  //border-radius: 08px;
  overflow: hidden;
  //pointer-events: auto;

  .el-dialog__header {
    padding: 10px 20px;
    height: 40px;
    background: #75A6F9;

    .el-dialog__title {
      font-family:Source Han Sans;
      font-weight: 700;
      font-size: 18px;
      color: #FFFFFF;
      font-style: normal;
      text-transform: none;
    }

    .el-dialog__headerbtn {
      margin: 13px 10px 13px 0;
      height: 14px;
      width: 14px;
      font-size: var(--el-message-close-size, 18px);
      color: #FFFFFF;

      .el-dialog__close{
        color: #FFFFFF;
        font-size: 18px;
        margin-top: -5px;

      }
    }
  }

  .el-dialog__body {
    margin: 16px 20px;
    //padding: 22px 27px;
    //border: 1px solid #979797;
    height: calc(100% - 34px - 42px);
  }

  .el-dialog__footer {
    padding: 0 20px 30px;
  }


}
</style>
