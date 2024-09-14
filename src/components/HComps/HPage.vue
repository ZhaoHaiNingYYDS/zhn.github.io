<template>
  <div class="q-page-box">
    <el-pagination
        background
        size="small"
        v-model:current-page="props.page.pageNum"
        v-model:page-size="props.page.pageSize"
        :page-sizes="[10, 20, 30, 40, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="props.page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup>
const props = defineProps(['page'])
const emit = defineEmits(["change"]);
const handleSizeChange = (val) => {
  emit("change", {
    pageNum: 1,
    pageSize: val
  })
}
const handleCurrentChange = (val) => {
  emit("change", {
    pageNum: val,
    pageSize: props.page.pageSize
  })
}
</script>
<style scoped lang="scss">
$pageNation-h:32px;
.q-page-box {
  height: $pageNation-h;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
