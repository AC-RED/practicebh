<template>
  <div class="cover-image">
      <div v-for="(item,index) in list" :key="index" class="cover-item">
          <img src="../../assets/img/pic_bg.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  props: ['list']
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
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
