peter=music2.mp3;
harry=music.mp3;

function preload() {
    h_song=loadSound(harry);
    p_song=loadSound(peter);
}

function setup() {
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}