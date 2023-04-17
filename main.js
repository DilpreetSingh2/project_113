function prelord(){

}

function setup(){
Canvas = createCanvas(640,480);
Canvas.position(300,300);
video = createCapture(VIDEO);
tint_color = "";
video.hide();

}

function draw(){
image(video,190,100,300,300);
tint(tint_color);
fill(250,0,0);
circle(50, 50, 100);
circle(590, 50, 100);
circle(50, 420, 100);
circle(590, 420, 100);
fill(0,250,0)
rect(25, 90, 50, 280);
rect(565, 90, 50, 280);
rect(100, 25, 440, 50);
rect(100, 400, 440, 50);




}

function apply_filter(){
    tint_color = document.getElementById("color_name").value;
}

function take_snapshot(){
    save('snapshot.png');
}


