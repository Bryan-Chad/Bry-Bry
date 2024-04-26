

let Input = document.getElementById("Input");

function pressed(number){
    Input.value += number;
    if(number == ''){
        Input.value = number;
    }
    if((number == "&Pi;")||(number == "Π")){
        Input.value += Math.PI
    }
}

function solving(){
    Input.value = eval(Input.value);
}

window.addEventListener("keydown", keysToBepressed)

function keysToBepressed(event){
    switch(event.key){
        case '1': Input.value += 1
        break; 
        case '2': Input.value += 2
        break; 
        case '3': Input.value += 3
        break; 
        case '4': Input.value += 4
        break; 
        case '5': Input.value += 5
        break;
        case '6': Input.value += 6
        break; 
        case '7': Input.value += 7
        break; 
        case '8': Input.value += 8
        break; 
        case '9': Input.value += 9
        break; 
        case '0': Input.value += 0
        break; 
        case '+': Input.value += '+'
        break; 
        case '/': Input.value += '/'
        break; 
        case 'x': Input.value += '*'
        break; 
        case '-': Input.value += '-'
        break;
    }
}





