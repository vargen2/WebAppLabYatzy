
const anyValidator= function (arr) {
  if(arr.length==0){
    return false
  }
  return true 
}



const acesPoints= function (arr) {
  return  arr.map(d=>d.side).filter(a=>a===1).reduce((a,b) => a + b, 0)
}

export const aces= {
  validator: anyValidator,
  points: acesPoints
}
 
const twosPoints= function (arr) {
  return  arr.map(d=>d.side).filter(a=>a===2).reduce((a,b) => a + b, 0)
}

export const twos= {
  validator: anyValidator,
  points: twosPoints
}

const threesPoints= function (arr) {
  return  arr.map(d=>d.side).filter(a=>a===3).reduce((a,b) => a + b, 0)
}

export const threes= {
  validator: anyValidator,
  points: threesPoints
}

const foursPoints= function (arr) {
  return  arr.map(d=>d.side).filter(a=>a===4).reduce((a,b) => a + b, 0)
}

export const fours= {
  validator: anyValidator,
  points: foursPoints
}

const fivesPoints= function (arr) {
  return  arr.map(d=>d.side).filter(a=>a===5).reduce((a,b) => a + b, 0)
}

export const fives= {
  validator: anyValidator,
  points: fivesPoints
}

const sixesPoints= function (arr) {
  return  arr.map(d=>d.side).filter(a=>a===6).reduce((a,b) => a + b, 0)
}

export const sixes= {
  validator: anyValidator,
  points: sixesPoints
}




const smallStraightValidator= function (arr) {
  if(arr.length==0){
    return false
  }
  let sides=[false,false,false,false,false,false]
  for (const dice of arr) {
    sides[dice.side-1]=true
  }
  if(sides[0]&&sides[1]&&sides[2]&&sides[3]&&sides[4]){
    return true
  }
  return false
}

const smallStraightPoints= function (arr) {
  if(smallStraightValidator(arr))
    return 15
  return 0
}

export const smallStraight= {
  validator: smallStraightValidator,
  points: smallStraightPoints
}



const largeStraightValidator= function (arr) {
  if(arr.length==0){
    return false
  }
  let sides=[false,false,false,false,false,false]
  for (const dice of arr) {
    sides[dice.side-1]=true
  }
  if(sides[1]&&sides[2]&&sides[3]&&sides[4]&&sides[5]){
    return true
  }
  return false
}

const largeStraightPoints= function (arr) {
  if(largeStraightValidator(arr))
    return 20
  return 0
}

export const largeStraight= {
  validator: largeStraightValidator,
  points: largeStraightPoints
}




const yahtzeeValidator= function (arr) {
    if(arr.length==0){
      return false
    }
    let first=arr[0].side
    for (const dice of arr) {
      if(first != dice.side){
        return false
      }
    }
    return true 
}

const yahtzeePoints= function (arr) {
  if(yahtzeeValidator(arr))
    return 50
  return 0
}

export const yahtzee= {
  validator: yahtzeeValidator,
  points: yahtzeePoints
}



const chancePoints= function (arr) {
  return arr.map(d=>d.side).reduce((a,b) => a + b, 0)
}

export const chance= {
  validator: anyValidator,
  points: chancePoints
}








const fullHouseValidator= function (arr) { 
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
      return true
    }
    return false  
}

const fullHousePoints= function (arr) {
  if(fullHouseValidator(arr))
    return arr.map(d=>d.side).reduce((a,b) => a + b, 0)
  return 0
}

export const fullHouse= {
  maxPoints: 28,
  validator: fullHouseValidator,
  points: fullHousePoints
}








const threeOfAKindValidator= function (arr) { 
  let sides= [0,0,0,0,0,0]
  for (const dice of arr) {
    sides[dice.side-1]++
  }
  
  for (const side of sides) {
    if(side >= 3){
      return true
    }    
  }
  return false
}

const threeOfAKindPoints= function (arr) {
  if(threeOfAKindValidator(arr)) {
    let sides= [0,0,0,0,0,0]
    for (const dice of arr) {
      sides[dice.side-1]++
    }
  
    for (var i=0;i<sides.length;i++) {
      if(sides[i] >= 3){
        return (i+1)*3
      }    
    }
  }
  return 0
}

export const threeOfAKind= {
maxPoints: 18,
validator: threeOfAKindValidator,
points: threeOfAKindPoints
}







const fourOfAKindValidator= function (arr) { 
  let sides= [0,0,0,0,0,0]
  for (const dice of arr) {
    sides[dice.side-1]++
  }
  
  for (const side of sides) {
    if(side >= 4){
      return true
    }    
  }
  return false
}

const fourOfAKindPoints= function (arr) {
  if(fourOfAKindValidator(arr)) {
    let sides= [0,0,0,0,0,0]
    for (const dice of arr) {
      sides[dice.side-1]++
    }
  
    for (var i=0;i<sides.length;i++) {
      if(sides[i] >= 4){
        return (i+1)*4
      }    
    }
  }
  return 0
}

export const fourOfAKind= {
maxPoints: 24,
validator: fourOfAKindValidator,
points: fourOfAKindPoints
}