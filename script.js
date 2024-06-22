const form = document.querySelector('form')

// this will give empty value bcz here script runs as soon as the 
// page loads and empty value get saved
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    // height != NaN is also correct
    if(height === '' || height<0 || isNaN(height)){        
        results.innerHTML = `Please enter a valid height ${height}`
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // show results
        results.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.5){
            results.innerHTML = `You are Underweight : ${bmi}`
        }
        else if (bmi>18.5 && bmi<24.9){
            results.innerHTML = `Normal Weight : ${bmi}`
        }
        else if (bmi>24.9){
            results.innerHTML = `You are Overweight : ${bmi}`
        }
    }
})
