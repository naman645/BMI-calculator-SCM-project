window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBmi)
}


function calculateBmi() {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid weight";
        return;
    }
// this is my bmi formulat

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
// bmi < 18.5 then the person is consider to be underweight.
    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`;
//bmi > 18.5 the person is consider to be healthy.
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
//bmi < 18.5 the person is consider to be healthy.
    } else if (bmi >= 25 && bmi < 29.9) {
//bmi >= 25 the person is consider to be overweight.
//bmi < 29.9 the person is consider to be obesity.
        result.innerText = `Over Weight: ${bmi}`;
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}`;
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesity (Class II) : ${bmi}`;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
    }
}

//javascript
