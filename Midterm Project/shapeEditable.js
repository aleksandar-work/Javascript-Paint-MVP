function ShapeEditable (c){
    this.name = "shapeEditable";
    this.icon = "assets/shapeEditIcon.png";

    var editButton;
    var finishButton;

    var editMode = false;
    var currentShape = [];

    noFill();
    var canvas = c;

    this.draw = function(canvas){
        updatePixels();
        if(mouseIsPressed && boundsCheck()){
    
            if(!editMode){
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            }		
            else {
                for(var i = 0; i < currentShape.length; i++){
                    if(dist(currentShape[i].x,
                         currentShape[i].y,
                          mouseX, mouseY) < 15){
    
                            currentShape[i].x = mouseX;
                            currentShape[i].y = mouseY;
                    }
                }
            }
    
        }
    
        beginShape();
        for (var i = 0; i < currentShape.length; i++)
        {
            vertex(currentShape[i].x, currentShape[i].y);
            if(editMode){
                fill("blue");
                ellipse(currentShape[i].x, currentShape[i].y, 5);
                noFill();
            }
        }
        endShape();
    }

    this.mousePressOnCanvas = function mousePressOnCanvas(canvas){


        if(mouseX > canvas.elt.offsetLeft && 
            mouseX < (canvas.elt.offsetLeft + canvas.width) &&
            mouseY > canvas.elt.offsetTop &&
            mouseY < (canvas.elt.offsetTop +
            canvas.height)) 
            {
                return true;
            }
            return false;
    } 

    this.populateOptions = function() {
        select(".options").html("<button id='finishShape'>Finish Shape</button>");
        
    
    
        /* finishButton.mousePressed(function(){
            loadPixels();
            currentShape = [];
        }) */
     
    
    }



}
