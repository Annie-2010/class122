 x = 0;
 y = 0;
 draw_circle = "";
 draw_rect = "";

 var speechRecognition = window.webkitSpeechRecognition;

 var recognition = new SpeechRecognition();

 function start()
 {
     document.getElementById("status").innerHTML = "system is listening please speak";
     recognition.start();

 }

 recognition.onresult = function(event) {
     console.log(event);

     var contant = event.resuls[0][0].transcript;

     document.getElementById("status").innerHTML = "the speech has been recognized as:  " + contant;
     if(contant =="circle")
     {
         x = Math.floor(Math.random() * 900);
         y = Math.floor(Math.random() * 600);
         document.getElementById("status").innerHTML = "started drawing circle";
         draw_circle = "set";
     }
     if(contant =="rectangle")
     {
         x = Math.floor(Math.random() * 900);
         y = Math.floor(Math.random() * 600);
         document.getElementById("status").innerHTML = "started drawing rectangle";
         draw_rect = "set";
     }
 }

 function setup() {
     canvas = createCanvas(900, 600);
 }

 function draw() {
    if(draw_circle == "set")
     {
          radius = Math.floor(Math.random() * 100);
           circle(x, y, radius);
            document.getElementById("status").innerHTML = "Circle is drawn. ";
             draw_circle = ""; 
            }

            if(draw_rect == "set")
            {
                 rect(x,y,70,50);
                   document.getElementById("status").innerHTML = "Rectangle is drawn. ";
                    draw_rect = ""; 
                   }
 }