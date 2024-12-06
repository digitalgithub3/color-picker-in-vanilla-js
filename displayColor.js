import ColorApi from "./colorsApi.js";
// console.log(ColorApi);

let colorColumnRed = document.querySelector('.color-column.red');
let colorColumnGreen = document.querySelector('.color-column.green');
let colorColumnBlue = document.querySelector('.color-column.blue');

let [groupRed, groupGreen, groupBlue] = ColorApi;

// console.log(groupRed, groupGreen, groupBlue);

groupRed.map((colorElement) => {
  createColorCard(colorElement, colorColumnRed);
})
groupGreen.map((colorElement) => {
  createColorCard(colorElement, colorColumnGreen);
})
groupBlue.map((colorElement) => {
  createColorCard(colorElement, colorColumnBlue);
})


function createColorCard(colorElement, colorColumnName) {
  const colorCard = document.createElement("div");
  colorCard.classList.add('color-card');
  colorCard.style.backgroundColor = `${colorElement}`;
  let bgColor = colorCard.style.backgroundColor;
  const htmlData = `
      <div class="color-card-heading">
        <div class="color-name"> ${bgColor} </div>
      </div>
  `;
  // console.log(htmlData);
  colorCard.insertAdjacentHTML('afterbegin', htmlData);
  colorColumnName.appendChild(colorCard);
}


let allCopyBtn = document.querySelectorAll('.color-card-heading');
// console.log(allCopyBtn);

for (let i = 0; i < allCopyBtn.length; i++) {
  // console.log(allCopyBtn[i]);
  allCopyBtn[i].addEventListener('click', () => {
    // console.log(allCopyBtn[i].parentElement);
    let colorName = allCopyBtn[i].parentElement.style.backgroundColor;
    console.log(colorName);
    navigator.clipboard.writeText(colorName);
    // navigator.clipboard.readText(colorCode);
    // alert(`Color ${colorName} is copied to Clipboard Successfully.`);
    let snackBar = document.getElementById("snackbar");
    let snackBarVal = document.querySelector("#snackbar code");
    snackBarVal.innerText = colorName;
    snackBar.className = "show";
    setTimeout(function() {
      snackBar.className = "";
    }, 3400);
  })
}




// const colorCard = document.createElement("div");
// colorCard.classList.add('color-card');
// colorCard.style.backgroundColor = "#567";
// let bgColor = colorCard.style.backgroundColor;
// const htmlData = `
//     <div class="color-card-heading">
//       <div class="color-name"> ${bgColor} </div>
//       <div class="color-copy">Copy</div>
//     </div>
//     <div class="color-card-hover"></div>
// `;
// // console.log(htmlData);
// colorCard.insertAdjacentHTML('afterbegin', htmlData);
// colorColumnRed.appendChild(colorCard);




// ColorApi.map((crEl, i) => {
//   console.log(crEl[1]);
// })