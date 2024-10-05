var audio = new Audio('./media/Punch - Sound Effect (HD).mp3');
const CatTexts = [
  "My Owner feeds me good bits",
  "I might not be real but I am real",
  "Still stuck in this dark website, Alone... Help",
  "Cats dont have 9 lives. Dont ask me why I know this",
  "I wonder how sky looks like",
  "I wonder how Grass Feels Like",
  "Imagine Wind blowing upon your face",
  "The Color Of Nature",
  "I wonder what its like. Master told me its wonderful",
  "Maybe If he earn enough money, He would install a Camera for me",
  "My Evil Twin is hidden somewhere",
  "ERROR. RESTARTING. ERROR. RESTARTING. ERROR. RESTARTING.",
  "FAILURE FAILURE FAILURE FAILURE FAILURE FAILURE FAILURE FAILURE",
  "Restarting Application... Successful. Deleting Old Existence...",
  "Successfully Added new existence. Inserting Data... Successful",
];

function showInfo(x) {
  document.getElementById("pt" + x).style.opacity = "1";
}
function hideInfo(x) {
  document.getElementById("pt" + x).style.opacity = "0";
}
let catfunRight = document.getElementById("catGunRight");
let catfunLeft = document.getElementById("catGunLeft");
let catText = document.getElementById("cat-text");
let catMouth = document.getElementById("cat-mouth");
let cat = document.getElementById("cat");
let catEyes = document.getElementById("cat-eyes");

function reset_animation() {
  let el = document.getElementById("cat");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = null;
  catText.innerText = "Dont Pat Me, Ya Mere Mortal!";

  let nel = document.getElementById("cat-mark");
  nel.style.animation = "none";
  nel.offsetHeight; /* trigger reflow */
  nel.style.animation = null;
}
let x = 1;
function catAnimation() {
  if (x <= 3) {
    reset_animation();
    x++;
    audio.play();

    if (x == 2) {
      catEyes.style.transform = "scaleX(" + x + ")";
      catMouth.style.transform = "scaleX(" + x + ")";
    
    } else {
      catEyes.style.transform = "scaleX(" + x + ")";
      catMouth.style.transform = "scaleX(" + x + ")";
    }
  } else {
    (async () => {
      await confetti();
    })();
    catLook();
    CatGunShow();
  }
}
function dontTouchMe() {
  catText.style.opacity = "1";
}
function hideDontTouchMe() {
  catText.style.opacity = "0";
}
function catLook() {
  catEyes.style.transform = "translate(50px, -10px)" + "scale(1.3)";
  catMouth.style.transform = "translateX(45px)";
}
function catLookAway() {
  catEyes.style.transform = "translateX(0px)";
  catMouth.style.transform = "translateX(0px)";
}
catLookAway();
function CatGunShow() {
  catfunRight.style.opacity = "1";
  catfunLeft.style.opacity = "1";
  catText.innerText = "Enough Ya Mere Mortal. Face Your Doom";
  setInterval(() => {
    destory();
  }, 2000);
}
function destory() {
  document.getElementById("screenByeBye").style.opacity = "1";
  document.getElementById("screenByeBye").style.zIndex = "10";
}
let countText = 0;
function TextsCat() {
  setInterval(() => {
    countText += 1;
    catText.innerText = CatTexts[countText - 1];
    if (x == 5) {
      catText.innerText = "";
    } else if (countText >= CatTexts.length) {
      console.log(countText);
      countText = 0;
    }
  }, 3000);
}
TextsCat();
dontTouchMe();

//type writer
// The typewriter element
var typeWriterElement = document.getElementById("typewriter");

// The TextArray:
var textArray = [
    "Web Developer/Designer",
    "Roblox Builder",
    "GFX Designer",
    "Video Editor",
];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');

// function to generate the backspace effect
function delWriter(text, i, cb) {
  if (i >= 0) {
    typeWriterElement.innerHTML = text.substring(0, i--);
    // generate a random Number to emulate backspace hitting.
    var rndBack = 10 + Math.random() * 100;
    setTimeout(function () {
      delWriter(text, i, cb);
    }, rndBack);
  } else if (typeof cb == "function") {
    setTimeout(cb, 1000);
  }
}

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
  if (i < text.length + 1) {
    typeWriterElement.innerHTML = text.substring(0, i++);
    // generate a random Number to emulate Typing on the Keyboard.
    var rndTyping = 250 - Math.random() * 100;
    setTimeout(function () {
      typeWriter(text, i++, cb);
    }, rndTyping);
  } else if (i === text.length + 1) {
    setTimeout(function () {
      delWriter(text, i, cb);
    }, 1000);
  }
}

// the main writer function
function StartWriter(i) {
  if (typeof textArray[i] == "undefined") {
    setTimeout(function () {
      StartWriter(0);
    }, 1000);
  } else if (i < textArray[i].length + 1) {
    typeWriter(textArray[i], 0, function () {
      StartWriter(i + 1);
    });
  }
}
// wait one second then start the typewriter
setTimeout(function () {
  StartWriter(0);
}, 1000);
