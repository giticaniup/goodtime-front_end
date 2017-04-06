<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <mt-button type="primary">中文</mt-button>
    <mt-button type="primary">primary1</mt-button>
  </div>
</template>

<script>
import {Toast, Button} from 'mint-ui'
export default {
  name: 'chat',
  data () {
    return {
      title: '聊天程序'
    }
  },
  components: {
    Toast: Toast,
    mtButton: Button
  }
}
Toast('测试')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
