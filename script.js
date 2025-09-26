function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = parseInt(document.getElementById('goal').value);

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Venligst udfyld alle felter korrekt.");
        return;
    }

    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let tdee = bmr * activity;
    tdee += goal;

    document.getElementById('result').innerHTML = 
        `Dit daglige kaloribehov er ca. <strong>${Math.round(tdee)}</strong> kcal.`;
}
