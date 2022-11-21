let row = 250, col = 250;
let booleanGrid = createBooleanArray();

function setup() {
    height = 800;
    width = width;
    let master = createCanvas(2000, 700);
    master.id('master')
    frameRate(10);
    init()
}

function draw() {
    var back_color = color(233,233,233);
    background(back_color);
    let name = 'Kyle Bomeisl'
    //let conway = " cells are alive in Kyle's JS implementation of "
    // When you draw text with 4 numbers you create a box that the text fits in
    // x, y position of box followed by width and height of the box    

    // render the automaton
    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            if (booleanGrid[i][j]) {
                let c = color(20,255-.75*j, 255-.75*i);
                back_color.setAlpha(255-j);
                fill(c);
                rect(j/col*width, i/row*height, width/col, height/row);
            }
        }

    }
    stroke(233);
    textSize(148);
    textFont("Georgia");
    fill(0, 0, 0);
    textAlign(CENTER);
    text(name, 550, 157, 760, 360);
    var cellTotal = sumBooleanArray(booleanGrid);
    lifeLogic();
    //textSize(28);
    //let d = color(0,0,0);
    //fill(d);
    //textAlign(CENTER);
    //text(cellTotal+conway, 10, 620, 760, 360);
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
                total++
            }
        }
    }
    return total
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

