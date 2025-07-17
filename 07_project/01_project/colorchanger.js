const allButton = document.querySelectorAll(".button, .reset-color");
const body = document.querySelector("body");
const textColor = document.querySelector(".change-color")

allButton.forEach((button) => {
  button.addEventListener("click", (clicked) => {
    switch (clicked.target.id) {
      case "grey":
        body.style.backgroundColor = clicked.target.id;
        break;

      case "green":
        body.style.backgroundColor = clicked.target.id;
        break;

      case "blue":
        body.style.backgroundColor = clicked.target.id;
        break;

      case "yellow":
        body.style.backgroundColor = clicked.target.id;
        break;

      case "text-color":
        textColor.style.color = "#fff";
        textColor.style.backgroundColor = "purple";
        break;

      case "reset":
        body.style.backgroundColor = "initial";
        textColor.style.color = "initial";
        textColor.style.backgroundColor = "initial";
        break;

      default:
        console.log("No color found.");
        break;
        
    }
  });
});
