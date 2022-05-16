class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
        
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    appendNumber(number){ 
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation){
        if( this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';

    }
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
                default:
                    return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }
    updateDisplay(){
        this.currentOperandTextElement.textContent = this.currentOperand;
        this.previousOperandTextElement.textContent = this.previousOperand;
    }
}


const numberButtons = document.querySelectorAll('[data-action]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const previousOperandTextElement = document.querySelector('[data-previous]');
const currentOperandTextElement = document.querySelector('[data-current]');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.textContent);
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent);
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})
clearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})
 































































// const calculator = document.querySelector('calculator-grid');
// const calculatorKeys = document.querySelector('calculator-keys');

// calculatorKeys.addEventListener('click', e =>{
//     if (e.target.matches('button')) {

//         const calculatorKeys = e.target;
//         const action = calculatorKeys.dataset.action;

//         if(!action) {
//             console.log('number key!');
//         }
//         else if ( action === 'add' || action === 'subtract' 
//         || action === 'multiply' || action === 'divide') {
//             console.log('operator key');
//         }
//         else if ( action === 'clear'){
//             console.log('clear key');
//         }
//         else if (action === 'equals-to'){
//             console.log('equal key');
//         }
//     }
// })
