let button = document.getElementById('btn')

button.addEventListener('click', (e) => {
    const height = parseInt(document.getElementById('height').value)
    const weight = parseFloat(document.getElementById('weight').value)
    const result = document.getElementById('output')

    let height_status = false , weight_status = false;
    
    if(height === '' || isNaN(height) || height <= 0){
        document.getElementById('herror').innerHTML = 'Please enter a valid height!'
    }else{
        document.getElementById('herror').innerHTML = ''
        height_status = true
    }

    if(weight === '' || isNaN(weight) || weight <= 0){
        document.getElementById('werror').innerHTML = 'please enter a valid weight!'
    }else{
        document.getElementById('werror').innerHTML = ''
        weight_status = true
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height* height) / 10000)).toFixed(2) // two decimal ponits only

        if(bmi < 18.6) {
            result.innerHTML = 'Under weight: ' + bmi;
        }else if(bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = 'Normal weight: ' + bmi;
        }else {
            result.innerHTML = 'Over weight: ' + bmi;
        }
    }else{
        alert('Form has errors!');
        result.innerHTML = ''
    }
} )