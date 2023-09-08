const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(false);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("flowerC" , "png", "13")
pScope.load_image("gd play chrome" , "png")
 
}

function setup_layers(pScope){

  new PLayer(null, 230);  //lets us draw the whole circle background, ignoring the boundaries

  //var layer1 = new PLayer(faces);
  //layer1.mode( SWIRL(5) );
  //layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(chrome);
 layer2.mode( RING );
  layer2.set_boundary( 0, 100 );


  var layer1 = new PLayer(flowers);
  layer1.mode( SWIRL(1) );
  layer1.set_boundary( 722.3, 723 );

 // var layer2 = new PLayer(squares);
//layer2.mode( RING );
 //layer2.set_boundary( 0, 400 );

 


}

function flowers(x, y, animation, pScope){
  
  //scale(animation.frame*1);
scale(3.3)
  pScope.draw_image_from_sequence("flowerC", x, y, animation.frame);

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  noStroke()
  fill(10,155,100)
  arc(x,y,900,900,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  noStroke()
  fill(190,255,200)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(0)
  ellipse(0,-300-animation.wave()*50,10,10) // .wave is a cosine wave btw

  fill(0)
  ellipse(0,-200-animation.wave()*50,30,30) // .wave is a cosine wave btw

}

function chrome(x, y, animation, pScope){

  scale(4)
  pScope.draw_image("gd play chrome",0,0);
push (2);
pop (1);
}

