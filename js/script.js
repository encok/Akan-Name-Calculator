var maleAkanNames = ["Kwasi","Kwendwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleAkanNames =  ["Akosua", "Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var weekDays = ["Sunday", "Monday","Tuesday","Wedneday","Thursday","Friday","Saturday",];

function akanNaming(){
 var year = document.getElementById("yob").value;
 var month = document.getElementById("mob").value;
 var day = document.getElementById("dob").value;
 var gender = document.getElementById("gender").value;
 var CC = parseInt(year);
 var YY = parseInt(year);
 var MM = parseInt(month);
 var Day = parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7); 

 if(gender===female){
     console.log("Your akan is " + femaleAkanNames[day]);
 }
 else{
     console.log("Your akan name is" +maleAkanNames[day]);
 }
}