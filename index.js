function showInfo(x) {
    document.getElementById("pt"+x).style.opacity = "1";
}
function hideInfo(x) {
    document.getElementById("pt"+x).style.opacity = "0";
}
let catfunRight = document.getElementById('catGunRight');
let catfunLeft = document.getElementById('catGunLeft');
let catText = document.getElementById("cat-text");
let catMouth = document.getElementById('cat-mouth')
let catEyes = document.getElementById('cat-eyes')

function reset_animation() {
    let el = document.getElementById('cat');
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 

    let nel = document.getElementById('cat-mark');
    nel.style.animation = 'none';
    nel.offsetHeight; /* trigger reflow */
    nel.style.animation = null; 
}
let x = 1;
function catAnimation() {
    if (x <= 3) {
        reset_animation();
        x++
    } else {
        catFunny()
    }
}
function dontTouchMe() {
    catText.style.opacity = "1";
}
function hideDontTouchMe() {
    catText.style.opacity = "0";
}
function catFunny() {
    catfunRight.style.opacity = "1";
    catfunLeft.style.opacity = "1";
    catEyes.style.left = "-100px";
    catMouth.style.right = "0vw";
    catText.innerText = "I warned ya!"
    catText.style.width = "10vw"
    setInterval(() => {
        destory()
    }, 2000);
}
function destory() {
    document.getElementById('body').innerHTML = '<img src="media/cat/screenByeBye.jpg" id="brokenScreen" style="object-fit: cover; width: 100vw; height: 100vh;" alt=":c screen no bye bye">';
}