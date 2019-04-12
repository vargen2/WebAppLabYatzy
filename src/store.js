import Vue from 'vue'
import Vuex from 'vuex'

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
        {name:'Aces',description:'Any combination',score:'The sum of dice with the number 1',dices:[],scoreFunc: arr=> arr.map(d=>d.side).filter(a=>a===1).reduce((a,b) => a + b, 0)},
        {name:'Twos',description:'Any combination',score:'The sum of dice with the number 2',dices:[],scoreFunc: arr=> arr.map(d=>d.side).filter(a=>a===2).reduce((a,b) => a + b, 0)},
        {name:'Threes',description:'Any combination',score:'The sum of dice with the number 3',dices:[],scoreFunc: arr=> arr.map(d=>d.side).filter(a=>a===3).reduce((a,b) => a + b, 0)},
        {name:'Fours',description:'Any combination',score:'The sum of dice with the number 4',dices:[],scoreFunc: arr=> arr.map(d=>d.side).filter(a=>a===4).reduce((a,b) => a + b, 0)},
        {name:'Fives',description:'Any combination',score:'The sum of dice with the number 5',dices:[],scoreFunc: arr=> arr.map(d=>d.side).filter(a=>a===5).reduce((a,b) => a + b, 0)},
        {name:'Sixes',description:'Any combination',score:'The sum of dice with the number 6',dices:[],scoreFunc: arr=> arr.map(d=>d.side).filter(a=>a===6).reduce((a,b) => a + b, 0)},
        {name:'Bonus',description:'If more than 63',score:'35',dices:[],scoreFunc: ()=> {
            let sum=0;
            for (let i = 0; i < state.upperScores.length-1; i++) {
              const score = state.upperScores[i];
              if(score.dices&&score.scoreFunc){
                sum+=score.scoreFunc(score.dices)
              }
            }
            if (sum >= 63) {
              return 35
            }
            return 0
          }
        }
      ]
      state.lowerScores=[
        {name:'Three Of A Kind',description:'At least three dice the same',score:'Sum of all dice',dices:[],scoreFunc: arr=> arr.map(d=>d.side).reduce((a,b) => a + b, 0)},
        {name:'Four Of A Kind',description:'At least four dice the same',score:'Sum of all dice',dices:[],scoreFunc: arr=> arr.map(d=>d.side).reduce((a,b) => a + b, 0)},
        {name:'Full House',description:'Three of one number and two of another',score:'25',dices:[],scoreFunc: (arr)=> {
          let sides= [0,0,0,0,0,0]
          for (const dice of arr) {
            sides[dice.side-1]++
          }
          let threes=false
          let pairs=false
          for (const side of sides) {
            if(side===3){
              threes=true
            } else if(side===2){
              pairs=true        
            }    
          }
          if (threes &&  pairs) {
            return 25
          }
          return 0
        }},
        {name:'Small Straight',description:'Four sequential dice (1-2-3-4, 2-3-4-5, or 3-4-5-6)',score:'30',dices:[]},
        {name:'Large Straight',description:'Five sequential dice (1-2-3-4-5 or 2-3-4-5-6)',score:'40',dices:[]},
        {name:'Yahtzee',description:'All five dice the same',score:'50',dices:[]},
        {name:'Chance',description:'Any combination',score:'Sum of all dice',dices:[]}
      ]
      state.totalScore={name:'Total',description:'Any combination',score:'The sum of dice with the number 6',dices:[]}
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
