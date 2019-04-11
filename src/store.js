import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dices: [],
    upperScores: [],
    gameRound: Number,
    rollRound: Number
  },
  mutations: {
    initGame (state) {
      state.dices=[{side:1,locked:false},{side:1,locked:false},{side:1,locked:false},{side:1,locked:false},{side:1,locked:false}]
      state.upperScores=[
        {name:'Aces',dices:[]},
        {name:'Twos',dices:[]},
        {name:'Threes',dices:[]}

      ]
      state.gameRound=0
      state.rollRound=0
    },
    roll (state) {
      if (state.rollRound >=3) {
        return
      }
      for (let i = 0; i < state.dices.length; i++) {
        if (!state.dices[i].locked) {
          state.dices[i].side=Math.floor(Math.random()*6+1) 
        }        
      }
      state.rollRound++
    },
    lockDice (state, index) {
      if (state.rollRound===0) {
        return
      }
      state.dices[index].locked = !state.dices[index].locked 
    },
    selectUpperScore (state, index) {
      if (state.rollRound ==0 || state.upperScores[index].dices.length>0) {
         return
      }  
      state.rollRound=0
      state.gameRound++
      state.upperScores[index].dices=state.dices.map(d=>d.side)      
      for (const dice of state.dices) {
        dice.locked=false
      }
    }
  },
  actions: {
    roll () {
      this.commit('roll')
    },
    lockDice (state, index) {
      this.commit('lockDice',index)
    },
    selectUpperScore (state, index) {
      this.commit('selectUpperScore',index)
    }
  }
})
