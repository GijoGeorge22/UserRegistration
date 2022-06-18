var slider = document.getElementById("Age");
var output = document.getElementById("AgeValue");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}



function saveData(){
    var username=document.getElementById("UserName");
    var dob=document.getElementById("DOB");
    var password=document.getElementById("Password");
    var email=document.getElementById("Email");
    var age=document.getElementById("Age");
    // // alert(username.value)
    // alert(dob.value)
    // alert(password.value)
    // alert(email.value)
    // alert(age.value)
if(username.value==""){
    alert("please enter username");
    return false;
}
if(dob.value==""){
    alert("please select dob");
    return false;
}

if(password.value==""){
    alert("please enter password");
    return false;
} 

var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
if(passw.test(password.value)) 
{ 


}
else
{ 
    alert('password should contain 6 to 15 , at least one numeric digit, one uppercase and one lowercase letter.')
return false;
}

if(email.value==""){
    alert("please enter email");
    return false;
}


if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
  
  }else{
    alert("You have entered an invalid email address!")
    return (false)
  }



  var output="username="+username.value+", \ndob="+dob.value+",\nemail="+email.value+",\nage="+age.value;


  if(confirm("Do you really want to save this data? \n"+output)){
     


 var table = document.getElementById("DataTable");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= username.value;
    row.insertCell(1).innerHTML= dob.value;
    row.insertCell(2).innerHTML= email.value;
row.insertCell(3).innerHTML= age.value;
 alert("data saved successfully")

  }else{
    alert("user cancelled")
  }


  username.value=""
  dob.value=""
  email.value=""
  age.value="0"
  password.value=""
}


function calculateAge() {
    var dob=document.getElementById("DOB");
   var dt=new Date();

let d=dob.value.split("-");
    let year = d[0];
    
    let month = d[1]-1;
    
    let date = d[2];


    var dt2=new Date(year,month,date);

if(dt2>dt){
alert("dob should not be from future")
dob.value=""
return false
}




    var slider = document.getElementById("Age");
    var output = document.getElementById("AgeValue");
    slider.value=dt.getFullYear()-year;
    output.innerHTML =dt.getFullYear()-year;

    

    
}