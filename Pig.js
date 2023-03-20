class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255; //totalmente visivel quando é chamado. Seu valor padrão
  }

 display(){
   console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push(); //adiciona itens/objetos/sprites na matriz. Sempre vai se tornando o ultimo da fila
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity); // 0 = invisivel, 255 = visivel
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop(); //retira itens/objetos/sprites na matriz. Sempre vai do ultimo para o penultimo para o antepenultimo.....
   } 
 }
};
