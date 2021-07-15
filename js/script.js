
        function total(){
            var shedA = parseInt(document.getElementById("A") .value);
            var shedB = parseInt(document.getElementById("B") .value);
            var shedC = parseInt(document.getElementById("C") .value);
            var shedD = parseInt(document.getElementById("D") .value);

            if(shedA<1||shedB<1|| shedC<1 || shedD<1){
                alert ("please enter number that is more than 1");
            
            
            if(shedA ==""||shedB =="" || shedC=="" || shedD==""){
                alert ("please fill the form" );
            }
                    else{

                        var total = shedA + shedB + shedC + shedD;
                        document.getElementById("total").innerHTML = "shadeA :" + shedA + "<br> shadeB :"+ shedB + "<br> shadeC:" + shedC+ "<br> shadeD :" + shedD+ "<br>_____________<br> Total Milk"+total;
                    }
                
            }
        
        }