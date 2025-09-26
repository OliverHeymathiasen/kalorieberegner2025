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

    // BMR Mifflin-St Jeor
    let bmr = gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    // TDEE = BMR * aktivitetsniveau
    let tdee = bmr * activity;

    // Juster for vægttab/vægtøgning
    tdee += goal;

    // Proteinberegning (1,6-2 g pr kg)
    const proteinMin = Math.round(weight * 1.6);
    const proteinMax = Math.round(weight * 2);

    document.getElementById('result').innerHTML = `
        Dit daglige kaloribehov er ca. <strong>${Math.round(tdee)}</strong> kcal.<br>
        Proteinbehov: <strong>${proteinMin} - ${proteinMax}</strong> g/dag.
    `;
}
