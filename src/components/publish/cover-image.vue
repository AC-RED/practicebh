<template>
  <div class="cover-image">
    <div @click="openDialog(index)" v-for="(item,index) in list" :key="index" class="cover-item">
      <img :src="item ? item : defaultImg" alt />
    </div>
    <el-dialog :visible="dialogVisible" @close='closeDialog'>
        <select-image @selectOneImg = 'receiveImg'></select-image>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      dialogVisible: false,
      defaultImg: require('../../assets/img/pic_bg.png'),
      selectIndex: -1
    }
  },
  methods: {
    //   监听子标签<select-image>的事件用于子传父
    receiveImg (img) {
    //   由于用于生成图片的list是props，只读，所以只能把参数再传到上一级，在上一级内修改list内容
      this.$emit('clickOneImg', img, this.selectIndex)
      this.closeDialog()
    },
    openDialog (index) {
      this.selectIndex = index
      this.dialogVisible = true
    },
    closeDialog () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang='less' scoped>
.cover-image {
  display: flex;
  margin: 20px 0;
  margin-left: 100px;
  .cover-item {
    border: 1px solid gray;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
