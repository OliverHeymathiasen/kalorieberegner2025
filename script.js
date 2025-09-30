function calculateMacros() {
  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activity = parseFloat(document.getElementById('activity').value);
  const goal = parseInt(document.getElementById('goal').value);

  if (isNaN(age) || isNaN(weight) || isNaN(height)) {
    alert("Udfyld venligst alle felter korrekt.");
    return;
  }

  // BMR (Mifflin-St Jeor)
  let bmr = gender === "male"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  // TDEE
  let tdee = bmr * activity + goal;

  // Makroer
  const proteinMin = Math.round(weight * 1.6);
  const proteinMax = Math.round(weight * 2.2);
  const proteinKcal = ((proteinMin + proteinMax) / 2) * 4;

  const fatMin = Math.round(weight * 0.8);
  const fatMax = Math.round(weight * 1);
  const fatKcal = ((fatMin + fatMax) / 2) * 9;

  const carbsKcal = tdee - (proteinKcal + fatKcal);
  const carbs = Math.round(carbsKcal / 4);

  document.getElementById('result').innerHTML = `
    <h2>Resultat</h2>
    <p><strong>Kaloriebehov:</strong> ca. ${Math.round(tdee)} kcal</p>
    <p><strong>Protein:</strong> ${proteinMin} – ${proteinMax} g/dag</p>
    <p><strong>Fedt:</strong> ${fatMin} – ${fatMax} g/dag</p>
    <p><strong>Kulhydrater:</strong> ca. ${carbs} g/dag</p>
    <p style="font-size:0.9em;color:#666;">
      * Dette er estimater. Justér efter dine resultater over tid.
    </p>
  `;
}
