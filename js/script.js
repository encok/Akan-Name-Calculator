
 function enock(){
      let male1 = document.getElementById('male').value
      document.getElementById('show').innerHTML=male1;
      
}
function enock1(){
    let female = document.getElementById('female').value
    document.getElementById('show').innerHTML=female;
    
}
function akan(){
    // arrays declaration
    let weekDays =["Saturday","Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday"]
    let maleNames=["Kwame","Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi" ];
    let femaleNames=[ "Ama","Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua"];
    let result =  document.getElementById('show').innerHTML;
    
    // variables declaration
   let year = document.getElementById('yob').value
   let yearr = String(year);
   let CC = parseInt(yearr.substr(0,2));
   let YY = parseInt(yearr.substr(2));
   let MM = parseInt(document.getElementById('mob').value);
   let DD = parseInt(document.getElementById('dob').value);
    let day=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    let dayy = Math.floor(day);
    if(year<=2021&&year>=1900){

        if(MM<=12&&MM>0){

            if(DD<=31&&DD>0){

    if(dayy==0 && result=='male'){
        alert("your were born on"+" "+weekDays[0]+" "+"Your Akan name is"+" "+maleNames[0])
    }
    if(dayy==1 && result=='male'){
        alert("your were born on"+" "+weekDays[1]+" "+"Your Akan name is"+" "+ maleNames[1])
    }
    if(dayy==2 && result=='male'){
        alert("your were born on"+" "+weekDays[2]+" "+"Your Akan name is"+" "+maleNames[2])
    }
    if(dayy==3 && result=='male'){
        alert("your were born on"+" "+weekDays[3]+" "+"Your Akan name is"+" "+maleNames[3])
    }
    if(dayy==4 && result=='male'){
        alert("your were born on"+" "+weekDays[4]+" "+"Your Akan name is"+" "+maleNames[4])
    }
    if(dayy==5 && result=='male'){
        alert("your were born on"+" "+weekDays[5]+" "+"Your Akan name is"+" "+maleNames[5])
    }
    if(dayy==6 && result=='male'){
        alert("your were born on"+" "+weekDays[6]+" "+"Your Akan name is"+" "+maleNames[6])
    }
   


    if(dayy==0 && result=='female'){
        alert("your were born on"+" "+weekDays[0]+" "+"Your Akan name is"+" "+femaleNames[0])
    } 
    if(dayy==1 && result=='female'){
        alert("your were born on"+" "+weekDays[1]+" "+"Your Akan name is"+" "+femaleNames[1])
    }
    if(dayy==2 && result=='female'){
        alert("your were born on"+" "+weekDays[2]+" "+"Your Akan name is"+" "+femaleNames[2])
    }
    if(dayy==3 && result=='female'){
        alert("your were born on"+" "+weekDays[3]+" "+"Your Akan name is"+" "+femaleNames[3])
    }
    if(dayy==4 && result=='female'){
        alert("your were born on"+" "+weekDays[4]+" "+"Your Akan name is"+" "+femaleNames[4])
    }
    if(dayy==5 && result=='female'){
        alert("your were born on"+" "+weekDays[5]+" "+"Your Akan name is"+" "+femaleNames[5])
    }
    if(dayy==6 && result=='female'){
        alert("your were born on"+" "+weekDays[6]+" "+"Your Akan name is"+" "+femaleNames[6])
    }

}
else{
    alert("Enter valid day");
}
}
else{
    alert("Enter valid month");
}  
}
else{
    alert("Enter valid year");
}

}
//     let wholeyear=parseInt(document.getElementById('yob').value);
//     let month=parseInt(document.getElementById('mob').value);
//     let day=parseInt(document.getElementById('dob').value);
//     let gender=document.getElementById('gender').value;

//     // slice fullyear
//     let year1=wholeyear.toString().slice(-2);
//     let year=parseInt(year1);

//     let century=Math.ceil((wholeyear)/100)-1;
//     // computation
//     let dayOfWeek=((((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);
//     // validation
// // if( wholeyear>2021&&wholeyear<1900) {
  
// //     alert("Enter a valid year");
    
// //     } 
//   if( wholeyear<2021&&wholeyear>1900){
    
//     if(gender=='male'||gender=='female'){ 

    
//      if(day>0&&day<32){

//         if(month>0&&month<31){
//             // if(gender=='male'){
//             //     let i=0;
//             //            for(i; i<=6;i++){
//             //                if(i==Math.floor(dayOfWeek)){
//             //                 alert("Your akan name is "+maleNames[i]);
//             //                 location.reload();
        
//             //                }
//             //            }                    
//             }
              
//             // else{
//             //     for(i=0; i<=6;i++){
//             //         if(i==Math.floor(dayOfWeek)){
//             //          alert("Your akan name is "+FemaleNames[i]);
//             //          location.reload();

        
//             //         }
//             //     }             
//             // }
        

//         }
//         else{
//             alert("Invalid month entered");
//         }
//     }
   

//     else{
//         alert("Invalid day");
//     }

// }
// else{
//     alert("Select gender");
// }
// }
//  else{
//         alert("Invalid year");
//     }
// }