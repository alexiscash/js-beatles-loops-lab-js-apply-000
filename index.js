// add solution here

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments) {
  let beatles = [];
  
  for (let i = 0; i <= musicians.length-1; i++) {
    beatles.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatles;
}

