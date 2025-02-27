window.addEventListener("load", sidenVises);
// Opretter global variables
let points;
let liv;
let myRand;
let mySpeed;

// Opretter global konstanter
const blue1 = document.querySelector("#blueball_container1");
const blue2 = document.querySelector("#blueball_container2");
const blue3 = document.querySelector("#blueball_container3");
const red1 = document.querySelector("#redball_container1");
const red2 = document.querySelector("#redball_container2");
const red3 = document.querySelector("#redball_container3");

function sidenVises() {
  console.log("startSpil");
  //skjul andre skærm
  document.querySelector("#game_over").classList.add("skjul");
  document.querySelector("#level_complete").classList.add("skjul");

  document.querySelector("#sounds").classList.add("skjul");

  //vis start skærm
  document.querySelector("#start").classList.remove("skjul");

  //play clap sound
  document.querySelector("#game-music").currentTime = 0;
  document.querySelector("#game-music").play();
  //kilk på start_knap
  document.querySelector("#start_knap").addEventListener("click", startSpil);
}
function startSpil() {
  console.log("startSpil");
  document.querySelector("#game-music").pause();
  //skjul alle skærme
  document.querySelector("#game_over").classList.add("skjul");
  document.querySelector("#level_complete").classList.add("skjul");
  document.querySelector("#start").classList.add("skjul");
  document.querySelector("#sounds").classList.add("synlig");

  //Nulstil point og udskriv
  points = 0;
  document.querySelector("#points").textContent = points.toString().padStart(2, "0");

  //reset liv til 3
  liv = 3;
  document.querySelector("#liv").textContent = liv;

  //reset mySpeed
  mySpeed = 1;

  //Start timer
  document.querySelector("#time_sprite").classList.add("time");
  document.querySelector("#time_container").addEventListener("animationend", stopSpillet);

  //Giv en random position, start fald-animationer blue1
  blue1.classList.add("pos" + newRandNum(6), "speed" + mySpeed, "delay" + newRandNum(4), "fald");
  //Lyt efter fald-animationer er kørt en gang
  blue1.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue1.addEventListener("mousedown", clickBlue);

  //Giv en random position, start fald-animationer blue2
  blue2.classList.add("pos" + newRandNum(6), "speed" + mySpeed, "delay" + newRandNum(4), "fald");
  //Lyt efter fald-animationer er kørt en gang
  blue2.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue2.addEventListener("mousedown", clickBlue);

  //Giv en random position, start fald-animationer blue3
  blue3.classList.add("pos" + newRandNum(6), "speed" + mySpeed, "delay" + newRandNum(4), "fald");
  //Lyt efter fald-animationer er kørt en gang
  blue3.addEventListener("animationiteration", genstartBlue);
  //Lyt efter klik
  blue3.addEventListener("mousedown", clickBlue);
  //Giv en random position, start fald-animationer
  ///RED1
  red1.classList.add("pos" + newRandNum(6), "speed" + mySpeed, "delay" + newRandNum(4), "fald");
  //Lyt efter fald-animationer er er kørt en gang
  red1.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red1.addEventListener("mousedown", clickRed);

  ///RED2
  red2.classList.add("pos" + newRandNum(6), "speed" + mySpeed, "delay" + newRandNum(4), "fald");
  //Lyt efter fald-animationer er er kørt en gang
  red2.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red2.addEventListener("mousedown", clickRed);

  ///RED3
  red3.classList.add("pos" + newRandNum(6), "speed" + mySpeed, "delay" + newRandNum(4), "fald");
  //Lyt efter fald-animationer er er kørt en gang
  red3.addEventListener("animationiteration", genstartRed);
  //Lyt efter klik
  red3.addEventListener("mousedown", clickRed);
}

function clickBlue() {
  console.log("clickBlue");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickBlue);

  //play clap sound
  document.querySelector("#happy_sound").currentTime = 0;
  document.querySelector("#happy_sound").play();
  //frys (pause), fald-animationen
  this.classList.add("frys");

  //Tæl en op på points og udskriv
  points++;
  document.querySelector("#points").textContent = points.toString().padStart(2, "0");

  // Undersøg om points er 2 eller derover, hvis den er det sæt speed til 2

  // på 4 points skal speed blive 3

  if (points >= 4) {
    // hvis det er sandt
    mySpeed = 3;
  } else if (points >= 2) {
    // hvis det er sandt
    mySpeed = 2;
  }

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind_blue");

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", genstartBlue);
}

function genstartBlue() {
  console.log("genstartBlue");
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position til container og fald-animationer på element

  this.classList.add("pos" + newRandNum(6), "speed" + mySpeed, "delay" + newRandNum(4), "fald");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickBlue);
}

function clickRed() {
  console.log("clickRed");
  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", clickRed);

  //play clap sound
  document.querySelector("#sad_sound").currentTime = 0;
  document.querySelector("#sad_sound").play();
  //frys (pause), fald-animationen
  this.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind_red");

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", genstartRed);

  //Tæl en ned på liv og udskriv
  liv--;
  document.querySelector("#liv").textContent = liv;
  if (liv <= 0) {
    stopSpillet();
  }
}

function genstartRed() {
  console.log("genstartRed");
  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position til container og fald-animationer på element
  // red1.classList.add("pos" + nytRand(6), "fald");
  // red1.classList.add("pos" + newRandNum(6), "fald", "delay" + newRandNum(4), "speed" + mySpeed, "forsvind_red");
  this.classList.add("pos" + newRandNum(6), "speed" + mySpeed, "delay" + newRandNum(4), "fald");

  //Lyt efter klik på element
  this.addEventListener("mousedown", clickRed);
}

function stopSpillet() {
  console.log("stopSpillet");

  //Stop timer
  document.querySelector("#time_sprite").classList.remove("time");
  document.querySelector("#time_container").removeEventListener("animationend", stopSpillet);

  //fjern alt er på alle elementers container og sprite blue1
  blue1.classList = "";
  blue1.firstElementChild.classList = "";
  //fjern alle event listener på alle containere
  blue1.removeEventListener("animationiteration", genstartBlue);
  blue1.removeEventListener("animationend", genstartBlue);
  blue1.removeEventListener("mousedown", clickBlue);

  //fjern alt er på alle elementers container og sprite blue2
  blue2.classList = "";
  blue2.firstElementChild.classList = "";
  //fjern alle event listener på alle containere
  blue2.removeEventListener("animationiteration", genstartBlue);
  blue2.removeEventListener("animationend", genstartBlue);
  blue2.removeEventListener("mousedown", clickBlue);

  //fjern alt er på alle elementers container og sprite blue3
  blue3.classList = "";
  blue3.firstElementChild.classList = "";
  //fjern alle event listener på alle containere
  blue3.removeEventListener("animationiteration", genstartBlue);
  blue3.removeEventListener("animationend", genstartBlue);
  blue3.removeEventListener("mousedown", clickBlue);

  //fjern alt er på alle elementers container og sprite red1
  red1.classList = "";
  red1.firstElementChild.classList = "";
  //fjern alle event listener på alle containere
  red1.removeEventListener("animationiteration", genstartRed);
  red1.removeEventListener("animationend", genstartRed);
  red1.removeEventListener("mousedown", clickRed);

  //fjern alt er på alle elementers container og sprite red2
  red2.classList = "";
  red2.firstElementChild.classList = "";
  //fjern alle event listener på alle containere
  red2.removeEventListener("animationiteration", genstartRed);
  red2.removeEventListener("animationend", genstartRed);
  red2.removeEventListener("mousedown", clickRed);

  //fjern alt er på alle elementers container og sprite red3
  red3.classList = "";
  red3.firstElementChild.classList = "";
  //fjern alle event listener på alle containere
  red3.removeEventListener("animationiteration", genstartRed);
  red3.removeEventListener("animationend", genstartRed);
  red3.removeEventListener("mousedown", clickRed);

  if (liv <= 0) {
    gameover();
  } else if (points >= 5) {
    levelComplete();
  } else {
    gameover();
  }
}

function gameover() {
  console.log("gameover");
  //vis game_over skærm
  document.querySelector("#game_over").classList.remove("skjul");
  document.querySelector("#sounds").classList.add("skjul");
  document.querySelector("#sounds").classList.remove("synlig");
  if (liv <= 0) {
    document.querySelector("#game_over_text").textContent = "You performed poorly, you have lost all your lives.";
  } else {
    document.querySelector("#game_over_text").textContent = "You performed poorly, you get only " + points + "points";
  }
  //klik på startknap
  document.querySelector("#genstart1").addEventListener("click", startSpil);
}

function levelComplete() {
  console.log("levelComplete");
  //vis level_complete skærm
  document.querySelector("#level_complete").classList.remove("skjul");

  document.querySelector("#level_complete_text").innerHTML = "You're excellent! You scored " + points + "<br>Congratulations, you win!";

  //klik på startknap
  document.querySelector("#genstart2").addEventListener("click", startSpil);
}

function newRandNum(max) {
  return Math.floor(Math.random() * max) + 1;
}
