function initCanvas(){
   const ctx = document.getElementById('mi_canvas').getContext("2d");
   const BackgroundImage  = new Image();
   const naveImage        = new Image();
   const enemiespic1      = new Image();
   const enemiespic2      = new Image();

   BackgroundImage.src = "./css/imagenes/fondo3.jpg"
   naveImage.src = "./css/imagenes/nave.png"
   enemiespic1.src = "./css/imagenes/enemigo1.gif"
   enemiespic2.src = "./css/imagenes/enemigo2.gif"

   let canvas_W = ctx.canvas.width;
   let canvas_H = ctx.canvas.height;

   let enemyTemplate = function(options){
    return {
        id: options.id || '',
        x: options.x || '',
        y: options.y || '',
        w: options.w || '',
        h: options.h || '',
        image : options.image || enemiespic1
    }
   }

   let enemies = [
         new enemyTemplate({id : "enemy3", x: 350, y: 50, w: 80, h: 80})
   ];

   const renderEnemies = function(enemylist){
    for(let i= 0; i < enemylist.length; i++){
        let enemy = enemylist[i];
        ctx.drawImage(enemy.image, enemy.x, enemy.y += .5, enemy.w, enemy.h);
    }
   }

   function Launcher(){
        this.y = 500,
        this.x = canvas_W*.5 - 25,
        this.w = 100,
        this.h = 100,
        this.direccion,
        this.bg = "white",
        this.misiles = [];

        this.render = function(){
            if(this.direccion === 'left'){
                this.x -= 5;
            }
            else if(this.direccion === 'right'){
                this.x += 5;
            }
            else if(this.direccion === 'downArrow'){
                this.y += 5;
            }
            if(this.direccion === 'upArrow'){
                this.y -= 5;
            }

            ctx.fillStyle = this.bg;
            ctx.drawImage(BackgroundImage, 0, 0);
            ctx.drawImage(naveImage, this.x, this.y, 100, 90);
        }
   }

   let launcher = new Launcher();

   console.log(launcher)

   function animate(){
    ctx.clearRect(0, 0, canvas_W, canvas_H);
    launcher.render();
    renderEnemies(enemies);
   }

   let animateInterval = setInterval(animate, 6);

   document.addEventListener('keyup', function(event){
    switch(event.keycode){
        case teclas.LEFT:
            launcher.x += 0;
            launcher.direccion = '';
        break;
        case teclas.RIGHT:
            launcher.x -= 0;
            launcher.direccion;
        break;
        case teclas.UP:
            launcher.y -= 0;
            launcher.direccion = '';
        break;
        case teclas.DOWN:
            launcher.y += 0;
            launcher.direccion = '';
    }
    console.log(event)
   })

   document.addEventListener('keydown', function(event){
    switch(event.keycode){
        case teclas.UP:
            launcher.direccion = 'upArrow'
            if(launcher.y < canvas_H*.2 - 80){
                launcher.y += 0;
                launcher.direccion = '';
            }
        break;
        case teclas.DOWN:
            launcher.direccion = 'downArrow'
            if(launcher.y > canvas_H*.2 - 110){
                launcher.y -= 0;
                launcher.direccion = '';
            }
        break;
        case teclas.LEFT:
            launcher.direccion = 'left'
            if(launcher.x < canvas_W*.2 - 130){
                launcher.x += 0;
                launcher.direccion = '';
            }
        break;
        case teclas.RIGHT:
            launcher.direccion = 'right'
            if(launcher.x > canvas_W - 110){
                launcher.x -= 0;
                launcher.direccion = '';
            }
        break;
        case teclas.P:
            this.location.reload();
    }

    console.log(event)

   });

  
}

const teclas = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39,
    P:80
};

window.addEventListener('load', function(event) {
    initCanvas()
});