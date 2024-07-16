const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn")
console.log(btn)

btn.addEventListener('click', function(){

    randonNumber = randomgenerater()
    document.body.style.backgroundColor = randonNumber
})

function randomgenerater(){
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomIndex];
  }
console.log("colors", hexColor)
  return hexColor;
}