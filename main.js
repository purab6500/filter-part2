
eyesx=0;
eyesy=0;

function preload(){
    goggle=loadImage("https://i.postimg.cc/8P64LQvb/Untitled-2-copy.png");
}
function  setup()
    
{
    Canvas=createCanvas(300, 300);
    Canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results)
        eyesx=results[0].pose.leftEye.x;
        eyesy=results[0].pose.rightEye.y;
        console.log("eye x ="+ eyesx);
        console.log("eye y ="+ eyesy);
    }
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function draw(){
image(video, 0, 0, 300, 300);

fill(255, 0,0);
stroke(255, 0,0);
image(goggle, eyesy, eyesx, 100, 100);
}

function takesnap(){
    save('my_filter_image.png')
}
