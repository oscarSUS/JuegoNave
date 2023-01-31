function initCanvas(){
   let ctx = document.getElementById("mi_canvas").getContext("2d");
   let BackgroundImage  = new Image();
   let naveImage        = new Image();
   let enemiespic1      = new Image();
   let enemiespic2      = new Image();

   BackgroundImage.src = "./css/fondo.jpg"
   naveImage.src = "./css/nave.png"
   enemiespic1.src = "./css/enemigo1.gif"
   enemiespic2.src = "./css/enemigo2.gif"

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

   const enemies = [
         new enemyTemplate({id : "enemy3", x: 350, y: 50, w: 80, h: 30})
   ];

   const renderEnemies = function(enemylist){
    for(let i= 0; i < enemylist.length; i++){
        let enemy = enemylist[i];
        ctx.drawImage(enemy.image, enemy.x, enemy.y, enemy.w, enemy.h);
    }
   }

   function animate(){
    ctx.clearRect(0, 0, canvas_W, canvas_H);
    renderEnemies(enemies);
   }

   let animateInterval = setInterval(animate, 6);


}