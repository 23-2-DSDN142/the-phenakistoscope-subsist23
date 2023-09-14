const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode( OUTPUT_PRINT(A3));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("Cupring", "png")
  pScope.load_image("greeneye" , "png")
  pScope.load_image("blueeye" , "png")
  pScope.load_image("orangeeye" , "png")
  pScope.load_image("smoke_1" , "png")

}

function setup_layers(pScope){

  new PLayer(null, 23);  //lets us draw the whole circle background, ignoring the boundaries

  var layer4 = new PLayer(movingeye);
  layer4.mode( SWIRL(1.3));
  layer4.set_boundary( 990, 985 );


  var layer4 = new PLayer(eye);
  layer4.mode( RING);
  layer4.set_boundary( 0, 1000 );


  var layer2 = new PLayer(cup);
  layer2.mode( RING );
  layer2.set_boundary( 0, 0 );

  var layer2 = new PLayer(beans);
  layer2.mode( SWIRL(1) );
  layer2.set_boundary( 210, 210 );

  var layer3 = new PLayer(smoke);
  layer3.mode( SWIRL(3) );
  layer3.set_boundary( 0, 760 );


  var layer3 = new PLayer(stillcup);
  layer3.mode( SWIRL(1) );
  layer3.set_boundary( 950, 950 );


  var layer2 = new PLayer(spoon);
  layer2.mode( RING );
  layer2.set_boundary( 0, 0 );

 

}

function beans(x, y, animation, pScope){

 
  stroke(255)
  strokeWeight(2)


 fill(125, 75, 0)
 ellipse(465,690,45,70) // .wave is a cosine wave btw
 //coffeebeandetail
 fill(20,9,5)
 ellipse(455,690,15,40) // .wave is a cosine wave btw

 fill(125, 75, 0)
 ellipse(565,-320,45,70) // .wave is a cosine wave btw
 //coffeebeandetail
 fill(20,9,5)
 ellipse(555,-320,15,40) // .wave is a cosine wave btw

 

 //ellipse(255,-110-animation.wave()*50,15,40) // .wave is a cosine wave btw
}

function stillcup(x, y, animation, pScope){
  scale(2.3)
  pScope.draw_image ("Cupring" , 0, 100)

}

function eye(x, y, animation, pScope){

  scale(2.3)
  pScope.draw_image ("greeneye" ,5-animation.wave()*5,235,)

scale(.7)
  pScope.draw_image ("orangeeye" ,5-animation.wave()*5,235,)

  scale(.7)
  pScope.draw_image ("blueeye" ,5-animation.wave()*5,235,)

 


  //scale(2.3)
  //pScope.draw_image ("eye2" ,5-animation.wave()*20,185,)

}

function movingeye(x, y, animation, pScope){

  scale(4)
  pScope.draw_image ("greeneye" ,5-animation.wave(23),23,)


}

function smoke(x, y, animation, pScope){
 
  scale(animation.frame*.6);
  pScope.draw_image ("smoke_1" , 0, 1550)


}

function spoon(x, y, animation, pScope){

//spoonoutline
  stroke(60)
  strokeWeight(9)
  rect(860,-15-animation.wave()*50,65,25) // .wave is a cosine wave btw
  ellipse(830,-5-animation.wave()*50,70,50) // .wave is a cosine wave btw


  //spoon
  noStroke()
  fill(123)
  rect(830,-15-animation.wave()*50,95,25) // .wave is a cosine wave btw
  ellipse(830,-5-animation.wave()*50,70,50) // .wave is a cosine wave btw

  //spoondetail
  stroke(190)
  strokeWeight(3)
  noFill()
  ellipse(830,-5-animation.wave()*50,50,30) // .wave is a cosine wave btw
  rect(865,-8-animation.wave()*50,50,10) // .wave is a cosine wave btw
 
}

function cup (x, y, animation, pScope){

//this is how you set up a background for a specific layer
let angleOffset = (360 / SLICE_COUNT) / 2
let backgroundArcStart = 270 - angleOffset;
let backgroundArcEnd = 270 + angleOffset;

 //centrecoffeecup
 stroke(183)
 strokeWeight(3)
 fill(183)
 arc(x,y,270,270,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

 //centrecoffee
 strokeWeight(9)
stroke(125, 65, 0)
 fill(125, 75, 0)
 ellipse(0,0,250)
 noStroke()
 fill(125, 65, 0)
 ellipse(0,0,210)


}