<template>
  <div>
    <el-button v-show="isPrimary" type="primary" @click="isPrimary = false">主要按钮</el-button>
    <el-button v-show="!isPrimary" type="success" @click="isPrimary = true">成功按钮</el-button>
  </div>
</template>
<script>
export default {
  name: "test",
  data () {
    return {

      isPrimary: true
    }
  },
  methods: {

  }
}
</script>