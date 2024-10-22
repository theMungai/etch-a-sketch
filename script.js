document.addEventListener('DOMContentLoaded', () => {
    const gridArea = 600;
    let rows = 16;
    let columns= 16;
    let click = true;

    const sketchArea = document.querySelector(".sketch-area");
    sketchArea.style.height = `${gridArea}px`;
    sketchArea.style.width = `${gridArea}px`;
    

    function createGridCells() {
        
        for(let i = 0; i < (rows * columns); i++ ){
            let square = document.createElement("div");
            square.style.width = `${(gridArea / rows) - 2}px`;
            square.style.height = `${(gridArea / columns) - 2}px`;
            square.classList.add("cell")

            sketchArea.appendChild(square)

            const blackButton = document.querySelector("#black-button");
            blackButton.addEventListener('click', () => {
                square.addEventListener('mouseover', () =>{
                    square.style.backgroundColor = "black"
                });
            });
            
            const randomButton = document.querySelector("#random");
            randomButton.addEventListener('click', () => {
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                 }) ;
            });
            

            const eraseButton = document.querySelector("#erase");
            eraseButton.addEventListener('click', () => {
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = "white"
                });
            });

            const grayButton = document.querySelector('#shade');
            grayButton.addEventListener('click', () => {
                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = "gray";
                });
            });

            const resetButton = document.querySelector('#reset');
            resetButton.addEventListener('click', () => {
                square.style.backgroundColor = "white"
            })

             
        }
    }
    createGridCells();
    
    document.querySelector("body").addEventListener('click', () => {
        click = !click
    })




});