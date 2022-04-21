nosex=0;
nosey=0;
function preload(){
 nose2 = loadImage("https://i.postimg.cc/TwyzbDDf/clown-knows-removebg-preview.png"); 
}
function setup(){
    canvas = createCanvas(350,350);
    canvas.center(); 
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("PoseNet is intialized");
}
function gotPoses(results)
{
    console.log(results);
    nosex = + results[0].pose.nose.x;
    nosey = + results[0].pose.nose.y;
    console.log ("nose x ="+ nosex);
    console.log ("nose y ="+ nosey); 
}
function draw(){
image(video, 0, 0, 350, 350);
image(nose2,nosex,nosey,30,30);
}
function filter (){
    save('haha.png');
}