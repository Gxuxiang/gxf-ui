<template>
  <div class="gxf-board">
    <div class="gxf-board-item" :style="{'background':item.bgColor,'color':item.color}" v-for="(item, index) in dataList" :key="index">
      <div class="gxf-board-item-text gborder">{{item.t1}}</div>
      <div class="gxf-board-item-text gborder">{{item.t2}}</div>
      <div class="gxf-board-item-text gborder">{{item.t3}}</div>
    </div>
  </div>
</template>
<script>
export default {
  //   props: [
  //     'dataList'
  //   ],
  data () {
    return {
      dataList: [
        {
          t1: "总数",
          t2: 123,
          t3: '10%',
          bgColor: 'aqua',
          color: '#fff',
        },
        {
          t1: "总数",
          t2: 123,
          t3: '10%',
          bgColor: 'red',
          color: '#fff',
        },
        {
          t1: "总数",
          t2: 123,
          t3: '10%',
          bgColor: 'red',
          color: '#fff',
        },
      ]
    }
  }
}
</script>
<style scoped>
.gxf-board {
  display: flex;
  flex-wrap: wrap;
}

.gxf-board-item {
  margin: 10px;
  width: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
.gxf-board-item-text {
  margin: 10px;
  font-size: 30px;
}
</style>