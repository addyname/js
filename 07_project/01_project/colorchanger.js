const allButton = document.querySelectorAll(
  ".button, .reset-color, .change-text-color, .change-rondom-color"
);
const body = document.querySelector("body");
const textColor = document.querySelectorAll(".change-color"); // We have to add loop for working this on all heading classes. Because this won't work on a NodeList.
const changeRanColor = document.querySelectorAll(".random-color");

const randomColor = ["red", "green", "pink"];
function changeToRandom() {
  ranColor = Math.floor(Math.random() * randomColor.length);
  return randomColor[ranColor];
}

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

      // case "text-color":
      //   textColor.style.color = "#fff";
      //   textColor.style.backgroundColor = "purple";
      //   break;
      // case "reset":
      //   body.style.backgroundColor = "initial";
      //   textColor.style.color = "initial";
      //   textColor.style.backgroundColor = "initial";
      //   break; // We have to add loop for working this on all heading classes. Because this won't work on a NodeList.

      case "text-color":
        textColor.forEach((heading) => {
          heading.style.color = "#fff";
          heading.style.backgroundColor = "purple";
        });
        break;

        case "RandomColor":
       changeRanColor.forEach((rantext) => {
          rantext.style.color = changeToRandom()
        })
        break;

      case "reset":
        body.style.backgroundColor = "initial";
        textColor.forEach((headingReset) => {
          headingReset.style.color = "initial";
          headingReset.style.backgroundColor = "initial";
        });
        break;

      default:
        console.log("No color found.");
        break;
    }
  });
});
