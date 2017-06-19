/**
 * Created by zhongchengyong on 2017/5/9.
 */
export default {
  plusScore(state, addScore){
    state.score+=addScore
  },
  minusScore(state, minusScore){
    state.score-=minusScore
  }
}
