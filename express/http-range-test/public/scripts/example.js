const audioCtx = new AudioContext();
let buffer = null;


//Now, we can play the sound file by creating an AudioNode,
//attaching our buffer to it, connecting it to the dac, and playing it.

const play = () => {
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.start();
  // console.log('we are playing');

  // get the audio element
const audioElement = document.querySelector('audio');
audioElement.src = source;

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

};

//Now, let's make the "GET" request.
//The responseType tells the program that we're loading a sound file.
//The onload function is a callback function that runs once the file has been grabbed from the server.
//Here, we are simply taking the raw audio file, and storing it in our AudioNode.

const load = () => {
  const request = new XMLHttpRequest();
  // request.open("GET", "freejazz.wav");
  request.open("GET", "music");
  request.responseType = "arraybuffer";
  request.onload = function() {
    let undecodedAudio = request.response;
    audioCtx.decodeAudioData(undecodedAudio, (data) => buffer = data);
    play();
  };
  request.send();
}

load();
