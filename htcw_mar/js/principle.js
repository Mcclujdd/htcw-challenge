var creatureType = [
  "Witch",
  "Dragon",
  "Snake",
  "River Troll"
];

var minStats = [
  30,
  50,
  60,
  80
];
var maxStats =[
  60,
  90,
  92
];

/*initial health and strength values generate
randomly within min/max parameters based on creature type.*/
var minS;
var minH;

function healthGen(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)+min);
};

function strGen(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min)+min);
};

if (creatureType.indexOf(0)) {
  return maxStats.0
}
