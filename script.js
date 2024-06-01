const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const result = document.querySelector('#result');
    
    if (!height || height <= 0 || isNaN(height)) {
        result.innerHTML = "Please provide a valid height";
    } else if (!weight || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Please provide a valid weight";
    } else {
        // Calculate BMI
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        // Determine weight category
        let category = '';
        if (bmi < 18.6) {
            category = 'underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            category = 'normal weight';
        } else {
            category = 'overweight';
        }

        // Display result
        result.innerHTML = `Your BMI is ${bmi}. You are in the  ${category} category.`;
    }
});
