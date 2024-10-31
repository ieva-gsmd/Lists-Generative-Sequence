
let synth;
let randomNotes = [];
let randomNumbers = [];
let pattern;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playSynth);

  //polyphonic synth
  synth = new Tone.PolySynth().toDestination();

  //set our scale
  let scale1 = ["C4", "D4", "E4", "F#4", "G#4"]

  //create 5 random numbers
  for (let i = 0; i < scale1.length; i ++){
    randomNumbers[i] = round(random(0, 4))

    //push those random notes into an array
    randomNotes.push(scale1[randomNumbers[i]])
    
  }
//console.log(randomNotes)

  //set out pattern
  pattern = new Tone.Pattern((time, note) => {
    // the order of the notes passed in depends on the pattern
    synth.triggerAttackRelease(note, 0.1, time);
  }, randomNotes, "upDown").start(0);


}
function draw() {
  background(220);
  
}

function playSynth() {
  Tone.Transport.start();
  playing = true;
}

function mouseReleased() {
  Tone.Transport.stop();
  playing = false;
}