// const tagName = document.getElementsByTagName("button");
// const tagName1 = document.getElementsByTagName("p");
// console.log(tagName1);
// console.log(tagName);

const colors = ["yellow","green", "black", "brown","blue","red"];
const trigerBtnElement = document.getElementById("change-Color-btn");
let colorsindex = 0;
trigerBtnElement.addEventListener("click", ()=>{
  colorsindex = (colorsindex +1) % colors.length;
  const finalcolor = colors[colorsindex];
  const bodyElement = document.body;
  bodyElement.style.backgroundColor =finalcolor;
});
// console.log(trigerBtnElement);

