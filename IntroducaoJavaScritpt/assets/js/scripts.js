let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber > 0){
        currentNumberWrapper.classList.remove('statusColor');
        currentNumberWrapper.classList.add('statusGreen');
    }
    else if(currentNumber < 0){
        currentNumberWrapper.classList.remove('statusColor');
        currentNumberWrapper.classList.add('statusRed');
    }
    else{
        currentNumberWrapper.classList.remove('statusRed');
        currentNumberWrapper.classList.remove('statusGreen');
        currentNumberWrapper.classList.add('statusColor');
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber > 0){
        currentNumberWrapper.classList.remove('statusColor');
        currentNumberWrapper.classList.add('statusGreen');
    }
    else if(currentNumber < 0){
        currentNumberWrapper.classList.remove('statusColor');
        currentNumberWrapper.classList.add('statusRed');
    }
    else{
        currentNumberWrapper.classList.remove('statusRed');
        currentNumberWrapper.classList.remove('statusGreen');
        currentNumberWrapper.classList.add('statusColor');
    }
}