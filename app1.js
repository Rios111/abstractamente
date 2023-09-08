const sec = document.querySelector('.ss4')

const contenido = document.querySelector('#content')
const cara = document.querySelector('#cara')
const carru = document.querySelector('.carru')
const tarjeta = document.querySelectorAll('.tarjeta')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const texto = document.querySelector('.t1')
const fot = document.querySelector('.fot')

window.addEventListener('scroll', function (){
    console.log(this.window.scrollY)
    let pos = this.window.scrollY

    
    if (pos >=1) {
        cara.style.opacity = 1;
    }
    
    if(pos >= 700) {
       
        cara.style.opacity = 0;
        cara.style.transitionDuration = '.5' 
    } 

    if(pos >= 272) {
       
        carru.style.opacity = 1; 
    } 


    if(pos >= 1500) {
       
        carru.style.opacity = 0;
        carru.style.transitionDuration = '.5' 
    } 

    if (pos >= 1000) {
        tarjeta[0].style.opacity = 1;
        tarjeta[0].style.marginTop = '0px';
        tarjeta[1].style.opacity = 1;
        tarjeta[1].style.marginTop = '0px';
        tarjeta[1].style.transitionDelay = '.2s';
        tarjeta[2].style.opacity = 1;
        tarjeta[2].style.marginTop = '0px';
    }
    if (pos <= 1000) {
        tarjeta[0].style.opacity = 0;
        tarjeta[0].style.marginTop = '100px';
        tarjeta[1].style.opacity = 0;
        tarjeta[1].style.marginTop = '100px';
        tarjeta[1].style.transitionDelay = '.2s';
        tarjeta[2].style.opacity = 0;
        tarjeta[2].style.marginTop = '100px';
    }

    if (pos >= 2000) {
        tarjeta[0].style.opacity = 0;
        tarjeta[1].style.opacity = 0;
        tarjeta[1].style.transitionDelay = '.2s';
        tarjeta[2].style.opacity = 0;
    }


    if (pos >= 1870) {
        img1.style.opacity = 1;
        img1.style.transitionDelay = '.2s';
        img2.style.opacity = 1;
        img2.style.transitionDelay = '.2s';
    }


    if (pos >= 2481) {
        fot.style.marginTop = '0px';
        fot.style.opacity = 1;
        fot.style.transitionDelay = '.2s';
    }

    if (pos < 2429) {
        fot.style.marginTop = '100px';
        fot.style.opacity = 1;
        fot.style.transitionDelay = '.2s';
    }





}) 