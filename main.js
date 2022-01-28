// Obtener el canvas del html
const canvas = document.getElementById("canvas");
const sonido = document.getElementById('sound')


 // Declaration
const ctx = canvas.getContext("2d");
let audio = new Audio()
audio.loop = false
audio.src= "assets/music/03 Zombie Panic.mp3"
let audioShoot = new Audio()
audioShoot.loop = false
audioShoot.src= "assets/music/disparo.mp3"
let audioLose = new Audio()
audioLose.loop = false
audioLose.src= "assets/music/lose.mp3"
let audioWinner = new Audio()
audioWinner.loop = false
audioWinner.src= "assets/music/winner.mp3"
let audioNeighbord = new Audio()
audioNeighbord.loop = false
audioNeighbord.src= "assets/music/neighbord.mp3"
let requestID;
var interval = null
let bullets = []
let frames =0 
const imagezom = new Image()
imagezom.src = "assets/images/z5.png"
const neighbord = []
const imageZombies = ["assets/images/z13.png","assets/images/h10.png", "assets/images/j9.png"]
const arrayZombi = []
const enemies = []
const porristaArray = []
const ninaArray = []
const perroArray = []
const bebeArray = []
const soldadoArray = []
const vacacionistasArray = []
const cocineroArray = []

// Background Class
class Background{
    constructor(){
        //mis propiedades
        this.x = 8;
        this.y = 25;
        this.width = 1000;
        this.height = 700;
        this.image = new Image();
        this.image.src = "assets/images/backGround.PNG"

    }  
       //metodos
    draw() {
        
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        
    }
    //gameover
    gameOver(){
        ctx.fillStyle = "white"
        ctx.font = "100px Arial"
        ctx.fillText("Game Over",250,370)
        audioLose.play()
    }
    //win
    win(){
        ctx.fillStyle = "white"
        ctx.font = "100px Arial"
        ctx.fillText("Winner!",350,370)
    }

}
 // Zeke Class

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
        this.score = 0
        this.life = 0
        


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

}

// Baby Class
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


        ctx.drawImage(this.image1,this.x,this.y,this.width,this.height)

    }

    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }

    
} 

// Cooker Class
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

    collision(item){

        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
        
    }
    
} 

// Cheerleader Class
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

    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
    
} 

// Dog Class
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
    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
    
} 

//Couple Class
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

    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
    
}

// Soldier Class
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

    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
    
} 

// Girl Class
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

    collision(item){
        return(
            this.x < item.x + item.width &&
            this.x + this.width > item.x &&
            this.y < item.y + item.height &&
            this.y + this.height > item.y
        )
    }
    
} 

// Bullet Class
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

// CharacterZombie Class
class CharacterZombie {
    constructor(x,y,w,h,img){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.image = new Image()
        this.image.src = img
    }
    //metodos
    draw(){
        if(frames % 10 === 0) {
            this.x -= 5;
        }
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    
            
        collision(item){


            return(
                this.x < item.x + item.width &&
                this.x + this.width > item.x &&
                this.y < item.y + item.height &&
                this.y + this.height > item.y
                    )
            
    }
}


//Instancias
const fondo = new Background()
const zeke = new ZekePersonaje(110,60,40,50)
const nina = new Girl(690,600,60,60)
const soldado = new Soldier(180,210,60,60)
const vacacionistas = new Couple(350,495,60,60)
const perro = new Dog(250,630,60,60)
const bebe = new Bebe(470,70,60,60)
const cocinero = new Cooker(780,70,60,60)
const porrista = new Leader(700,200,60,60)


//Function Nina
function drawNeighbordNina(){

    if(frames === 1){

    ninaArray.push(nina)
    console.log(ninaArray)
}

    ninaArray.forEach((nina,index_nina) =>{
        nina.draw()    


    if(zeke.collision(nina)){
        console.log("Me esta tocando")
        zeke.score ++
        ninaArray.splice(index_nina,1)
        console.log(ninaArray)
        audioNeighbord.play()
        
    }


    })    
   
}

//Function Soldado
function drawNeighbordSoldado(){

    if(frames === 1){

    soldadoArray.push(soldado)
    console.log(soldadoArray)
}

    soldadoArray.forEach((soldado,index_soldado) =>{
        soldado.draw()    


    if(zeke.collision(soldado)){
        console.log("Me esta tocando")
        zeke.score ++;
        soldadoArray.splice(index_soldado,1);
        console.log(soldadoArray)
        audioNeighbord.play()
        
    }


    })    
   
}

// Function Vacacionista
function drawNeighbordVacacionista(){

    if(frames === 1){

    vacacionistasArray.push(vacacionistas)
    console.log(vacacionistasArray)
}

    vacacionistasArray.forEach((vacacionistas,index_vacacionistas) =>{
    vacacionistas.draw()    


    if(zeke.collision(vacacionistas)){
        console.log("Me esta tocando")
        zeke.score ++
        vacacionistasArray.splice(index_vacacionistas,1)
        console.log(vacacionistasArray)
        audioNeighbord.play()
        
    }


    })    
   
}

// Function Dog
function drawNeighbordPerro(){

    if(frames === 1){

    perroArray.push(perro)
    console.log(perroArray)
}

    perroArray.forEach((perro,index_perro) =>{
    perro.draw()    


    if(zeke.collision(perro)){
        console.log("Me esta tocando")
        zeke.score ++
        perroArray.splice(index_perro,1)
        console.log(perroArray)
        audioNeighbord.play()
        
    }


    })    
   
}

// Function Baby
function drawNeighbordBebe(){

            if(frames === 1){

            bebeArray.push(bebe)
            console.log(bebeArray)
        }

            bebeArray.forEach((bebe,index_bebe) =>{
            bebe.draw()    
    

            if(zeke.collision(bebe)){
                console.log("Me esta tocando")
                zeke.score ++
                bebeArray.splice(index_bebe,1)
                audioNeighbord.play()
                console.log(bebeArray)
                
            }

            })
 
           
}

// Function Cooker
function drawNeighbordCocinero(){

        if(frames === 1){

        cocineroArray.push(cocinero)
        console.log(cocineroArray)
    }

        cocineroArray.forEach((cocinero,index_cocinero) =>{
        cocinero.draw()    


    if(zeke.collision(cocinero)){
        console.log("Me esta tocando")
        zeke.score ++
        cocineroArray.splice(index_cocinero,1)
        audioNeighbord.play()
        
        //console.log(cocineroArray)
        
    }
    
    }) 

   
}

// Function Cheerleader
function drawNeighbordPorrista(){

    if(frames === 1){
        
        porristaArray.push(porrista)
        console.log(porristaArray)
    }

    porristaArray.forEach((porrista,index_porrista) =>{
        porrista.draw()    


        if(zeke.collision(porrista)){
            console.log("Me esta tocando")
            zeke.score ++
            porristaArray.splice(index_porrista,1)
            console.log(porristaArray)
            audioNeighbord.play()
        
        }


    })    


}

// Status Win
function status(){

    if(zeke.score >= 6){
        return "ganaste"
    }

}
// Status Lose
function statusLose(){

    if(zeke.life === 2){
        return "perdiste"
    }
}

// Update Canvas
function updateCanvas(){
    frames++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    fondo.draw()
    zeke.draw()
    drawNeighbordBebe()
    drawNeighbordCocinero()
    drawNeighbordPorrista()
    drawNeighbordPerro()
    drawNeighbordVacacionista()
    drawNeighbordSoldado()
    drawNeighbordNina()
    generateZombies()
    drawZombies()
    lifeLeft()
    

    switch (status()){
        case "ganaste":
            fondo.win()
            audioWinner.play()
            //fondo.puntos()
            requestID = null;
            
        break;
            
    }

    switch (statusLose()){
        case "perdiste":
            fondo.gameOver()
            audioLose.play()
            requestID = null;
            
        break;
            
    }
    

    if(requestID){
        requestID = requestAnimationFrame(updateCanvas)
        }
}

// imprime el juego a html
function startGame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestID = requestAnimationFrame(updateCanvas)
}
startGame()

// Generate Zombies
function generateZombies(){

    //decirle en que intervalo de tiempo quiero que se genere mi enemigo 1100 3860 500 abajo 600 70 70
    if(frames % 100===0 || frames % 660 === 0 || frames % 400 ===0){
        let y = Math.floor(Math.random() * (600 - 70) ) + 100
        let imgRand = Math.floor(Math.random() * imageZombies.length)
        const zoMbie = new CharacterZombie (canvas.width,y,50,50,imageZombies[imgRand])
        enemies.push(zoMbie)
    }



}

// Draw Zombies
function drawZombies(){


        enemies.forEach((zoMbie,index_zoMbie) =>{
            zoMbie.draw()

            if(zeke.collision(zoMbie)){
                requestID = null
                fondo.gameOver()
            }
            
                if(porristaArray.length === 0){

                } else if(porristaArray.length !== 0){

                
                    
                    if(porrista.collision(zoMbie)){
                        
                    zeke.life ++
                    porristaArray.splice(0,1)
                    console.log(porristaArray)

                    }
                }
            
                if(bebeArray.length === 0){

                } else if(bebeArray.length !== 0){

                    if(bebe.collision(zoMbie)){
                    
                        zeke.life ++
                        bebeArray.splice(0,1)
                        console.log(bebeArray)
                    }
            
                }
              
                if(soldadoArray.length === 0){

                } else if(soldadoArray.length !== 0){

                    if(soldado.collision(zoMbie)){
                        
                        zeke.life ++
                        soldadoArray.splice(0,1)
                        console.log(soldadoArray)
                    }
                }
            
                
                if(cocineroArray.length === 0){

                } else if(cocineroArray.length !== 0){

                
                    if(cocinero.collision(zoMbie)){
                        
                        zeke.life ++
                        cocineroArray.splice(0,1)
                        console.log(cocineroArray)
                    }
                }
            
                if(ninaArray.length === 0){

                } else if(ninaArray.length !== 0){
                    
                    if(nina.collision(zoMbie)){
                    
                    zeke.life ++
                    ninaArray.splice(0,1)
                    console.log(ninaArray)
                    }
                }

                if(perroArray.length === 0){

                } else if(perroArray.length !== 0){

                    if(perro.collision(zoMbie)){
                        
                        zeke.life ++
                        perroArray.splice(0,1)
                        console.log(perroArray)
                    }
                }    
                
                if(vacacionistasArray.length === 0){

                } else if(vacacionistasArray.length !== 0){

                    if(vacacionistas.collision(zoMbie)){
                        
                        zeke.life ++
                        vacacionistasArray.splice(0,1)
                        console.log(vacacionistasArray)
                    }
                }
            
                    
            
            bullets.forEach((bullet,index_bullet) =>{
                    bullet.draw()


                    if( zoMbie.collision(bullet)){
                        enemies.splice(index_zoMbie,1)
            
                    }

                    if(bullet.x <= 80 || bullet.x+bullet.width>= 1100){ 
                        bullets.splice(index_bullet,1)

                    }else if(bullet.y <= 50 || bullet.y+bullet.height>= 730){ 
                        bullets.splice(index_bullet,1)
                    }
            
            
                    if (zoMbie.x + canvas.width + 1000 <= 200){
                        enemies.splice(index_zoMbie,1)
                    }
            })

        })


}

// Score 
function lifeLeft (){
    ctx.fillStyle="white"
    ctx.font = "30px"
    ctx.fillText(`Number of Saved Neighbors : ${zeke.score}`,40,20)

}


//Mover a Zeke
addEventListener("keydown",(event) => {
    //izq
    let key = event.keyCode
    console.log(event)
    if(key === 37) {
        zeke.direction = "izquierda"
        if(zeke.x >=50){
            zeke.x -= 20; 
            console.log(key)
        }

    }
    //derecha
    if(key === 39){
        if(zeke.x + 800 <=1750){
            zeke.direction = "derecha"
            zeke.x += 20
            console.log(key)
        }

    }
    //arriba
    if(key ===38){
        if(zeke.y >=50){
            zeke.direction = "arriba"
            zeke.y -= 20;
            console.log(key)
        }
    }
    //abajo
    if (key === 40){
        if(zeke.y <=630){
            zeke.direction = "abajo"
            zeke.y +=20;
            console.log(key)
        }
    }
    if (key === 75){
        const bullet = new Bullet(zeke.x, zeke.y,zeke.direction)
        bullets.push(bullet)
        audioShoot.play()
    
    }

})
// Musica de juego
sonido.addEventListener("click", function() {

    if(!audio.loop){
        audio.play()
        audio.loop = true
        
    }else{
        audio.pause()
        audio.loop = false
        
    }



} );







