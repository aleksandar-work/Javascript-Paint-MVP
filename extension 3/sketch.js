/*

1.-plot out a shape as a series of vertices
	*Add a buttn for swirching between creating new vertices and editing
	*Click the canvas to add a vertex
	*Don't drae right away add vertex to an array the draw but don't save to canvas


2.-Edit the vertices using a mouse drag
		*Add a button to edit vertices
		*If editing is on
			*highlight the location of the vertices
			
		* when mouse pressed is near vertice (using dist)
			*update the vertex x and y with the mouse x and y

	
3.- Confrim the final shape

*/


var editButton;
var finishButton;

var editMode = false;
var currentShape = [];

var c;

function setup()
{
	c = createCanvas(800, 600);
	background(200);
	noFill();
	loadPixels();
	editButton = createButton("Edit Shape");
	editButton.mousePressed(function(){
		if(editMode){
			editMode = false;
			editButton.html("Edit Shape");
		}
		else{
			editMode = true;
			editButton.html("Add Vertices");
		}
	})

	finishButton = createButton("Fisnish shape");

	finishButton.mousePressed(function(){
		loadPixels();
		currentShape = [];
	})
}



function draw()
{
	updatePixels();
	if(mousePressOnCanvas(c) && mouseIsPressed){

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


function mousePressOnCanvas(canvas){
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
