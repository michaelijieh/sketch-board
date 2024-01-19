let pixel; 
let w; 
let h;

const drawBoard = document.querySelector('.draw-board');


const menu = document.querySelector('.menu');

const menuHeader = document.querySelector('.menu-header');
const bgButton = document.querySelector('.button-bg-color');
const eraserButton = document.querySelector('.button-eraser');
const clearButton = document.querySelector('.button-clear')
const closeButton = document.querySelector('.button-close')
const sgContainer = document.querySelector('.select-grid-container');
const sgLabel = document.querySelector('.sg-label');
const controllers = document.querySelector('.controller-container')
const selectGrid =  document.querySelector('select')
const size = document.getElementById('size')
const sizeS = document.querySelector('.size-S')
const sizeM = document.querySelector('.size-M')
const sizeL = document.querySelector('.size-L')
const sizeXL = document.querySelector('.size-XL')



function sgContainerOps () {
    pixel = 32; w = "20px"; h = "20px"
    screenOps(pixel, w, h);
    

    sizeS.addEventListener('click', () => {
        pixel = 16; w = "40px"; h = "40px"
        screenOps(pixel, w, h);
        clearScreen ();

    })
    sizeM.addEventListener('click', () => {
        pixel = 32; w = "20px"; h = "20px"
        screenOps(pixel, w, h);
        clearScreen ();

    })
    sizeL.addEventListener('click', () => {
        pixel = 64; w = "10px"; h = "10px"
        screenOps(pixel, w, h);
        clearScreen ();

    })
    sizeXL.addEventListener('click', () => {
        pixel = 128; w = "5px"; h = "5px"
        screenOps(pixel, w, h);
        clearScreen ();

    })

}

sgContainerOps ()

function screenOps (pixel, w, h) {


    let totalGrids = pixel * pixel
    for (let i = 0; i < totalGrids; i ++) {
        let childGrid = document.createElement('div');

        childGrid.className = "box"
        childGrid.style.width = w;
        childGrid.style.height = h;
        childGrid.style.background = "inherit";
        
        drawBoard.appendChild(childGrid)

        
        childGrid.addEventListener('mouseover', () => {
            if (bgButton.textContent === "Black") {
                childGrid.style.backgroundColor = "#080625";

                if (eraserButton.textContent === "Draw") {
                    childGrid.style.backgroundColor = "whitesmoke"
                }

            
            } else if (bgButton.textContent === "White") {
                childGrid.style.backgroundColor = "whitesmoke"; 

                if (eraserButton.textContent === "Draw") {
                    childGrid.style.backgroundColor = "#080625"
                }               

            }

        })
        
        // childGrid.addEventListener('mouseover', () => {
        //     if (eraserButton.textContent === "Draw") {
        //         childGrid.style.backgroundColor = "#080625";

            
        //     } else {
        //         childGrid.style.backgroundColor = "whitesmoke";                

        //     }

        // })


  



    }

    // eraserButton.addEventListener('click', () => {
    //     if (eraserButton.textContent === "Eraser") {
    //         eraserButton.textContent = "Draw";
    //         // childGrid.addEventListener('mouseover', () => {
    //         //     childGrid.style.backgroundColor = "whitesmoke";


    //         // })
    //     } else {
    //         eraserButton.textContent = "Eraser";
    //         // childGrid.style.backgroundColor = "#080625"
    //     }
    // })

}


screenOps ()

function bgColorOps () {
    bgButton.addEventListener('click', () => {
        if (bgButton.textContent === "Black") {
            bgButton.textContent = "White";

            drawBoard.style.backgroundColor = "#080625";
            clearScreen ()


        }else{
            bgButton.textContent = "Black";

            drawBoard.style.backgroundColor = "whitesmoke";
            clearScreen ()
        }
    })
}

bgColorOps ();


function clearScreen () {
    
    while (drawBoard.firstChild) {
        drawBoard.removeChild(drawBoard.firstChild);
    }

    screenOps (pixel, w, h)
    eraserButton.textContent = "Eraser";

}

clearButton.addEventListener('click', clearScreen)


eraserButton.addEventListener('click', () => {
    if (eraserButton.textContent === "Eraser") {
        eraserButton.textContent = "Draw"

    } else {
        eraserButton.textContent = "Eraser"
    }
})


