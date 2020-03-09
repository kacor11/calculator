function add(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
        return a / b
}
function harmonic(a) {
   return 1 / a
}


function operate(a, b, operator) {
      return operator(a, b)
}

function sqrtfnc(a) {
    return Math.sqrt(a)
}
function percentfnc(a) {
    return a / 100
}

let displayValue = ''
let secondValue = ''
let currentOperator 
let memory = ''

function result() {
    if (currentOperator != undefined && secondValue !='' && displayValue !='') {
        console.log(displayValue)
        displayValue = operate(parseFloat(displayValue), parseFloat(secondValue), currentOperator).toString()
        console.log(displayValue)
        console.log(secondValue)        
        console.log(currentOperator)
        inputField.textContent = displayValue;
        secondValue = '';
        currentOperator = undefined
}}



// Queryselectors
buttons = document.querySelectorAll('.numButton')
addButton = document.querySelector('.add')
substractButton = document.querySelector('.substract')
multiplyButton = document.querySelector('.multiply')
divideButton = document.querySelector('.divide')
inputField = document.querySelector('p')
sumButton = document.querySelector('.sumButton')
clearButton = document.querySelector('.clearButton')
signButton = document.querySelector('.signButton')
harmonicButton = document.querySelector('.divideButton')
mPlusButton = document.querySelector('.mPlusButton')
mMinusButton = document.querySelector('.mMinusButton')
mcButton = document.querySelector('.mcButton')
mrButton = document.querySelector('.mrButton')
sqrtButton = document.querySelector('.sqrtButton')
percentButton = document.querySelector('.percentButton')


// Event listeners for operators
addButton.addEventListener('click', () => {
    if(displayValue && currentOperator != undefined) {
        result()
        currentOperator = add
        
    } else {
        currentOperator = add
    }
    })
substractButton.addEventListener('click', () => {
    if(displayValue && currentOperator != undefined) {
        result()
        currentOperator = substract         
    } else {
         currentOperator = substract
    }
    })
multiplyButton.addEventListener('click', () => {
    if(displayValue && currentOperator != undefined) {
        result()
        currentOperator = multiply         
    } else {
         currentOperator = multiply
    }
    })
divideButton.addEventListener('click', () => {
    if(displayValue && currentOperator != undefined) {
        result()
        currentOperator = divide         
    } else {
         currentOperator = divide
    } 
    })     




// event listeners for 0-9 and . buttons
buttons.forEach(button => button.addEventListener('click', () => {
    if(currentOperator != undefined) { 
        inputField.textContent = '';
        secondValue += button.textContent;
        inputField.textContent = secondValue;
        return
    }
        displayValue += button.textContent;
        inputField.textContent += button.textContent }))
//event listeners for other buttons
sumButton.addEventListener('click', result)

clearButton.addEventListener('click', () => {
    displayValue = ''
    secondValue = '';
    inputField.textContent = '';
    currentOperator = undefined
})

signButton.addEventListener('click', () => {
    if (currentOperator !=undefined) {

        if(secondValue.charAt(0) == '-') {
            secondValue = secondValue.substring(1)
            inputField.textContent = secondValue
            return
        } 
        secondValue = secondValue + '-';
        inputField.textContent = secondValue;
        return

    }
    else if (currentOperator == undefined && displayValue.charAt(0) == '-') {
        displayValue = displayValue.substring(1)
        inputField.textContent = displayValue
        return
    }
    displayValue =displayValue + '-';
    inputField.textContent = displayValue;
    
})

harmonicButton.addEventListener('click', () => {
    if (currentOperator == undefined) {
        displayValue = harmonic(displayValue)
        inputField.textContent = displayValue;
    } else {
        secondValue = harmonic(secondValue)
        inputField.textContent = secondValue

    }
})

mPlusButton.addEventListener('click', () => {
    memory += inputField.textContent
})

mMinusButton.addEventListener('click', () => {
    memory -= inputField.textContent
})

mcButton.addEventListener('click', () => {
    memory = ''
})

mrButton.addEventListener('click', () => {
    if (currentOperator == undefined) {
        displayValue = memory
        inputField.textContent = displayValue
    } else {
        secondValue = memory
        inputField.textContent = secondValue
    }
})

sqrtButton.addEventListener('click', () => {
    if (currentOperator == undefined) {
        displayValue = sqrtfnc(displayValue)
        inputField.textContent = displayValue
    } else {
        secondValue = sqrtfnc(secondValue)
        inputField.textContent = secondValue
    }
})

percentButton.addEventListener('click', () => {
    if (currentOperator == undefined) {
        displayValue = percentfnc(displayValue)
        inputField.textContent = displayValue
    } else {
        secondValue = percentfnc(secondValue)
        inputField.textContent = secondValue
    }
})

