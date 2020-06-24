function dwarfRollCall(dwarves) {
  let string = '';
  for (let i = 0; i < dwarves.length; i++) {
    string += (`${i +1}. ${dwarves[i]} `)
  } return string
}


function summonCaptainPlanet(planeteerCalls) {
  let array = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    array.push(`${planeteerCalls[i].toUpperCase()}!`)
  } return array
}

// function longPlaneteerCalls(words) {
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 4) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    return (words[i].length > 4) 
  }
}

function findTheCheese (foods) {
  let cheese = ["cheddar", "gouda", "camembert"]
  for (let i = 0; i < foods.length; i++) {
    let cheeseIdx = cheese.indexOf(foods[i])
  }
}
