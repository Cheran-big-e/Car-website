canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "cars png1.jpeg";
cars1_x = 10;
cars1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car png2.png";
cars2_x = 10;
cars2_y = 100;

background_image = "racing background.gif";

function add(){
    background_imgtag = new Image();//defining variable with new image
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_image;

  car1_imgTag = new Image();
   car1_imgTag.onload = uploadcar1;
   car1_imgTag.src =  car1_image;

   car2_imgTag = new Image();
   car2_imgTag.onload = uploadcar2;
   car2_imgTag.src =  car2_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keycode;
    console.log(keyPressed);
    
    if(keyPressed == '38')
   {
       car1_up();
       console.log("up");
   }
   if(keyPressed == '40')
   {
       car1_down();
       console.log("down");
   }
   if(keyPressed == '39')
   {
       car1_right();
       console.log('right');
   }
   if(keyPressed == '37')
   {
       car1_left();
       console.log("left");
   }
   if(keyPressed == '38')
   {
       car2_up();
       console.log("up");
   }
   if(keyPressed == '40')
   {
       car2_down();
       console.log("down");
   }
   if(keyPressed == '39')
   {
       car2_right();
       console.log('right');
   }
   if(keyPressed == '37')
   {
       car2_left();
       console.log("left");
   }
   function up()
   {
       if(car1_y >=0 )
       {
           car1_y = car1_y-10;
           console.log("when up arrow is pressed = " + car1_x +"-" + car1_y);
           uploadBackground();
           uploadwater();
           uploadcar1();
       }
   }
   
   
   function down()
   {
       if(car1_y <=500 )
       {
           car1_y = car1_y+10;
           console.log("when down arrow is pressed = " + car1_x +"-" + car1_y);
           uploadBackground();
           uploadwater();
           uploadcar1();
       }
   }
   
   function left()
   {
       if(car1_y >=0 )
       {
          car1_x =car1_x -10;
           console.log("when left arrow is pressed = " + car1_x +"-" + car1_y);
           uploadBackground();
           uploadwater();
           uploadcar1();
       }
   }
   
   function right()
   {
       if(car1_y <=700 )
       {
          car1_x = car1_x +10;
           console.log("when right arrow is pressed = " + car1_x +"-" + car1_y);
           uploadBackground();
           uploadwater();
           uploadcar1();
       }
   }
   function up()
   {
       if(car2_y >=0 )
       {
           car2_y = car2_y-10;
           console.log("when up arrow is pressed = " + car2_x +"-" + car2_y);
           uploadBackground();
           uploadwater();
           uploadrover();
       }
   }
   
   
   function down()
   {
       if(car2_y <=500 )
       {
           car2_y = car2_y+10;
           console.log("when down arrow is pressed = " + car2_x +"-" + car2_y);
           uploadBackground();
           uploadwater();
           uploadcar2();
       }
   }
   
   function left()
   {
       if(car2_y >=0 )
       {
          car2_x =car2_x -10;
           console.log("when left arrow is pressed = " + car2_x +"-" + car2_y);
           uploadBackground();
           uploadwater();
           uploadcar2();
       }
   }
   
   function right()
   {
       if(car2_y <=700 )
       {
          car2_x = car2_x +10;
           console.log("when right arrow is pressed = " + car2_x +"-" + car2_y);
           uploadBackground();
           uploadwater();
           uploadcar2();
       }
   }
   }
