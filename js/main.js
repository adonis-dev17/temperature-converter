//Write your pseduo code first! 

// will accept values 


document.querySelector('#Celsius').addEventListener('click', celsius);
document.querySelector('#Fahrenheit').addEventListener('click', fahrenheit);
document.querySelector('#Kelvin').addEventListener('click', kelvin);


function celsius () {
  const inputValue = Number(document.getElementById('tvalue').value);
  
  let farenComputed = (9/5)*inputValue + 32;
  let kelComputed = inputValue + 273.15;

  document.getElementById('seeFirst').innerHTML = `Celsius to Fahrenheit is ${farenComputed}`;
  document.getElementById('seeSecond').innerHTML =`Celsius to Fahrenheit is ${kelComputed}`;
}

function fahrenheit () {
  const inputValue = Number(document.getElementById('tvalue').value);
  let celComputed = (5/9)*(inputValue-32);
  let kelComputed = (5/9)*(inputValue+459.67);

  document.getElementById('seeFirst').innerHTML = `Fahrenheit to Celsius is ${celComputed}`;
  document.getElementById('seeSecond').innerHTML =`Fahrenheit to Kelvin is ${kelComputed}`;
}

function kelvin () {
  const inputValue = Number(document.getElementById('tvalue').value);
  let celComputed = inputValue - 273.15;
  let farenComputed = 9/5*(inputValue - 273) + 32;

  document.getElementById('seeFirst').innerHTML = `Kelvin to Celsius is ${celComputed}`;
  document.getElementById('seeSecond').innerHTML =`Kelvin to Fahrenheit is ${farenComputed}`;
} 