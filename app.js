"use strict";
// ES6 

class Laptop{

constructor(name,color,isbuy){

    this.name=name;
    this.color=color;
    this.isbuy=isbuy;

  }

  sum(){
    console.log("narxi: " +this.isbuy);
  }

}


class Market extends Laptop{

  constructor(name,color,isbuy,isTop){
   super(name,color,isbuy);
   this.isTop=isTop;
  }


}

const dell=new Market('DELL ISP7', 'gray','2200','ISP7');

const hp=new Laptop('HP enevy x360',' silver', '1300');
const acer=new Laptop('Acer nitro','black','1150');

console.log(dell);
console.log(hp);
console.log(acer);

acer.sum();






