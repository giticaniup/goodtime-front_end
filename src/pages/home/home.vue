<template>
  <div>
    <head-top></head-top>
    <div class="city_nav">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请从下列的城市列表中选取</span>
      </div>
      <router-link :to="'/city/' + guessCityid" class="guess_city">
        <span>{{guessCity}}</span>
        <svg class="arrow_right">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
        </svg>
      </router-link>
    </div>
    <section id="hot_city_container">
      <h4 class="city_title">热门城市</h4>
      <ul class="citylistul clear">
        <router-link tag="li" v-for="item in hotCity" :to="'/city/' + item.id" :key="item.id">
          {{item.name}}
        </router-link>
      </ul>
    </section>
<!--    <section class="group_city_container">
      <h4 class="city_title">城市列表</h4>
      <ul class="citylistul clear">
        <li v-for="(value,key,index) in sortGroupCity" :key="key" class="letter_classify_li">
          <h4 class="city_title">{{key}}
            <span v-if="index===0">(按字母排序)</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
              <router-link tag="li" v-for="item in value" :to='"/city/"+item.id' :key="item.id" class="ellipsis">
                {{item.name}}
              </router-link>
          </ul>
        </li>
&lt;!&ndash;        <router-link tag="li" v-for="item in sortGroupCity" :to="'/city/' + item.id" :key="item.id">
          {{item.name}}
        </router-link>&ndash;&gt;
      </ul>
    </section>-->
    <section>
      <ul>
        <li v-for="(value, key, index) in sortGroupCity" :key="key"  class="letter_classify_li">
          <h4 class="city_title">{{key}}
                        <span v-if="index == 0">（按字母排序）</span>
          </h4>
          <ul class="groupcity_name_container citylistul clear">
            <router-link  tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id" class="ellipsis">
              {{item.name}}
            </router-link>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import headTop from '../../components/header/head'
  import http from '../../config/http'
  export default{
    data(){
      return {
        guessCityid: '',
        guessCity: '',
        hotCity: [],
        sortGroupCity: []
      }
    },
    components: {
      headTop,
    },
    mounted(){
      let vm = this;
      vm.$http.get('/goodtime/city/guess/1/1').then(res => {
        vm.guessCityid = res.body.data.id;
        vm.guessCity = res.body.data.name;
      });

      vm.$http.get('/goodtime/hotcity').then(res => {
        vm.hotCity = res.body.data;
      });

      vm.$http.get('/goodtime/cityJson').then(res => {
        vm.sortGroupCity = res.body.data;
      })

    }
  }
</script>
<style lang="scss" scoped>
  @import "../../style/mixin";

  .city_nav {
    padding-top: 3rem;
    border-top: 1px solid $bc;
    background-color: #fff;
    margin-bottom: 0.4rem;
    .city_tip {
      @include fj;
      line-height: 1.5rem;
      padding: 0 0.45rem;
      span:nth-of-type(1) {
        @include sc(0.9rem, #666);
      }
      span:nth-of-type(2) {
        font-weight: 900;
        @include sc(0.7rem, #9f9f9f);
      }
    }
    .guess_city {
      @include fj;
      align-items: center;
      height: 3.5rem;
      padding: 0 0.45rem;
      border-top: 1px solid $bc;
      border-bottom: 2px solid $bc;
      @include font(1.5rem, 1.8rem);
      span:nth-of-type(1) {
        color: $blue;
      }
      .arrow_right {
        @include wh(.6rem, .6rem);
        fill: #999;
      }
    }
  }

  #hot_city_container {
    background-color: #ffffff;
    margin-bottom: 0.4rem;
  }

  .city_title {
    color: #666;
    font-weight: 400;
    text-indent: 0.45rem;
    border-top: 2px solid $bc;
    border-bottom: 1px solid $bc;
    @include font(0.9rem, 1.8rem, "Helvetica Neue");
    span {
      @include sc(0.475rem, #999);
    }
  }

  .citylistul {
    li {
      float: left;
      text-align: center;
      color: $blue;
      border-bottom: 0.025rem solid $bc;
      border-right: 0.025rem solid $bc;
      @include wh(25%, 2.5rem);
      @include font(1rem, 1.75rem);
    }
    li:nth-of-type(4n) {
      border-right: none;
    }
  }

  .letter_classify_li{
    margin-bottom: 0.4rem;
    background-color: #fff;
    border-bottom: 1px solid $bc;
    .groupcity_name_container{
      li{
        color: #666;
      }
    }
  }
</style>

