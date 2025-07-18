function calculateProtein() {
      const gender = document.getElementById("gender").value;
      const heightCm = parseFloat(document.getElementById("height").value);

      if (isNaN(heightCm) || heightCm <= 0) {
        document.getElementById("result").textContent = "Please enter a valid height.";
        return;
      }

      const heightInches = heightCm / 2.54;
      let ibw;

      if (gender === "male") {
        ibw = 50 + 2.3 * (heightInches - 60);
      } else {
        ibw = 45.5 + 2.3 * (heightInches - 60);
      }

      const proteinGrams = Math.round(ibw);

      document.getElementById("result").textContent = 
        `Your ideal daily protein intake is about ${proteinGrams} grams.`;
    }