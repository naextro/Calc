document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');


  const buttons = [
    'btn0', 'btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8', 'btn9', 'btn00',
    'add', 'subtract', 'multiply', 'divide', 'dot'
  ];


  const buttonValues = {
    btn0: '0', btn1: '1', btn2: '2', btn3: '3', btn4: '4', btn5: '5', btn6: '6', btn7: '7', btn8: '8', btn9: '9', btn00: '00',
    add: '+', subtract: '-', multiply: '*', divide: '/', dot: '.'
  };


  buttons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', function () {
        display.value += buttonValues[id];
      });
    }
  });


  document.getElementById('ac').addEventListener('click', function () {
    display.value = '';
  });


  document.getElementById('de').addEventListener('click', function () {
    display.value = display.value.toString().slice(0, -1);
  });


  document.getElementById('equal').addEventListener('click', function () {
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  });
}); 