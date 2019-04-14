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
    rollRound: Number
  },
  mutations: {
    initGame (state) {
      state.dices=[{side:1,isInteractive:false,locked:false},{side:1,isInteractive:false,locked:false},{side:1,isInteractive:false,locked:false},{side:1,isInteractive:false,locked:false},{side:1,isInteractive:false,locked:false}]
      state.upperScores=[
        {name:'Aces',description:'Any combination',score:'The sum of dice with the number 1',dices:[],rule:rules.aces},
        {name:'Twos',description:'Any combination',score:'The sum of dice with the number 2',dices:[],rule:rules.twos},
        {name:'Threes',description:'Any combination',score:'The sum of dice with the number 3',dices:[],rule:rules.threes},
        {name:'Fours',description:'Any combination',score:'The sum of dice with the number 4',dices:[],rule:rules.fours},
        {name:'Fives',description:'Any combination',score:'The sum of dice with the number 5',dices:[],rule:rules.fives},
        {name:'Sixes',description:'Any combination',score:'The sum of dice with the number 6',dices:[],rule:rules.sixes},
        {name:'Bonus',description:'If more than 63',score:'50',dices:[],rule: {
          validator: ()=> false,
          points:()=> {
            let sum=0;
            for (let i = 0; i < state.upperScores.length-1; i++) {
              const score = state.upperScores[i];
              if(score.dices&&score.scoreFunc){
                sum+=score.scoreFunc(score.dices)
              }
            }
            if (sum >= 63) {
              return 50
            }
            return 0
          }
        }
        }
      ]
      state.lowerScores=[
        {name:'Three Of A Kind',description:'At least three dice the same',score:'Sum of three',dices:[],rule:rules.threeOfAKind},
        {name:'Four Of A Kind',description:'At least four dice the same',score:'Sum of four',dices:[],rule:rules.fourOfAKind},
        {name:'Full House',description:'Three of one number and two of another',score:'Sum of all dice',dices:[],rule:rules.fullHouse},
        {name:'Small Straight',description:'Five sequential dice (1-2-3-4-5)',score:'15',dices:[],rule: rules.smallStraight},
        {name:'Large Straight',description:'Five sequential dice (2-3-4-5-6)',score:'20',dices:[],rule:rules.largeStraight},
        {name:'Yahtzee',description:'All five dice the same',score:'50',dices:[],rule:rules.yahtzee},
        {name:'Chance',description:'Any combination',score:'Sum of all dice',dices:[],rule:rules.chance}
      ]
      state.totalScore={name:'Total',description:'Any combination',score:'The sum of dice with the number 6',dices:[],rule: {
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
      if (state.rollRound ==0 || state.lowerScores[index].dices.length>0) {
         return
      }  
      state.lowerScores[index].dices=state.dices.map(d=>{return {side:d.side,isInteractive:false,locked:false}})      
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
