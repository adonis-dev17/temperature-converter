//Write your pseduo code first! 

// will accept values 


document.querySelector('#Celsius').addEventListener('click', celsius);
document.querySelector('#Fahrenheit').addEventListener('click', fahrenheit);
document.querySelector('#Kelvin').addEventListener('click', kelvin);


function celsius () {
  const inputValue = Number(document.getElementById('tvalue').value);
  
  let farenComputed = (9/5)*inputValue + 32;
  let kelComputed = inputValue + 273.15;
  console.log(farenComputed);
  console.log(kelComputed);
}

function fahrenheit () {
  const inputValue = Number(document.getElementById('tvalue').value);
  let celComputed = (5/9)*(inputValue-32);
  let kelComputed = (5/9)*(inputValue+459.67);
  console.log(celComputed);
  console.log(kelComputed);
}

function kelvin () {
  const inputValue = Number(document.getElementById('tvalue').value);

} 