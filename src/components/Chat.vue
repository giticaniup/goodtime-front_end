<template>
  <div>
    <Row>
      <Col span="12">col-12</Col>
      <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'chat',
    data() {
      return {
        title: 'test'
      }
    },
    methods: {
      test() {
        let vm = this
        vm.$http.post('/fxiaoke/login', { userName: 'administrator', password: 'admin' }).then((response) => {
          if (response.body.errorCode === 0) {
            Toast('success');
          } else {
            Toast('failure');
          }
        });
      }
    },
    components: {
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
/*.message{
  position: fixed;
  margin-top: 100px;
}*/
.message {
  margin-top: 300px;
}
</style>