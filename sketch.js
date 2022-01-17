let shape1;
let shape2;
let shape3;
let cat;
let shirt;
let apron;
let cap;

function preload(){
cat =loadImage("assets/0.png");
apron =loadImage("assets/2.png");
cap =loadImage("assets/5.png");

}



function setup() {
  createCanvas(1000,600);
  alert("drag items to dress the cat")

  let g = 0.3


  shape1 = new Draggable(cat,300, 70,894*g,1735*g);
  shape2 = new Draggable(apron,100, 70,502*g,951*g);
  shape3 = new Draggable(cap,700, 70,241*g,238*g);
}

function draw() {
  background("pink");
  // shape1.over();
  // shape1.update();
  shape1.show();

  shape2.over();
  shape2.update();
  shape2.show();

  shape3.over();
  shape3.update();
  shape3.show();



}

function mousePressed() {
  //shape1.pressed();
  shape2.pressed();
  shape3.pressed();

  ellipse(pmouseX,pmouseY,20,20)
  




}

function mouseReleased() {
  //shape1.released();
  shape2.released();
  shape3.released();
}