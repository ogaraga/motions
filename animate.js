
const imagecontainer = document.querySelector(".images"),
    prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next");

var x;
var m = 0;
prevBtn.addEventListener("click", () => {
    m = m + 180;
    clearTimeout(x);
    updateAngle();
});
nextBtn.addEventListener("click", () => {
    m = m - 60;
    clearTimeout(x);
    updateAngle();
});
function updateAngle() {
    imagecontainer.style.transform = `perspective(1200px)rotateY(${m}deg)`;
    m = m - 60;
    x = setTimeout(() => {
        updateAngle();
    }, 3000);
}
updateAngle();
