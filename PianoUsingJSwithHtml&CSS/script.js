
function  playTune(keys){

    switch(keys){

            case 'W' : const sound1 = new Audio("tunes/w.wav");
                       sound1.play();
                       break;

            case 'E' : const sound2 = new Audio("tunes/e.wav");
                       sound2.play();
                       break;   

            case 'T' : const sound3 = new Audio("tunes/t.wav");
                       sound3.play();
                       break;  

            case 'Y' : const sound4 = new Audio("tunes/y.wav");
                       sound4.play();
                       break;   

            case 'U' : const sound5 = new Audio("tunes/u.wav");
                       sound5.play();
                       break; 

            case 'O' :const sound6 = new Audio("tunes/o.wav");
                       sound6.play();
                       break; 

            case 'P' : const sound7 = new Audio("tunes/p.wav");
                       sound7.play();
                       break;    

            case 'Q' : const sound8 = new Audio("tunes/l.wav");
                       sound8.play();
                       break;    

            case 'V' : const sound9 = new Audio("tunes/s.wav");
                       sound9.play();
                       break; 

            case 'Z' : const sound10 = new Audio("tunes/k.wav");
                       sound10.play();
                       break;    
                       
            case 'A' : const sound11 = new Audio("tunes/k.wav");
                       sound11.play();
                       break;    

            case 'S' : const sound12 = new Audio("tunes/s.wav");
                       sound12.play();
                       break; 

            case 'D' : const sound13 = new Audio("tunes/d.wav");
                       sound13.play();
                       break; 

            case 'F' : const sound14 = new Audio("tunes/f.wav");
                       sound14.play();
                       break;  

            case 'G' : const sound15 = new Audio("tunes/g.wav");
                       sound15.play();
                       break; 

            case 'H' : const sound16 = new Audio("tunes/h.wav");
                       sound16.play();
                       break;  

            case 'J' : const sound17 = new Audio("tunes/j.wav");
                       sound17.play();
                       break;    

            case 'K' : const sound18 = new Audio("tunes/k.wav");
                       sound18.play();
                       break;  

            case 'L' : const sound19 = new Audio("tunes/l.wav");
                       sound19.play();
                       break;    

            case 'I' : const sound20 = new Audio("tunes/e.wav");
                       sound20.play();
                       break;    

            case 'B' : const sound21 = new Audio("tunes/k.wav");
                       sound21.play();
                       break;    

            case 'X' : const sound22 = new Audio("tunes/k.wav");
                       sound22.play();
                       break;    

            case 'M' : const sound23 = new Audio("tunes/f.wav");
                       sound23.play();
                       break;    

            case ';' : const sound24 = new Audio("tunes/;.wav");
                       sound24.play();
                       break;   
                      
    } 
}




for(let i=0; i<24;i++){
      const pianokeys = document.querySelectorAll(".piano .key")[i].addEventListener("click",   (eve)=>{
          let k = eve.target.innerHTML
          playTune(k);
      })
  }


document.addEventListener("keypress", (event)=>{
      let k = event.key;
      playTune(k);
  });

