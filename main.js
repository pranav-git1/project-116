noseX = 0
noseY = 0

function preload() {
    img = loadImage('https://i.postimg.cc/1zNg8wsk/300x250-size-29-kb-beard-png-image-beard-and-moustache-format-png-27.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img, noseX, noseY, 180, 180);
}

function modelLoaded() {
    console.log('Posenet is loaded');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 95;
        noseY = results[0].pose.nose.y - 110;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function take_snapshot() {
    save('Project-114-image');
}