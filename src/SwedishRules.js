
const anyValidator = function (arr) {
  if (arr.length === 0) {
    return false
  }
  return true
}

const acesPoints = function (arr) {
  return arr.map(d => d.side).filter(a => a === 1).reduce((a, b) => a + b, 0)
}

const aces = {
  maxPoints: 1 * 5,
  validator: anyValidator,
  points: acesPoints
}

const twosPoints = function (arr) {
  return arr.map(d => d.side).filter(a => a === 2).reduce((a, b) => a + b, 0)
}

const twos = {
  maxPoints: 2 * 5,
  validator: anyValidator,
  points: twosPoints
}

const threesPoints = function (arr) {
  return arr.map(d => d.side).filter(a => a === 3).reduce((a, b) => a + b, 0)
}

const threes = {
  maxPoints: 3 * 5,
  validator: anyValidator,
  points: threesPoints
}

const foursPoints = function (arr) {
  return arr.map(d => d.side).filter(a => a === 4).reduce((a, b) => a + b, 0)
}

const fours = {
  maxPoints: 4 * 5,
  validator: anyValidator,
  points: foursPoints
}

const fivesPoints = function (arr) {
  return arr.map(d => d.side).filter(a => a === 5).reduce((a, b) => a + b, 0)
}

const fives = {
  maxPoints: 5 * 5,
  validator: anyValidator,
  points: fivesPoints
}

const sixesPoints = function (arr) {
  return arr.map(d => d.side).filter(a => a === 6).reduce((a, b) => a + b, 0)
}

const sixes = {
  maxPoints: 6 * 5,
  validator: anyValidator,
  points: sixesPoints
}

const smallStraightValidator = function (arr) {
  if (arr.length === 0) {
    return false
  }
  let sides = [false, false, false, false, false, false]
  for (const dice of arr) {
    sides[dice.side - 1] = true
  }
  if (sides[0] && sides[1] && sides[2] && sides[3] && sides[4]) {
    return true
  }
  return false
}

const smallStraightPoints = function (arr) {
  if (smallStraightValidator(arr)) { return 15 }
  return 0
}

const smallStraight = {
  maxPoints: 15,
  validator: smallStraightValidator,
  points: smallStraightPoints
}

const largeStraightValidator = function (arr) {
  if (arr.length === 0) {
    return false
  }
  let sides = [false, false, false, false, false, false]
  for (const dice of arr) {
    sides[dice.side - 1] = true
  }
  if (sides[1] && sides[2] && sides[3] && sides[4] && sides[5]) {
    return true
  }
  return false
}

const largeStraightPoints = function (arr) {
  if (largeStraightValidator(arr)) { return 20 }
  return 0
}

const largeStraight = {
  maxPoints: 20,
  validator: largeStraightValidator,
  points: largeStraightPoints
}

const yahtzeeValidator = function (arr) {
  if (arr.length === 0) {
    return false
  }
  let first = arr[0].side
  for (const dice of arr) {
    if (first !== dice.side) {
      return false
    }
  }
  return true
}

const yahtzeePoints = function (arr) {
  if (yahtzeeValidator(arr)) { return 50 }
  return 0
}

export const yahtzee = {
  maxPoints: 50,
  validator: yahtzeeValidator,
  points: yahtzeePoints
}

const chancePoints = function (arr) {
  return arr.map(d => d.side).reduce((a, b) => a + b, 0)
}

const chance = {
  maxPoints: 30,
  validator: anyValidator,
  points: chancePoints
}

const fullHouseValidator = function (arr) {
  let sides = [0, 0, 0, 0, 0, 0]
  for (const dice of arr) {
    sides[dice.side - 1]++
  }
  let threes = false
  let pairs = false
  for (const side of sides) {
    if (side === 3) {
      threes = true
    } else if (side === 2) {
      pairs = true
    }
  }
  if (threes && pairs) {
    return true
  }
  return false
}

const fullHousePoints = function (arr) {
  if (fullHouseValidator(arr)) { return arr.map(d => d.side).reduce((a, b) => a + b, 0) }
  return 0
}

const fullHouse = {
  maxPoints: 28,
  validator: fullHouseValidator,
  points: fullHousePoints
}

const threeOfAKindValidator = function (arr) {
  let sides = [0, 0, 0, 0, 0, 0]
  for (const dice of arr) {
    sides[dice.side - 1]++
  }

  for (const side of sides) {
    if (side >= 3) {
      return true
    }
  }
  return false
}

const threeOfAKindPoints = function (arr) {
  if (threeOfAKindValidator(arr)) {
    let sides = [0, 0, 0, 0, 0, 0]
    for (const dice of arr) {
      sides[dice.side - 1]++
    }

    for (var i = 0; i < sides.length; i++) {
      if (sides[i] >= 3) {
        return (i + 1) * 3
      }
    }
  }
  return 0
}

const threeOfAKind = {
  maxPoints: 18,
  validator: threeOfAKindValidator,
  points: threeOfAKindPoints
}

const fourOfAKindValidator = function (arr) {
  let sides = [0, 0, 0, 0, 0, 0]
  for (const dice of arr) {
    sides[dice.side - 1]++
  }

  for (const side of sides) {
    if (side >= 4) {
      return true
    }
  }
  return false
}

const fourOfAKindPoints = function (arr) {
  if (fourOfAKindValidator(arr)) {
    let sides = [0, 0, 0, 0, 0, 0]
    for (const dice of arr) {
      sides[dice.side - 1]++
    }

    for (var i = 0; i < sides.length; i++) {
      if (sides[i] >= 4) {
        return (i + 1) * 4
      }
    }
  }
  return 0
}

const fourOfAKind = {
  maxPoints: 24,
  validator: fourOfAKindValidator,
  points: fourOfAKindPoints
}

const onePairValidator = function (arr) {
  let sides = [0, 0, 0, 0, 0, 0]
  for (const dice of arr) {
    sides[dice.side - 1]++
  }

  for (const side of sides) {
    if (side >= 2) {
      return true
    }
  }
  return false
}

const onePairPoints = function (arr) {
  if (onePairValidator(arr)) {
    let sides = [0, 0, 0, 0, 0, 0]
    for (const dice of arr) {
      sides[dice.side - 1]++
    }
    var maxPair = 0
    for (var i = 0; i < sides.length; i++) {
      if (sides[i] >= 2) {
        maxPair = Math.max(maxPair, (i + 1) * 2)
      }
    }
    return maxPair
  }
  return 0
}

const onePair = {
  maxPoints: 12,
  validator: onePairValidator,
  points: onePairPoints
}

const twoPairsValidator = function (arr) {
  let sides = [0, 0, 0, 0, 0, 0]
  for (const dice of arr) {
    sides[dice.side - 1]++
  }
  var count = 0
  for (const side of sides) {
    if (side >= 2) {
      count++
    }
  }
  return count === 2
}

const twoPairsPoints = function (arr) {
  if (twoPairsValidator(arr)) {
    let sides = [0, 0, 0, 0, 0, 0]
    for (const dice of arr) {
      sides[dice.side - 1]++
    }
    var sum = 0
    for (var i = 0; i < sides.length; i++) {
      if (sides[i] >= 2) {
        sum += (i + 1) * 2
      }
    }
    return sum
  }
  return 0
}

const twoPairs = {
  maxPoints: 22,
  validator: twoPairsValidator,
  points: twoPairsPoints
}

export const upperScores = [
  { name: 'Aces', description: '(Key 1) Sum of Ones', score: 'The sum of dice with the number 1', dices: [], rule: aces, keyCode: 49 },
  { name: 'Twos', description: '(Key 2) Sum of Twos', score: 'The sum of dice with the number 2', dices: [], rule: twos, keyCode: 50 },
  { name: 'Threes', description: '(Key 3) Sum of Threes', score: 'The sum of dice with the number 3', dices: [], rule: threes, keyCode: 51 },
  { name: 'Fours', description: '(Key 4) Sum of Fours', score: 'The sum of dice with the number 4', dices: [], rule: fours, keyCode: 52 },
  { name: 'Fives', description: '(Key 5) Sum of Fives', score: 'The sum of dice with the number 5', dices: [], rule: fives, keyCode: 53 },
  { name: 'Sixes', description: '(Key 6) Sum of Sixes', score: 'The sum of dice with the number 6', dices: [], rule: sixes, keyCode: 54 },
  { name: 'Bonus',
    description: '50p if sum of Aces to Sixes more than 63',
    score: '50',
    dices: [],
    rule: {
      maxPoints: 50,
      nonInteractive: true,
      validator: () => false,
      points: () => {
        let sum = 0
        for (let i = 0; i < upperScores.length - 1; i++) {
          const score = upperScores[i]
          if (score.dices && score.scoreFunc) {
            sum += score.scoreFunc(score.dices)
          }
        }
        if (sum >= 63) {
          return 50
        }
        return 0
      }
    }
  },
  { name: 'Yahtzee', description: '(Key L) All five same', score: '50', dices: [], rule: yahtzee, keyCode: 76 }
]

export const lowerScores = [
  { name: 'One Pair', description: '(Key A) One pair', score: 'Sum of pair', dices: [], rule: onePair, keyCode: 65 },
  { name: 'Two Pairs', description: '(Key S) Two pair of different dice', score: 'Sum of pairs', dices: [], rule: twoPairs, keyCode: 83 },
  { name: 'Three Of A Kind', description: '(Key D) Three of same', score: 'Sum of three', dices: [], rule: threeOfAKind, keyCode: 68 },
  { name: 'Four Of A Kind', description: '(Key F) Four of same', score: 'Sum of four', dices: [], rule: fourOfAKind, keyCode: 70 },
  { name: 'Small Straight', description: '(Key G) 1-2-3-4-5', score: '15', dices: [], rule: smallStraight, keyCode: 71 },
  { name: 'Large Straight', description: '(Key H) 2-3-4-5-6', score: '20', dices: [], rule: largeStraight, keyCode: 72 },
  { name: 'Full House', description: '(Key J) Three of same, two of another', score: 'Sum of all dice', dices: [], rule: fullHouse, keyCode: 74 },
  { name: 'Chance', description: '(Key K) Any combination', score: 'Sum of all dice', dices: [], rule: chance, keyCode: 75 }
  

]

export const maxGameRound = 15
