$(document).ready(function(){

    $(".container_hamburgue").mouseenter(function(){
        $(".mercado").addClass("apagado")
        $(".container_opcao").addClass("apagado")
    })
    $(".container_hamburgue").mouseleave(function(){
        $(".mercado").removeClass("apagado")
        $(".container_opcao").removeClass("apagado")
    })
    $(".mercado").mouseenter(function(){
        $(".container_hamburgue").addClass("apagado")
        $(".container_opcao").addClass("apagado")
    })
    $(".mercado").mouseleave(function(){
        $(".container_hamburgue").removeClass("apagado")
        $(".container_opcao").removeClass("apagado")
    })
})
let left = document.querySelector(".left");
let rigth = document.querySelector(".rigth");
let quant= document.querySelector(".carrosel");
let indice = 0;

rigth.addEventListener("click", ()=>{

    if(indice ==0){
        quant.style.transform = `translateX(-270px)`;
        indice ++;
    }else if(indice ==1){
        quant.style.transform = `translateX(-520px)`;
        indice ++;
    }else if(indice ==2){
        quant.style.transform = `translateX(-780px)`;
        indice ++;
    }else if(indice ==3){
        quant.style.transform = `translateX(-1040px)`;
        indice ++;
    }
    else if(indice ==4){
        quant.style.transform = `translateX(-1300px)`;
        indice ++;
    }else if(indice ==5){
        quant.style.transform = `translateX(0px)`;
        indice =0;
    }
})
left.addEventListener("click", ()=>{

    if(indice ==0){
        quant.style.transform = `translateX(-1300px)`;
        indice ++;
    }else if(indice ==1){
        quant.style.transform = `translateX(-1040px)`;
        indice ++;
    }else if(indice ==2){
        quant.style.transform = `translateX(-780px)`;
        indice ++;
    }else if(indice ==3){
        quant.style.transform = `translateX(-520px)`;
        indice ++;
    }
    else if(indice ==4){
        quant.style.transform = `translateX(-270px)`;
        indice ++;
    }else if(indice ==5){
        quant.style.transform = `translateX(0px)`;
        indice =0;
    }
})

let left2 = document.querySelector(".left2");
let rigth2 = document.querySelector(".rigth2");
let quant2= document.querySelector(".carrosel2");
let indice2 = 0;
rigth2.addEventListener("click", ()=>{

    if(indice2 ==0){
        quant2.style.transform = `translateX(-260px)`;
        indice2 ++;
    }else if(indice2 ==1){
        quant2.style.transform = `translateX(-520px)`;
        indice2 ++;
    }else if(indice2 ==2){
        quant2.style.transform = `translateX(-780px)`;
        indice2 ++;
    }else if(indice2 ==3){
        quant2.style.transform = `translateX(-1040px)`;
        indice2 ++;
    }
    else if(indice2 ==4){
        quant2.style.transform = `translateX(-1300px)`;
        indice2 ++;
    }else if(indice2 ==5){
        quant2.style.transform = `translateX(0px)`;
        indice2 =0;
    }
})
left2.addEventListener("click", ()=>{

    if(indice2 ==0){
        quant2.style.transform = `translateX(-1300px)`;
        indice2 ++;
    }else if(indice2 ==1){
        quant2.style.transform = `translateX(-1040px)`;
        indice2 ++;
    }else if(indice2 ==2){
        quant2.style.transform = `translateX(-780px)`;
        indice2 ++;
    }else if(indice2 ==3){
        quant2.style.transform = `translateX(-520px)`;
        indice2 ++;
    }
    else if(indice2 ==4){
        quant2.style.transform = `translateX(-270px)`;
        indice2 ++;
    }else if(indice2 ==5){
        quant2.style.transform = `translateX(0px)`;
        indice2 =0;
    }
})


let left3 = document.querySelector(".left3");
let rigth3 = document.querySelector(".rigth3");
let quant3= document.querySelector(".dia");
let indice3 = 0;

rigth3.addEventListener("click", ()=>{
    if(indice3==0){
      quant3.style.transform=`translateX(-600px)`
      left3.style.transform=`translateY(-115px) translateX(50px) rotate(0deg)`
      rigth3.style.transform=`translateY(-95px) translateX(610px) rotate(0deg)`
      indice3++;
    }else if(indice3==1){
        quant3.style.transform=`translateX(-1250px)`
        indice3++;
        left3.style.transform=`translateY(-115px) translateX(40px) rotate(0deg)`
        rigth3.style.transform=`translateY(-95px) translateX(600px) rotate(0deg)`
    }
    else if(indice3==2){
        quant3.style.transform=`translateX(0px)`
        left3.style.transform=`translateY(-115px) translateX(14px) rotate(0deg)`
        rigth3.style.transform=` translateY(-95px) translateX(570px) rotate(0deg)`
        indice3=0;
    }
    
})