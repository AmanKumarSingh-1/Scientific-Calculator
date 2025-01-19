const display = document.getElementById('display');

function append(value) {
    display.value += value;
};

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
};

function scientific(func) {
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = "Error";
            return;
        }

        switch (func) {
            case 'sin':
                display.value = Math.sin(value * Math.PI / 180).toFixed(4);
                break;
            case 'cos':
                display.value = Math.cos(value * Math.PI / 180).toFixed(4);
                break;
            case 'log':
                display.value = Math.log10(value).toFixed(4);
                break;
            default:
                display.value = "Error";
        }
    } catch {
        display.value = "Error";
    }
};

function clearDisplay() {
    display.value = '';
};