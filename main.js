function onSubmit() {
    let input123 = document.getElementById("goals-input").value;
    let input = document.getElementById("days-input").value;
    let numOfDays = caclulateDaysNeeded(input, input123);
    document.getElementById('pages-output').innerHTML = 'The number of days needed are ' + numOfDays;
}

// this function will return the number of days needed
function caclulateDaysNeeded(input,input123) {
    return input123/input;
}