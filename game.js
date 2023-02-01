function initCanvas(){
   const ctx = document.getElementById('mi_canvas').getContext("2d");
   const BackgroundImage  = new Image();
   const naveImage        = new Image();
   const enemiespic1      = new Image();
   const enemiespic2      = new Image();

   BackgroundImage.src = "./css/imagenes/fondo.jpg"
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
            ctx.fillStyle = this.bg;
            ctx.drawImage(BackgroundImage, 10, 10);
            ctx.drawImage(naveImage, this.x, this.y, 100, 90);
        }
   }

   let launcher = new Launcher();


   function animate(){
    ctx.clearRect(0, 0, canvas_W, canvas_H);
    launcher.render();
    renderEnemies(enemies);
   }

   let animateInterval = setInterval(animate, 6);


}

window.addEventListener('load', function(event) {
    initCanvas()
});