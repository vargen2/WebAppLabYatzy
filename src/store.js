import Vue from 'vue'
import Vuex from 'vuex'
import * as rules from './SwedishRules.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dices: [],
    upperScores: [],
    lowerScores: [],
    totalScore: Object,
    gameRound: Number,
    rollRound: Number,
    showDesc: Boolean
  },
  setters:{

  }
  ,
  mutations: {
    initGame (state) {
      state.dices=[{side:1,isInteractive:false,locked:false},{side:1,isInteractive:false,locked:false},{side:1,isInteractive:false,locked:false},{side:1,isInteractive:false,locked:false},{side:1,isInteractive:false,locked:false}]
      state.upperScores=rules.upperScores
      state.lowerScores=rules.lowerScores
      state.totalScore={name:'Total',description:'Total Points',score:'The sum of all points',dices:[],rule: {
        validator: ()=> false,
        points:()=> {
                  let sum=0;
        for (const score of state.upperScores) {
          sum+=score.rule.points(score.dices)
        }
        for (const score of state.lowerScores) {
          sum+=score.rule.points(score.dices)
        }

        return sum
      }}}
      state.gameRound=0
      state.rollRound=0
      state.showDesc=false
    },
    roll (state) {
      if (state.rollRound >=3) {
        return
      }
      for (let i = 0; i < state.dices.length; i++) {
        state.dices[i].isInteractive=true
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
        dice.isInteractive=false
      }
    },
    selectUpperScore (state, index) {
      if (state.rollRound ==0 || state.upperScores[index].dices.length>0) {
         return
      }  
      state.upperScores[index].dices=state.dices.map(d=>{return {side:d.side,isInteractive:false,locked:false}})      
      this.commit('resetRound')
    },
    selectLowerScore (state, index) {
      if (state.rollRound ==0 || state.lowerScores[index].dices.length>0 || !state.lowerScores[index].rule.validator(state.dices)) {
         return
      }  
      state.lowerScores[index].dices=state.dices.map(d=>{return {side:d.side,isInteractive:false,locked:false}})      
      this.commit('resetRound')
    },
    showDesc(state){
      state.showDesc= !state.showDesc
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
