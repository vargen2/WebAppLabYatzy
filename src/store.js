import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dices: [],
    upperScores: [],
    lowerScores: [],
    gameRound: Number,
    rollRound: Number
  },
  mutations: {
    initGame (state) {
      state.dices=[{side:1,locked:false},{side:1,locked:false},{side:1,locked:false},{side:1,locked:false},{side:1,locked:false}]
      state.upperScores=[
        {name:'Aces',description:'Any combination',score:'The sum of dice with the number 1',dices:[]},
        {name:'Twos',description:'Any combination',score:'The sum of dice with the number 2',dices:[]},
        {name:'Threes',description:'Any combination',score:'The sum of dice with the number 3',dices:[]},
        {name:'Fours',description:'Any combination',score:'The sum of dice with the number 4',dices:[]},
        {name:'Fives',description:'Any combination',score:'The sum of dice with the number 5',dices:[]},
        {name:'Sixes',description:'Any combination',score:'The sum of dice with the number 6',dices:[]}

      ]
      state.lowerScores=[
        {name:'Three Of A Kind',description:'Any combination',score:'The sum of dice with the number 1',dices:[]},
        {name:'Four Of A Kind',description:'Any combination',score:'The sum of dice with the number 1',dices:[]},
        {name:'Full House',description:'Any combination',score:'The sum of dice with the number 1',dices:[]},
        {name:'Small Straight',description:'Any combination',score:'The sum of dice with the number 1',dices:[]},
        {name:'Large Straight',description:'Any combination',score:'The sum of dice with the number 1',dices:[]},
        {name:'Yahtzee',description:'Any combination',score:'The sum of dice with the number 1',dices:[]},
        {name:'Chance',description:'Any combination',score:'The sum of dice with the number 1',dices:[]}

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
    resetRound(state) {
      if(state.gameRound>=12) {
        return
      }
      state.rollRound=0
      state.gameRound++
      for (const dice of state.dices) {
        dice.locked=false
      }
    },
    selectUpperScore (state, index) {
      if (state.rollRound ==0 || state.upperScores[index].dices.length>0) {
         return
      }  
      state.upperScores[index].dices=state.dices.map(d=>d.side)      
      this.commit('resetRound')
    },
    selectLowerScore (state, index) {
      if (state.rollRound ==0 || state.lowerScores[index].dices.length>0) {
         return
      }  
            state.lowerScores[index].dices=state.dices.map(d=>d.side)      
            this.commit('resetRound')
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
    },
    selectLowerScore (state, index) {
      this.commit('selectLowerScore',index)
    }
  }
})
