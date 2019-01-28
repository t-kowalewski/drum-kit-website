var buttonLen = document.querySelectorAll(".drum").length;

for (var index = 0; index < buttonLen; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", handleClick); //we passing function without ()
}

function handleClick() {
    alert("I got clicked");
}