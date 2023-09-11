const SLICE_COUNT = 16;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(false);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
pScope.load_image("gd play chrome" , "png")
 pScope.load_image("logo", "png")
 pScope.load_image("untitled", "png")
 pScope.load_image("Asset 2" , "png")
}

function setup_layers(pScope){

  new PLayer(null,10,130,120);  //lets us draw the whole circle background, ignoring the boundaries

  //var layer1 = new PLayer(faces);
  //layer1.mode( SWIRL(5) );
  //layer1.set_boundary( 200, 1000 );

  var layer1 = new PLayer(teapot);
  layer1.mode( SWIRL(3) );
  layer1.set_boundary( 1000, 1100 );

  var layer2 = new PLayer(cup);
 layer2.mode( SWIRL(11) );
  layer2.set_boundary( 0, 0 );




 // var layer2 = new PLayer(squares);
//layer2.mode( RING );
 //layer2.set_boundary( 0, 400 );

 


}

function teapot(x, y, animation, pScope){
  
scale(animation.frame*2);
//scale(3.3)
pScope.draw_image("Asset 2",200,200)

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

function cup(x, y, animation, pScope){

  scale(.6)
  pScope.draw_image("untitled",110,0);

}

