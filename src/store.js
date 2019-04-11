import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dices: [],
    gameRound: Number,
    rollRound: Number
  },
  mutations: {
    initGame (state) {
      state.dices=[{side:1,locked:false},{side:1,locked:false},{side:1,locked:false},{side:1,locked:false},{side:1,locked:false}]
      state.gameRound=0
      state.rollRound=0
    },
    roll (state) {
      for (let i = 0; i < state.dices.length; i++) {
        if (!state.dices[i].locked) {
          state.dices[i].side=Math.floor(Math.random()*6+1) 
        }        
      }
      
      state.rollRound++
      if (state.rollRound >=3) {
        state.rollRound=0
        state.gameRound++
      }
    },
    lockDice (state, index) {
      state.dices[index].locked = !state.dices[index].locked 
    }
  },
  actions: {
    roll () {
      this.commit('roll')
    },
    lockDice (state, index) {
      this.commit('lockDice',index)
    }
  }
})
