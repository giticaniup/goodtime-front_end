<template>
  <div>
    <section class="chat-list" :class="showSelBox>0?'chatlist-bottom-collapse':'chatlist-bottom'">
      <chat-header></chat-header>
    </section>
    <section class="foot">
      <mt-field placeholder="请输入消息" class="con"></mt-field>
      <span class="btn-face" v-on:click="showSelBox=showSelBox==1?0:1"><i class="fa fa-smile-o" aria-hidden="true"></i></span>
      <span class="btn btn-send" v-on:click="sendMsg">发送</span>
    </section>

    <!--    <section class="foot">
          <mt-field id="txtContent" placeholder="请输入消息" class="con" v-model="content"></mt-field>
          <span class="btn-face" v-on:click="showSelBox=showSelBox==1?0:1"><i class="fa fa-smile-o" aria-hidden="true"></i></span>
          <span class="btn-plus" v-on:click="showSelBox=showSelBox==2?0:2"><i class="fa" aria-hidden="true" :class="showSelBox==2?'fa-minus-circle':'fa-plus-circle'"></i></span>
          <span class="btn btn-send" v-on:click="sendMsg">发送</span>
          <section class="selbox" :class="showSelBox>0?'show':'hide'">
            <section v-show="showSelBox==1" class="face-box">
              <mt-swipe :auto="0" :continuous="false">
                <mt-swipe-item v-for="n in Math.ceil(EXPS.length/18)">
                  <li v-for="(item, index) in getEXP(n,18)">
                    <img :src="'static/emotion/'+item.file" alt="" :data="item.code" v-on:click="content+=item.code">
                  </li>
                </mt-swipe-item>
              </mt-swipe>
            </section>
            <div v-show="showSelBox==2">{{selOther}}</div>
          </section>
        </section>-->
  </div>
</template>

<script>
  import ChatHeader from './ChatHeader.vue'

  export default {
    name: 'chat',
    data() {
      return {
        title: 'test',
        showSelBox: 0
      }
    },
    methods: {
      test() {
        let vm = this
        vm.$http.post('/fxiaoke/login', {userName: 'administrator', password: 'admin'}).then((response) => {
          if (response.body.errorCode === 0) {
            Toast('success');
          } else {
            Toast('failure');
          }
        });
      },
      sendMsg(){

      }
    },
    components: {
      ChatHeader,
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .chat-list {
    position: absolute;
    top: 60px;
    bottom: 48px;
    left: 0px;
    right: 0px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 10px;
  }

  .chatlist-bottom {
    bottom: 48px;
  }

  .chatlist-bottom-collapse {
    bottom: 198px;
  }

  .foot {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    background-color: #F8F8F8;
    min-height: 48px;

  }

  .foot .con {
    position: absolute;
    left: 0px;
    right: 100px;
  }

  .btn {
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 45px;
    margin-left: 5px;
    margin-right:5px;
    margin-bottom: 5px;
    padding: 0 12px;
    background-color: #33DF83;
    color: #fff;
    border-radius: 3px;
  }

  .btn-send {
    position: absolute;
    right: 0px;
    top: 8px;
  }

  .foot .btn-face {
    width: 28px;
    padding: 9px 3px 9px 0px;
    position: absolute;
    right: 35px;
    /*border-right: 1px solid #d9d9d9;*/
  }

  .foot .btn-face i {
    font-size: 2em;
    color: #d9d9d9;
  }
</style>
