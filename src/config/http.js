/*fixme 重构时将方法抽取出来*/
export default {
  async http(vm,type, url, params){
    let data;
    type = type.toUpperCase();
    if ('GET' === type) {
     vm.$http.get(url, params).then(res => {
        data = res.body.data;
      })
    } else if ('POST' === type) {
      vm.$http.post(url, params).then(res => {
        data = res.body.data;
      })
    }
    return data;
  },

}
