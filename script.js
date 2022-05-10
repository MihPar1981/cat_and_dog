// document.getElementById("pets2").addEventListener("click", function () {
//     document.getElementById("card2").classList.remove("display_none");
//     document.getElementById("grey1").classList.remove("display_none");

// })


for (let elem of document.getElementsByClassName("btn2")) {
    elem.addEventListener("click", function () {
        document.getElementById(`${elem.name}`).classList.remove("display_none");
        document.getElementById("grey1").classList.remove("display_none");
        console.log(elem.name);
    });
};
// Это код для работы крестика. 
for (let elem of document.getElementsByClassName("wrapperkrest1")) {
    elem.addEventListener("click", function () {
        document.getElementById(`card${elem.name}`).classList.add("display_none");
        document.getElementById("grey1").classList.add("display_none");
    });
    console.log(elem.name);
}



// document.getElementById("cat1").addEventListener("click", function () {
//     document.getElementById("card1").classList.remove("display_none");
//     document.getElementById("grey1").classList.remove("display_none");
// });


// document.getElementById("woody1").addEventListener("click", function () {
//     document.getElementById("card3").classList.remove("display_none");
//     document.getElementById("grey1").classList.remove("display_none");
// });