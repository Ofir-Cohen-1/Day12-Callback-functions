const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
   ];

//    let merged = [].concat.apply([], listOfNeighbours);

//    for (let i = 0; i < merged.length; i++) {
//     merged[i] = 'Neighbour: ' + merged[i]; 
//    }
//    console.log(merged);

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
      console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
  }