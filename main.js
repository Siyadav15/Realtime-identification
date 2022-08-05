noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function preload(){}
function setup(){
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    
}
function modelLoaded(){
    console.log("PoseNet is intialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X= "+noseX+"Nose Y= "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("Left wrist X= "+leftWristX+"Right wrist X= "+rightWristX+"Difference= "+difference);
    }
}
function draw(){
    background('#42f5ce');
    fill('#f76f88');
    stroke('#f7da6f');
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML="Width and height of square will be equal to: "+difference+" px";
}