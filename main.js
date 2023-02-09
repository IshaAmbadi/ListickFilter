mouthX=""
mouthY=""

function preload() {
    lips = loadImage('lipstick.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
    function modelLoaded() {
        console.log('PoseNet is initialized');
    }

    function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);
            mouthX = results[0].pose.nose.x-16;
            mouthY = results[0].pose.nose.y+15;
            console.log("mouth x =" + results[0].pose.nose.x);
            console.log("mouth y =" + results[0].pose.nose.y);
            console.log(results);
        }
    }

function draw() {
    image(video,0,0,300,300);
    image(lips,mouthX,mouthY,35,15);
}

function take_snapshot() {
    save('FilteredImage.png');
}