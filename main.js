function setup() {
  canvas = createCanvas(350, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', ModelLoaded);
}
function ModelLoaded(){
  console.log("Model Loaded!");
}
function draw(){
  image(video, 0, 0, 350, 300);
  classifier.classify(video, gotResult);
}
function gotResult(error, results){
  if (error){
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    accuracy = Math.floor(results[0].confidence * 100);
    document.getElementById("result_object_accuracy").innerHTML = accuracy + "%"
  }
}