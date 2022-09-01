// create a new function that styles the checkerboard
//Create a div for each tile
//show each tile on the screen 
// Set each tile's width and height to `11.1%`
// Set each tile's `float` property to `left`
// Set each tile's paddingBottom is `11.1%`

function square(UI_body, width, height, color){
    let square = document.createElement('div');
    square.style.width = width;
    square.style.height = height;
    square.style.paddingBottom = '11.1%';
      square.style.backgroundColor = color;
    UI_body.append(square);
}

// generates a parent container to store grid squares.
function UI_box(UI_box_number){
    UI_body = document.createElement("div");
    body[0].append(UI_body);
    UI_body.setAttribute("id", UI_box_number);
    UI_body.style.display = "flex";

    return UI_body;
}

let body = document.getElementsByTagName("body");

// global variables to set color
let color = "";
let color_one = "red";
let color_two = "black";

// square size parameters.
let square_width = "11.1%";
let square_height = "11.1%";

// grid size parameters.
let rows = 8;
let cols = 8;

//random color generator funciton
function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randoColor = "rgb(" + x + "," + y + "," + z + ")";
    return randoColor
}

// main entry point for the program
makeACheckerboard();
checkboardWithRandom();



function makeACheckerboard(){
    
    // loop down the rows.
    for(let i = 0; i < rows; i++){
        
        // container for the row.
        let UI_body = UI_box(String(i));
      
        // loop across the columns.
        for(let j = 0; j < cols; j++){
           
            if(j % 2 == 0 && i %2 == 0){
                color = color_one;
            }
            else {
                color = color_two;

                if(i % 2 != 0 && j % 2 != 0){
                    color = color_one;
                }
            }
            
            // generates a parameterized square and attaches it to the UI_box container.
            square(UI_body, square_width, square_height, color);
        }
    }

}

//write a function that Generates a checkerboard with random colors for each square
function checkboardWithRandom(){
    // loop down the rows.
    for(let i = 0; i < rows; i++){
        
        // container for the row.
        let UI_body = UI_box(String(i));

        // loop across the columns.
        for(let j = 0; j < cols; j++){
            //assign a random hexadecimal to the variable color
            color = randomColor();
            // generates a square and attaches it to the UI_box container
            square(UI_body, square_width, square_height, color);
            }
        }
   }
        
           
           
