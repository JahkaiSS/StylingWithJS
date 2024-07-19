const container = document.querySelector('.container');


function styles_1(){
    container.style.border = "1px solid black"
    container.style.width = "50%"
    container.style.backgroundColor = "gray"
    container.style.color = "white"
    container.style.padding = "8px"
}
function styles_2(){
    container.style.border = "3px solid black"
    container.style.width = "50%"
    container.style.padding = "8px"
    container.style.borderRadius = "10px"
    container.style.backgroundColor = "lightblue"
    container.style.setProperty('width', '20%');
    container.style.color = "black"
}

