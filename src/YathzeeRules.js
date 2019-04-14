export const englishSmallStraight= function (arr) {
  if(arr.length==0){
    return 0
  }
  let sides=[false,false,false,false,false,false]
  for (const dice of arr) {
    sides[dice.side-1]=true
  }
  if(sides[0]&&sides[1]&&sides[2]&&sides[3]){
    return 30
  }
  if(sides[1]&&sides[2]&&sides[3]&&sides[4]){
    return 30
  }
  if(sides[2]&&sides[3]&&sides[4]&&sides[5]){
    return 30
  }
  return 0
}