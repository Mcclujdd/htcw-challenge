//objects created for creatures with random health and strength function methods
var witch = {
  type:"Witch",
  strMin:60,
  strMax:80,
  hlthMin:50,
  hlthMax:60,
  health: function(){
    this.hlthMax= Math.floor(this.hlthMax)
    this.hlthMin= Math.ceil(this.hlthMin)
    return Math.floor(Math.random() * (this.hlthMax-this.hlthMin)+this.hlthMin)},
  strength:function(){
    this.strMax= Math.floor(this.strMax)
    this.strMin= Math.ceil(this.strMin)
    return Math.floor(Math.random() * (this.strMax-this.strMin)+this.strMin)}
  };
var dragon = {
  type:"Dragon",
  strMin:80,
  strMax:90,
  hlthMin:80,
  hlthMax:90,
  health: function(){
    this.hlthMax= Math.floor(this.hlthMax)
    this.hlthMin= Math.ceil(this.hlthMin)
    return Math.floor(Math.random() * (this.hlthMax-this.hlthMin)+this.hlthMin)},
  strength:function(){
    this.strMax= Math.floor(this.strMax)
    this.strMin= Math.ceil(this.strMin)
    return Math.floor(Math.random() * (this.strMax-this.strMin)+this.strMin)}
};
var snake = {
  type:"Snake",
  strMin:30,
  strMax:60,
  hlthMin:30,
  hlthMax:90,
  health: function(){
    this.hlthMax= Math.floor(this.hlthMax)
    this.hlthMin= Math.ceil(this.hlthMin)
    return Math.floor(Math.random() * (this.hlthMax-this.hlthMin)+this.hlthMin)},
  strength:function(){
    this.strMax= Math.floor(this.strMax)
    this.strMin= Math.ceil(this.strMin)
    return Math.floor(Math.random() * (this.strMax-this.strMin)+this.strMin)}
};
var riverTroll = {
  type:"River Troll",
  strMin:22,
  strMax:65,
  hlthMin:60,
  hlthMax:92,
  health: function(){
    this.hlthMax= Math.floor(this.hlthMax)
    this.hlthMin= Math.ceil(this.hlthMin)
    return Math.floor(Math.random() * (this.hlthMax-this.hlthMin)+this.hlthMin)},
  strength:function(){
    this.strMax= Math.floor(this.strMax)
    this.strMin= Math.ceil(this.strMin)
    return Math.floor(Math.random() * (this.strMax-this.strMin)+this.strMin)}
};

var creatureObjects = [
  null,
  witch,
  dragon,
  snake,
  riverTroll,
];
function randoCreature(){
  var n = creatureObjects[Math.ceil(Math.random()*(creatureObjects.length-1))];
  return n;
};

/* trying to reference the health cell data and add 1 for use with buttons
function healthModifier(){
 var c = document.getElementById('myTR').children;
 return c[3].innerHTML = (c[3]+1);
};*/

// reference i from fillTable() loop to get the post-populated tr/td data?
/*var healthValue = document.getElementById('myTable').rows.cells;
function healthPlus() {
    healthValue[3].innerHTML += 1;
return healthValue
};*/

/*fills out the table with 100 rows of random creatures and their stats.
Struggling to reference row[current] so I can modify values with onclick.
*/
function fillTable(){
var i;
  for (i=0; i <=100; i++){
    document.write("<tr>");
      document.write("<td>"+"</td>");
      document.write("<td>"+ randoCreature().type + "</td>");
      document.write("<td>"+ randoCreature().strength() +"</td>");
      document.write("<td>"+ randoCreature().health() +"</td>");
      document.write("<td>"+"</td>");
      document.write
          ("<td><button class=plusH onclick=healthPlus()>+</button>"+
          "<button class=minusH onclick=healthModifier()>-</button></td>");
    document.write("</tr>");
  };
};
