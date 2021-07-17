
function akanNaming(){
    // arrays declaration
    let maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let FemaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    // variables declaration
    
    let wholeyear=parseInt(document.getElementById('yob').value);
    let month=parseInt(document.getElementById('mob').value);
    let day=parseInt(document.getElementById('dob').value);
    let gender=document.getElementById('gender').value;

    // slice fullyear
    let year1=wholeyear.toString().slice(-2);
    let year=parseInt(year1);

    let century=Math.ceil((wholeyear)/100)-1;
    // computation
    let dayOfWeek=((((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7);
    // validation
if( wholeyear>2021&&wholeyear<1900) {
    


    if(day>0&&day<32){

        if(month>0&&month<31){
            if(gender=='Male'){
                let i=0;
                       for(i; i<=6;i++){
                           if(i==Math.floor(dayOfWeek)){
                            alert("Your akan name is "+maleNames[i]);
                            location.reload();
        
                           }
                       }                    
            }
              
            else{
                for(i=0; i<=6;i++){
                    if(i==Math.floor(dayOfWeek)){
                     alert("Your akan name is "+FemaleNames[i]);
                     location.reload();

        
                    }
                }             
            }
        

        }
        else{
            alert("Invalid month entered").focus();
        }
    }
   

    else{
        alert("Invalid day").focus();
    }


}
    else{
      alert("Enter valid year or gender should not be blank").focus();
    }

}