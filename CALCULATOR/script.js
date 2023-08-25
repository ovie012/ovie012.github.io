class Calculator {
    constructor(upperCalTextElement, lowerCalTextElement) {
        this.upperCalTextElement = upperCalTextElement
        this.lowerCalTextElement = lowerCalTextElement
        this.clear()
    }

    clear() {
        this.upperCal = ''
        this.lowerCal = ''
        this.operation = undefined
    }

    delete() {
        this.lowerCal = this.lowerCal.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.lowerCal.includes('.')) return
        this.lowerCal = this.lowerCal.toString() + number.toString()
    }

    chooseOperation(operation) {
        if(this.lowerCal === '') return
        if (this.upperCal !== '' ) {
            this.compute()
        }
        this.operation = operation
        this.upperCal = this.lowerCal
        this.lowerCal = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.upperCal)
        const current = parseFloat(this.lowerCal)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case '*':
                computation = prev * current
                break;
            case '÷':
                computation = prev / current
                break;
            default:
                return
        }
        this.lowerCal = computation
        this.upperCal = ''
        this.operation = undefined
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.lowerCalTextElement.innerText = 
          this.getDisplayNumber(this.lowerCal)
        if (this.operation != null) {
            this.upperCalTextElement.innerText =
             `${this.getDisplayNumber(this.upperCal)} ${this.operation}`
        } else {
            this.upperCalTextElement.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const allClearButton = document.querySelector('[data-AC]');
const deleteButton = document.querySelector('[data-DEL]');
const upperCalTextElement= document.querySelector('[data-upper]');
const lowerCalTextElement = document.querySelector('[data-lower]');

const calculator =  new Calculator(upperCalTextElement, lowerCalTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})