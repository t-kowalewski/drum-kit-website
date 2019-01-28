var buttonLen = document.querySelectorAll(".drum").length;

for (var index = 0; index < buttonLen; index++) {
    // document.querySelectorAll(".drum")[index].addEventListener("click", handleClick); //we pass function without ()
    document.querySelectorAll(".drum")[index].addEventListener("click", function () { // or use anon function
        this.style.color = "white"; // or -> this.classList.add("button-pressed");
        // console.log(this);
    });
}



// function handleClick() {
//     alert("I got clicked");
// }


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();