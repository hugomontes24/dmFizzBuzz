'use strict';
let compteur = 0;
/* for(let index=1 ; index<101; index++){
    // tableau.push(index);
    for(let index1=0 ; index1<100; index1++){
}*/
for(let index = 1; index < 101; index++){
    if(index % 15 == 0 ){
        document.write("FizzBuzz ");
        compteur++;
        if(compteur ==10){
            document.write("<br>"); 
            compteur = 0;
        }
    }else if(index % 5 == 0){
        document.write("Buzz- ");
        compteur++;
        if(compteur ==10){
            document.write("<br>"); 
            compteur = 0;
        }
    }else if(index % 3 == 0 ){
        document.write("Fizz- ");
        compteur++;
        if(compteur ==10){
            document.write("<br>"); 
            compteur = 0;
        }
    }else{
        if(index < 10){
            document.write(" - 0"+ index + " - ");
            compteur++;
        }else{
            document.write(" - "+ index + " - ");
            compteur++;
        }
                if(compteur ==10){
                    document.write("<br>"); 
                    compteur = 0;
        }
    }

}
    