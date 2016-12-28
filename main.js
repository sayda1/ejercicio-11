function calcular(){
    var a1 = parseInt(document.getElementById("a").value);
    var b1 =parseInt(document.getElementById("b").value);
    var negativo=parseInt(document.getElementById("negativo").value); 
    
    var salida =document.getElementById("salida");
    console.log("gf");
    if( ((a1>0 && b1<0) || (a1<0 && b1>0)) && negativo==2){
        salida.innerHTML="1";
    }else if( a1<0 && b1<0 && negativo==1){
     salida.innerHTML="1";
    }else{
        salida.innerHTML="0";    
    }
}
