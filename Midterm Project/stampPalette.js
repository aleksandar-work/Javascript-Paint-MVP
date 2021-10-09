function StampPalette() {

    this.name = "stampPalette";
    this.icon = "assets/blueStarIcon.png";
    //var star;
    var starSizeSlider;
   
    //load the stamp picture
    star = loadImage('./assets/blueStar.png');

    //Draw the star
    this.draw = function(){

            if(mouseIsPressed){
                    //Choose the size of the star
                    var starSize = starSizeSlider.value();
                    var starX = mouseX;
                    var starY = mouseY;
                    image(star, starX, starY, starSize, starSize);
            }
  
        }
    
    //create a stampPallet the HTML for the size slider and color options of the stamp
    this.populateOptions = function() {
        select(".options").html("<div id='sizeOfStarControl'> Size of Star</div>");
        // 	Slider to change the size of the Star

            starSizeSlider = createSlider(5, 50, 20);
            starSizeSlider.parent("#sizeOfStarControl");
            
       };

       


    
    
}

