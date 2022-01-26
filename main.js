// obtener el canvas del html
const canvas = document.getElementById("canvas");
const sonido = document.getElementById('sound')

 // set up context
const ctx = canvas.getContext("2d");
let audio = new Audio()
audio.loop = false
audio.src= "assets/music/03 Zombie Panic.mp3"
let requestID;
var interval = null
let bullets = []
let frames =0 
let score = 0
//let neighbord = ["assets/images/inspector.png","assets/images/maestra.png", "assets/images/nina.png","assets/images/perro.png", "assets/images/porrista.png", "assets/images/soldado.png", "assets/images/vacacionistas.png","assets/images/bebe.png","assets/images/nina.png"]
//var elapsedTime = 2
//var counter = 0
// Clase BackGround
const neighbord = []


class Background{
    constructor(){
        //mis propiedades
        this.x = 300;
        this.y = 25;
        this.width = 800;
        this.height = 700;
        this.image = new Image();
        this.image.src = "assets/images/backGround.PNG"

    }  
       //metodos
    draw() {
        
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        //ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    gameOver(){
        ctx.font = "80px Arial"
        ctx.fillText("Te moriste banda!! u.u",150,150)
    }
}
 //Instancia Zeke

class ZekePersonaje{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.image1 = new Image()
        this.image1.src = "assets/images/Camina1.PNG"
        this.image2 = new Image()
        this.image2.src = "assets/images/Camina2.PNG"
        this.image3 = new Image()
        this.image3.src = "assets/images/Camina3.PNG"
        this.image4 = new Image()
        this.image4.src = "assets/images/Camina4.PNG"
        this.image5 = new Image()
        this.image5.src = "assets/images/Camina5.PNG"
        this.image6 = new Image()
        this.image6.src = "assets/images/Camina6.PNG"
        this.image7 = new Image()
        this.image7.src = "assets/images/Camina7.PNG"
        this.image8 = new Image()
        this.image8.src = "assets/images/Camina8.PNG"
        this.image9 = new Image()
        this.image9.src = "assets/images/Camina9.PNG"
        this.image10 = new Image()
        this.image10.src = "assets/images/Camina10.PNG"
        this.image11 = new Image()
        this.image11.src = "assets/images/Camina11.PNG"
        this.image12 = new Image()
        this.image12.src = "assets/images/Camina12.PNG"
        this.image13 = new Image()
        this.image13.src = "assets/images/Camina13.PNG"
        this.image14 = new Image()
        this.image14.src = "assets/images/Camina14.PNG"
        this.image15 = new Image()
        this.image15.src = "assets/images/Camina15.PNG"
        this.image16 = new Image()
        this.image16.src = "assets/images/Camina16.PNG"
        this.image17 = new Image()
        this.image17.src = "assets/images/Camina17.PNG"
        this.image18 = new Image()
        this.image18.src = "assets/images/Camina18.PNG"
        this.image19 = new Image()
        this.image19.src = "assets/images/Camina19.PNG"
        this.image20 = new Image()
        this.image20.src = "assets/images/Camina20.PNG"
        this.image21 = new Image()
        this.image21.src = "assets/images/h1.png"
        this.image22 = new Image()
        this.image22.src = "assets/images/h2.png"
        this.image23 = new Image()
        this.image23.src = "assets/images/h3.png"
        this.image24 = new Image()
        this.image24.src = "assets/images/h4.png"
        this.image = new Image()
        this.image.src = "assets/images/bala.png"
        this.direction = ""
        


    }

    draw(){
        switch (this.direction){
            default:
                ctx.drawImage(this.image24,this.x,this.y,this.width,this.height);
            break;
            case "izquierda":
                ctx.drawImage(this.image21,this.x,this.y,this.width,this.height);
            break;
            case "derecha":
                ctx.drawImage(this.image23,this.x,this.y,this.width,this.height);
            break;
            case "arriba":
                ctx.drawImage(this.image22,this.x,this.y,this.width,this.height);
            break;
            case "abajo":
                ctx.drawImage(this.image24,this.x,this.y,this.width,this.height);
            break;
        }

    }

    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }

    score(){
        let score = 0
        score= score+100
        ctx.fillStyle="black"
        ctx.font = '20px Arial';
        ctx.fillText(`Score ${score}`, 15, 25);

    }


    
}

class Bebe{
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 60
        this.height = 60
        this.image1 = new Image()
        this.image1.src = "assets/images/bebe.PNG"

    }
    draw(){

        //setInterval(move(),2000)
        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
        //console.log(this.imageActual)
    }

    
} 

class Cooker{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.image1 = new Image()
        this.image1.src = "assets/images/cocinero.PNG"

    }
    draw(){

        //setInterval(move(),2000)
        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
        //console.log(this.imageActual)
    }
    
} 

class Leader{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.image1 = new Image()
        this.image1.src = "assets/images/porrista.PNG"

    }
    draw(){

        //setInterval(move(),2000)
        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
        //console.log(this.imageActual)
    }
    
} 
  
class Dog{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.image1 = new Image()
        this.image1.src = "assets/images/perro.PNG"

    }
    draw(){

        //setInterval(move(),2000)
        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
        //console.log(this.imageActual)
    }
    
} 
class Couple{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.image1 = new Image()
        this.image1.src = "assets/images/vacacionistas.PNG"

    }
    draw(){

        //setInterval(move(),2000)
        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
        //console.log(this.imageActual)
    }
    
} 
class Soldier{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.image1 = new Image()
        this.image1.src = "assets/images/soldado.PNG"

    }
    draw(){

        //setInterval(move(),2000)
        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
        //console.log(this.imageActual)
    }
    
} 

class Girl{
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.image1 = new Image()
        this.image1.src = "assets/images/nina.PNG"

    }
    draw(){

        //setInterval(move(),2000)
        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)
        //console.log(this.imageActual)
    }
    
} 

class Bullet {
    constructor(x,y,dir){
        this.x = x
        this.y = y
        this.width = 20
        this.height = 20
        this.image1 = new Image()
        this.image1.src = "assets/images/bala (1).png"
        this.direction2 = dir

    }
    draw(){

        switch (this.direction2){
            case "izquierda":
                
                if(frames % 10 === 0){
                    this.x -=30
                }
                ctx.drawImage(this.image1,this.x,this.y,this.width,this.height);
            break;
            case "derecha":
                if(frames % 10 === 0){
                    this.x +=30
                }
                ctx.drawImage(this.image1,this.x,this.y,this.width,this.height);
            break;
            case "arriba":
                if(frames % 10 === 0){
                    this.y -=30
                }
                ctx.drawImage(this.image1,this.x,this.y,this.width,this.height);
            break;
            case "abajo":
                if(frames % 10 === 0){
                    this.y +=30
                }
                ctx.drawImage(this.image1,this.x,this.y,this.width,this.height);
            break;
        }

    }

    
}

//Instancias
const fondo = new Background()
const zeke = new ZekePersonaje(350,60,40,50)
const cocinero = new Cooker(980,70,60,60)
const porrista = new Leader(1010,200,60,60)
const perro = new Dog(350,630,60,60)
const vacacionistas = new Couple(580,495,60,60)
const soldado = new Soldier(420,210,60,60)
const nina = new Girl(990,600,60,60)

function drawNeighbord(){
    
    const bebe = new Bebe(720,70,60,60)
    neighbord.push(bebe)

    neighbord.forEach((bebe,index_bebe) =>{
        bebe.draw()    
    
        if(zeke.collision(bebe)){
            console.log("Me esta tocando")
            zeke.score ++
            neighbord.splice(index_bebe,1,'')
            console.log(neighbord)
            //zeke.score()
            
        }
    })    
    
}

function drawBullets(){

        bullets.forEach((bullet,index_bullet) =>{
        bullet.draw()
        //validar si choca con un enemigo

       
        //sacar la bala si se sale del canvas
        if(bullet.x <= 300 || bullet.x+bullet.width>= 1100){ // bullet.x <= 0 || bullet.x+bullet.width>= 1300
            bullets.splice(index_bullet,1)
            console.log(bullets)
        }else if(bullet.y <= 50 || bullet.y+bullet.height>= 730){ //bullet.x + bullet.width >= 800 bullet.y <= 0 || bullet.y+bullet.height>= 750
            bullets.splice(index_bullet,1)
        }
    })
}







function updateCanvas(){
    frames++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    fondo.draw()
    zeke.draw()
    //bebe.draw()
    cocinero.draw()
    porrista.draw()
    perro.draw()
    vacacionistas.draw()
    soldado.draw()
    nina.draw()
    drawBullets()
    drawNeighbord()

    if(requestID){
        requestID = requestAnimationFrame(updateCanvas)
        }
}

// imprime el juego a html
function startGame() {

    //ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestID = requestAnimationFrame(updateCanvas)
}
startGame()


//Mover a Zeke
addEventListener("keydown",(event) => {
    //izq
    let key = event.keyCode
    console.log(event)
    if(key === 37) {
        //ZekePersonaje.left()
        zeke.direction = "izquierda"
        zeke.x -= 20; 
        console.log(key)
    }
    //derecha
    if(key === 39){
        zeke.direction = "derecha"
        zeke.x += 20
        console.log(key)
    }
    //arriba
    if(key ===38){
        zeke.direction = "arriba"
        zeke.y -= 20;
        console.log(key)
    }
    //abajo
    if (key === 40){
        zeke.direction = "abajo"
        zeke.y +=20;
        console.log(key)
    }
    if (key === 75){
        const bullet = new Bullet(zeke.x, zeke.y,zeke.direction)
        bullets.push(bullet)
    
    }

})

sonido.addEventListener("click", function() {

    if(!audio.loop){
        audio.play()
        audio.loop = true
        //console.log(audio.loop)
    }else{
        audio.pause()
        audio.loop = false
        //console.log(audio.loop)
    }



} );







