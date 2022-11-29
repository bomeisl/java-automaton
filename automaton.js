let row = 200, col = 200;
let booleanGrid = createBooleanArray();
var currentCharacter = 0;
$(window).height();
$(window).width();






    


// Which character in the string are we up to on the typewriter



function setup() {   
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
    init();
 
}



function windowResized() {
    master = resizeCanvas(windowWidth, windowHeight);
}

function cursorBlink() {
    var speed = 200;
    var cursor = '|';
    setInterval(() => {
        if(cursor.Alpha == 255) {
            cursor.setAlpha(0);
        }else {
            cursor.setAlpha(255);
        }
    }, speed);

}

function draw() {
    let load = "Loading:...####################################################################################################...\n";
    let sys = '#Core:  '+ window.navigator.userAgent + '\n  |   ' + '#Cookies Enabled: ' +  window.navigator.cookieEnabled + '  |  '+ '#Language: '+ window.navigator.language+'    |    ' + '#Platform: ' + window.navigator.platform + '  |';
    let line1 = "\n\n//Hello, I'm Kyle. I'm quite interested in Android architechture and development, applied math and physics, algorithm design and optimization, and scientific programming and computational simulation of condensed matter systems.\n\n"
    let line2 = "//But, hey,  we\'re both on the internet right now, so I\'ll do some web dev. Check it out:\n"
    let line3 = "//It's a cellular automaton that I\'m calculating in real time and animating with JavaScript in the background. \'Conway's Game of Life\' specifically. Try clicking to light up some of the pixels if it dies down too much.\n\n"
    let line4 = "//Doesn't it look like a beautiful digital sea sparkling in the sun as it ebbs and flows? "
    let string_array = load + sys + line1 + line2 + line3 + line4;
      
    var speed = 200;
    var cursor = '|';
    
   
    var back_color = color(235,235,235);
    var r = color(0,0,0,200);
    var cyan = color(102,178,255);
    var back_color = color(235,235,235);
    background(back_color);

    
    // When you draw text with 4 numbers you create a box that the text fits in
    // x, y position of box followed by width and height of the box    
    
    // render the automaton
    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            if (booleanGrid[i][j]) {
                let c = color(20,255-.75*j, 255-.75*i);
                //back_color.setAlpha(255-j);
                fill(c);
                rect(j/col*width, i/row*height, width/col, height/row);
            }
        }

    }
    terminal();
    noStroke();
    lifeLogic();
}

function createBooleanArray() {
    let output = [];
    for (let i=0; i<row; i++) {
        let row = [];
        for (let j=0; j<col; j++) {
            row.push(false)
        }
        output.push(row)
    }
    return output
} 

function sumBooleanArray(array) {
    var total = 0;
    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            if (array[i][j] == true) {
                total++;
            }
        }
    }
    return total;
}

function terminal() {
    let currentString = string_array.substring(0, currentCharacter) + cursor;
    
    

    push();
    
    fill(r);
    noStroke();
    rect(0, 0.6*height, width, 0.5*height);
    pop();
    
    // Draw the current string on the page, with some margins
    push();
    textSize(width/80);
    textFont(`Courier`);
    textAlign(LEFT, TOP);
    fill(cyan);
    stroke(cyan);
    text(currentString, 0, 0.6*height, width, 0.5*height);
    pop();
    
    // Increase the current character so that we get a longer and
    // longer substring above. Using fractional numbers allows us to
    // slow down the pace.
    currentCharacter += 4;
    currentCharacter += random(1,3); // Try adding random amounts for a more "naturalistic" pace of typing
}

////////   |||||||||   ||\    |||   \\\        //\\        ///    //\\    \\   //    //    //###///    ///======      ///\\\       |||\\\        ///|||    |||=====     | |
//         |||   |||   |||\   |||    \\\      ///\\\      ///    ///\\\    \\ //    //    |||         | |            / /  \ \      | | \ \      / / | |    | |          | |
//         |||   |||   ||| \  |||     \\\    ///  \\\    ///    ///  \\\    \ /    //     \\\\\\      | |  ####     / /====\ \     | |  \ \    / /  | |    | |=====     | |
//         |||   |||   |||  \ |||      \\\  ///    \\\  ///    ///====\\\   |||              |||      | |   | |    / /      \ \    | |   \ \  / /   | |    | |           
////////   |||||||||   |||   \|||       \\\///      \\\///    ///      \\\  |||         ///###//      \\\======   ///        \\\   |||    \\\///    |||    |||=====     ###


//Render next animation frame in Conway's Game of Life!                                              //                         \\
function lifeLogic() {                                                                              //     || //    ||===\\      \\
    let newGrid = createBooleanArray();                                                             //     ||//     ||   ||      \\
    for (let i=0; i<row; i++) {                                                                     //     ||\\     ||===//      \\
        for (let j=0; j<col; j++) {                                                                 //     || \\    ||   ||      \\
            // tabulate number of alive neighboring cells                                           //     ||  \\   ||===//      \\
            let coord = [[0,1],[0,-1],[1,0],[-1,0],[1,1],[-1,-1],[1,-1],[-1,1]];                     //                         \\
            let aliveNeighbors = 0;
            for (d of coord) {
                let neighborRow = i+d[0];
                let neighborCol = j+d[1];
                if (neighborRow >= 0 && neighborCol >= 0 && neighborRow < row && neighborCol < col) {
                    if (booleanGrid[neighborRow][neighborCol]) {
                        aliveNeighbors++;
                    }
                }
            }
        // Set new grid
        if (booleanGrid[i][j] == 1 && aliveNeighbors < 2) {
            newGrid[i][j] = 0;
        }
        else if (booleanGrid[i][j] == 1 && aliveNeighbors > 3) {
            newGrid[i][j] = 0;
        }
        else if (booleanGrid[i][j] == 0 && aliveNeighbors == 3) {
            newGrid[i][j] = 1;
        }
        else { 
            newGrid[i][j] = booleanGrid[i][j]; }
        
            
        }
    }
    booleanGrid = newGrid;
}


function mouseClicked() {
    booleanGrid[Math.floor(mouseY/height * row)][Math.floor(mouseX/width * col)] = !booleanGrid[Math.floor(mouseY/height * row)][Math.floor(mouseX/width * col)];
}


function init() {
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
        // Lining the edges with 0s
            if (i == 0 || j == 0 || i == col-1 || j == row-1) booleanGrid[i][j] = 0;
        // Filling the rest randomly
            else booleanGrid[i][j] = floor(random(2));
        }   
    }
}

function terminal() {

    
}


