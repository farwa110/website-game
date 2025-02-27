window.addEventListener("load", sidenvises);

let point;
function sidenvises() {
  console.log("sidenvises");
  //Skjul andre skærme*****
  //Vis start skærm***********
  //gør startknap kikbar
  startSpillet();
}

function startSpillet() {
  console.log("startSpillet");
  //Skjul andre skærme
  //Nulstil point og liv
  point = 0;
  //Skriv point og liv ud
  //Start timer -animation
  //Random position og random delay
  //Start fald -animationer på elementer

  //gør blue rugbyball kikbart
  //lyt efter fald animation op på blue rugbyball kørt en gang
  //gør red rugbyball kikbart
  //lyt efter fald animation  på red rugbyball kørt en gang

  //lyt efter timer animation er færdig
}

function clickBlueBall() {
  console.log("clickBlueBall");
  //Få 1 point
  point++;
  //Skriv point ud
  //Afspil hurrah/yay lyd
  //Start BlueBallForsvind -animation
  //lyt efter forsvind animation er færdig på BlueBall
}

function clickBlueBallReset() {
  console.log("clickBlueBallReset");
  //Vis element igen
  //Ny random position
  //Genstart fald -animation
}
//redball********************************

function clickRedBall() {
  console.log("clickRedBall");
  //mist et liv
  //Vis antal liv
  //Afspil lyd Ooops
  //lyt efter forsvind animation er færdig på RedBall
}
function clickRedBallReset() {
  console.log("clickBlueBallReset");
  //Vis element igen
  //Ny random position
  //Genstart fald -animation
}

function stopSpillet() {
  console.log("stopSpillet");
  //Fjern alle animationer
  //Fjern alle eventListerner-ere
  //tjek om jeg har mere end 10 point
  //tjek om jeg har liv tibage
}
function gameOver() {
  console.log("gameOver");
  //Vis gameover skærm
  //gør genstarte klikbart
}
function levelComplete() {
  console.log("levelComplete");
  //Vis levelcomplete skærm
  //gør genstarte klikbart
}
