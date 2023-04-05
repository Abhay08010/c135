function preload(){

}

function setup(){
    canvas=createCanvas(800,700);
    canvas.position(850,150);
    video = createCapture(VIDEO);
    video.size(800,700)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
}
}

function modelLoaded(){
    console.log("Model is Loaded!!!!!");
}



function draw(){
background("#C39BD3");
}