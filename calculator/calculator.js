document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const clearButton = document.getElementById('clear');
    const equalsButton = document.getElementById('equals');

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            input.value += button.textContent;
            
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            input.value += button.textContent;
        });
    });

    clearButton.addEventListener('click', () => {
        input.value = '';
    });

    equalsButton.addEventListener('click', () => {
        try {
            const result = eval(input.value);
            input.value = result;
        } catch (error) {
            input.value = 'Error';
        }
    });
});

