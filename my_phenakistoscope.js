const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(true);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image_sequence("flower" , "png", "13")
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  //var layer1 = new PLayer(faces);
  //layer1.mode( SWIRL(5) );
  //layer1.set_boundary( 200, 1000 );

  var layer1 = new PLayer(flowers);
  layer1.mode( SWIRL(1) );
  layer1.set_boundary( 500, 510 );


 // var layer2 = new PLayer(squares);
  //layer2.mode( RING );
  //layer2.set_boundary( 0, 400 );
}

function flowers(x, y, animation, pScope){
  
  //scale(animation.frame*1);
scale(2.3)
  pScope.draw_image_from_sequence("flower", x, y, animation.frame);

}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(255)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

}
