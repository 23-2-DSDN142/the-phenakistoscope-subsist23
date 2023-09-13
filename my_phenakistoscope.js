const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(false);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("Cup","png","3")
  pScope.load_image("Cupring", "png")
  pScope.load_image("eye2" , "png")
  pScope.load_image("smoke_1" , "png")
 
}

function setup_layers(pScope){

  new PLayer(null, 23);  //lets us draw the whole circle background, ignoring the boundaries



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
  //coffeebean
 fill(125, 75, 0)
 ellipse(865,-110,45,70) // .wave is a cosine wave btw
 //coffeebeandetail
 fill(20,9,5)
 ellipse(855,-110,15,40) // .wave is a cosine wave btw
 

 //ellipse(255,-110-animation.wave()*50,15,40) // .wave is a cosine wave btw
}

function stillcup(x, y, animation, pScope){
  scale(2.3)
  pScope.draw_image ("Cupring" , 0, 100)

}

function eye(x, y, animation, pScope){

  scale(1.5)
  pScope.draw_image ("eye2" ,0,195,)

  scale(.6)
  pScope.draw_image ("eye2" ,0,215,)

  scale(.8)
  pScope.draw_image ("eye2" ,0,185,)

  scale(.8)
  pScope.draw_image ("eye2" ,180,685,)

  scale(2)
  pScope.draw_image ("eye2" ,180,445,)

  scale(.8)
  pScope.draw_image ("eye2" ,180,355,)

  scale(2)
  pScope.draw_image ("eye2" ,0,285,)
}

function smoke(x, y, animation, pScope){
 
  scale(animation.frame*.6);
  pScope.draw_image ("smoke_1" , 0, 1550)


}

function spoon(x, y, animation, pScope){

  //spoon
  noStroke()
  fill(123)
  rect(830,-15-animation.wave()*50,95,25) // .wave is a cosine wave btw
  ellipse(830,-5-animation.wave()*50,70,50) // .wave is a cosine wave btw
 
}

function cup (x, y, animation, pScope){

//this is how you set up a background for a specific layer
let angleOffset = (360 / SLICE_COUNT) / 2
let backgroundArcStart = 270 - angleOffset;
let backgroundArcEnd = 270 + angleOffset;

 //centrecoffeecup
 stroke(3)
 strokeWeight(1)
 fill(183)
 arc(x,y,270,270,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

 //centrecoffee
 noStroke()
 fill(125, 75, 0)
 ellipse(0,0,250)

}