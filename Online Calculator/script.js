const screen = document.getElementById('screen');
  const buttons = document.querySelectorAll('button');
  let lastInput = '';
  let newCalculation = false;

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const value = this.textContent;

      if (value === 'Clear') {
        screen.value = '';
        lastInput = '';
        newCalculation = false;
      } else if (value === '=') {
        try {
          screen.value = eval(screen.value);
          lastInput = screen.value;
          newCalculation = true;
        } catch (e) {
          screen.value = 'Error';
          lastInput = 'Error';
          newCalculation = true;
        }
      } else {
        if (newCalculation) {
          screen.value = '';
          newCalculation = false;
        }

        if (isOperator(value) && isOperator(lastInput)) {
          return;
        }

        screen.value += value;
        lastInput = value;
      }
    });
  });

  function isOperator(char) {
    return ['+', '-', '*', '/', '.'].includes(char);
  }