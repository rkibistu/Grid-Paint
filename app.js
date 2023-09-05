
let mosueIsDown = false;
let currentColor = [1,1,1];

// updateaza o variabila globala ca sa stim mereu daca mouse-ul este apasat sau nu
function SetMouseEvents(){

    document.addEventListener('mousedown',function(){
        mosueIsDown = true;
    });
    document.addEventListener('mouseup',function(){
        mosueIsDown = false;
    });
}

function generateGrid(containerSelectorName, dimension){

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let squareWidth = (windowWidth - 70)/(dimension);

    const container = document.querySelector('#board');
    for(let i=0;i<dimension*dimension;i++){

        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareWidth + 'px';
        square.style.height = squareWidth + 'px';
        // square.innerText = i + 1;

        //add effect at mosueover
        square.addEventListener('mouseover',function(){
            
            if(mosueIsDown){

                color = getRandomColor();
                square.classList.add('square-activ');
                square.style.backgroundColor = color;
            }
        });

        container.appendChild(square);
    }
}

function getUserINput(){

    let dimension = prompt("Please enter the diemnsion:");
    return dimension > 100 ? 100 : dimension;
}

function getRandomColor(){

    let randomValue;
    let color = 'rgb(';

    randomValue = Math.random() * 255;
    color += randomValue + ',';

    randomValue = Math.random() * 255;
    color += randomValue + ',';

    randomValue = Math.random() * 255;
    color += randomValue + ')';

    //console.log(color);
    return color;
}

function getDegradeColor(){

    let randomValue;
    let color = 'rgb(';

    randomValue = parseInt(currentColor) + 255/10;
    color += randomValue + ',';

    randomValue = parseInt(currentColor) + 255/10;
    color += randomValue + ',';

    randomValue = parseInt(currentColor) + 255/10;
    color += randomValue + ')';


    currentColor = randomValue > 230 ? 1 : randomValue;
    
    //console.log(color);
    return color;
}

SetMouseEvents();
let dimension = getUserINput();
generateGrid("board-container",dimension);