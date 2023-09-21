const sec = document.querySelector('.ss4');
const gog = document.querySelector('#gog');
const back2 = document.querySelector('#back2');
const tuu = document.querySelector('#tuu');
const perso = document.querySelector('.perso');
const contenido = document.querySelector('#content');
const cara = document.querySelector('#cara');
const carru = document.querySelector('.carru');
const tarjeta = document.querySelectorAll('.tarjeta');
const img1 = document.querySelector('#img1');
const texto = document.querySelector('.t1');
const fot = document.querySelector('.fot');
const texto_uno = document.querySelector('.text_uno');
const traa = document.querySelector('.traa');
const ese44 = document.querySelector('#s44');

setTimeout(function () {
    cara.style.opacity = 1;
    cara.style.marginTop = '0px';
    cara.style.transitionDuration = '1.5s';
    texto_uno.style.opacity = 1;
    texto_uno.style.marginTop = '0px';
    texto_uno.style.transitionDuration = '.5'; 
}, 1000)

window.addEventListener('scroll', function (){
    console.log(this.window.scrollY)
    let pos = this.window.scrollY
  
    if (pos > traa.offsetTop) {
        texto_uno.style.opacity = 1;
        texto_uno.style.marginTop = '0px';
        texto_uno.style.transitionDuration = '.5' 
    }
    
    if(pos >= traa.offsetTop) {
        texto_uno.style.opacity = 0;
        texto_uno.style.marginTop = '100px';
        texto_uno.style.transitionDuration = '1.5s'
    } 

    if (pos < traa.offsetTop) {
        texto_uno.style.opacity = 1;
        texto_uno.style.marginTop = '0px';
        texto_uno.style.transitionDuration = '.5' 
    }

    if (pos > traa.offsetTop) {
        cara.style.opacity = 1;
        cara.style.marginTop = '0px';
        cara.style.transitionDuration = '.5';
    }
    
    if(pos >= traa.offsetTop) {      
        cara.style.opacity = 0;
        cara.style.marginTop = '100px';
        cara.style.transitionDuration = '1.5s';
    } 

    if (pos < traa.offsetTop) {
        cara.style.opacity = 1;
        cara.style.marginTop = '0px';
        cara.style.transitionDuration = '.5'; 
    }
  
    if(pos > perso.offsetTop) {        
        carru.style.opacity = 1;
        carru.style.transitionDuration = '.5'; 
        carru.style.transform = 'scale(0.9)';
        carru.style.marginTop = '0';      
    } 

    if(pos < perso.offsetTop) {       
        carru.style.opacity = 0;
        carru.style.transitionDuration = '.5'; 
        carru.style.transform = 'scale(0)';
        carru.style.marginTop = '0px';       
    } 

    if(pos > ese44.offsetTop) {       
        carru.style.opacity = 0;
        carru.style.transitionDuration = '.5'; 
        carru.style.transform = 'scale(0)';
        carru.style.marginTop = '0px';       
    } 

    if(pos < ese44.offsetTop) {
        carru.style.opacity = 1;
        carru.style.transitionDuration = '.5'; 
        carru.style.transform = 'scale(0.9)';
        carru.style.marginTop = '0';      
    } 

    if(pos > texto_uno.offsetTop) {    
        traa.style.opacity = 1; 
        traa.style.transform = 'scale(0.9)';      
    } 

    if(pos < texto_uno.offsetTop) {      
        traa.style.opacity = 0;
        traa.style.transitionDuration = '.5'; 
        traa.style.transform = 'scale(0)';      
    } 

    if(pos > carru.offsetTop) {   
        traa.style.opacity = 0;
        traa.style.transitionDuration = '.5'; 
        traa.style.transform = 'scale(0)';     
    } 

    if (pos > back2.offsetTop) {
        tarjeta[0].style.opacity = 1;
        tarjeta[0].style.marginTop = '0px';
        tarjeta[1].style.opacity = 1;
        tarjeta[1].style.marginTop = '0px';
        tarjeta[1].style.transitionDelay = '.2s';
        tarjeta[2].style.opacity = 1;
        tarjeta[2].style.marginTop = '0px';
    }

    if (pos < back2.offsetTop) {
        tarjeta[0].style.opacity = 0;
        tarjeta[0].style.marginTop = '100px';
        tarjeta[1].style.opacity = 0;
        tarjeta[1].style.marginTop = '100px';
        tarjeta[1].style.transitionDelay = '.2s';
        tarjeta[2].style.opacity = 0;
        tarjeta[2].style.marginTop = '100px';
    }

    if (pos > back2.offsetTop) {
        tuu.style.transitionDelay = '.2s';
        tuu.style.opacity = 1  
    }

    if (pos < back2.offsetTop) {
        tuu.style.transitionDelay = '.2s';
        tuu.style.opacity = 0;
    }

    if (pos > tuu.offsetTop) {
        fot.style.marginTop = '0px';
        fot.style.opacity = 1;
        fot.style.transitionDelay = '.2s';
    }

    if (pos < tuu.offsetTop) {
        fot.style.marginTop = '200px';
        fot.style.opacity = 0;
        fot.style.transitionDelay = '.2s';
    }
}) 

console.log(texto_uno.offsetTop)
console.log(cara.offsetTop)
console.log(traa.offsetTop)
console.log(gog.offsetTop)
console.log(tarjeta.offsetTop)
console.log(img1.offsetTop)
console.log(fot.offsetTop)
console.log(carru.offsetTop)
console.log(ese44.offsetTop)
console.log(perso.offsetTop)
console.log(back2.offsetTop)











    
 //////////////////////////////////


/* const img2 = document.querySelector('#img2')*/

  /* if (pos >= cara.offsetTop) {
       
        carru.style.opacity = 1; 
        carru.style.transform = 'scale(0.9)'
        carru.style.marginTop = '0px'; 
    }  */

    /* if (pos > back2.offsetTop) {
        tarjeta[0].style.opacity = 0;
        tarjeta[1].style.opacity = 0;
        tarjeta[1].style.transitionDelay = '.2s';
        tarjeta[2].style.opacity = 0;
    }
 */

      /*   if (pos > img2.offsetTop) {
        img2.style.opacity = 1;
        img2.style.transitionDelay = '.2s';
    }
 */


   /*  if (pos < img2.offsetTop) {
        img2.style.opacity = 0;
        img2.style.transitionDelay = '.2s';
    } */

      /* if (pos >= texto.offsetTop) {
        texto.style.marginTop = '0px';
        texto.style.opacity = 1;
        texto.style.transitionDelay = '.2s';
    }

    if (pos < texto.offsetTop) {
        texto.style.marginTop = '100px';
        texto.style.opacity = 0;
        texto.style.transitionDelay = '.2s';
    }
 */


/* 
if (pos > cara.offsetTop) {
    console.log('ejecutando')
} */

/* console.log(img2.offsetTop)
/* console.log(texto.offsetTop) */
    /* if (pos >= 2481) {
        texto.style.marginTop = '0px';
        texto.style.opacity = 1;
        texto.style.transitionDelay = '.2s';
    }

    if (pos < 2429) {
        texto.style.marginTop = '100px';
        texto.style.opacity = 0;
        texto.style.transitionDelay = '.2s';
    } */

