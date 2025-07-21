const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (s) {
  s.preventDefault();

  const gender = document.querySelector('#gender').value
  const mHeight = parseInt(document.querySelector("#height").value);
  const mWeight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const activity = document.getElementById('activity').value

    if (isNaN(mHeight) || mHeight <= 0 || isNaN(mWeight) || mWeight <= 0) {
    result.innerHTML = `<span>Please enter valid height and weight.</span>`;
    return;
  }
  if (mHeight < mWeight) {
    result.innerHTML = `<span>Height should be greater than the weight.</span>`;
    return;
  }

  const heightInInches = mHeight / 2.54;
  
let calculateWeight;
  if(gender === "male") {
    calculateWeight = 50 + 2.3 * (heightInInches - 60);
  } else {
    calculateWeight = 45.5 + 2.3 * (heightInInches - 60);
  }

  let finalWeight;
  if (mWeight > calculateWeight) {
    finalWeight = calculateWeight + 0.25 * (mWeight - calculateWeight);
  } else {
    finalWeight = mWeight;
  }

  let trainingIntensity;
  if (activity === 'no-training') {
    trainingIntensity = 0.9;
  }
  else if (activity === 'light') {
    trainingIntensity = 1.3;
  }
  else if (activity === 'medium') {
    trainingIntensity = 1.5;
  }
  else if (activity === "hard") {
    trainingIntensity = 1.8;
  }

  /*Ternary Operator (shorter)*/ 
  // const finalWeight = mWeight > calculateheight 
  // ? calculateheight + 0.25 * (mWeight - calculateheight) 
  // : mWeight; 

  const proteinGrams = Math.round(finalWeight * trainingIntensity);

  result.innerHTML = `<span>You need approximately <strong>${proteinGrams} grams</strong> of protein per day.</span>`;
});
