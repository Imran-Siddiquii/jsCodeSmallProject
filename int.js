//The "main_string" is the input for the program. The text 
var main_string = "Hi {{USER}}<br><br>This is dynamic mail with dynamic subject, but source is Google Document.<br><br>{{item 1}}<br>{{item 2}}<br><br><br>Thanks<br>Cheers!";


//outut
//"Hi NAME <br><br>This is dynamic mail with dynamic subject, but source is Google Document.<br><br>Software<br>Generalist<br><br><br>Thanks<br>Cheers!";

function main() {
  
    var placeholder_array = getPlaceholders();
    var final_string = placeholder_replace(placeholder_array);
    console.log("final_string"+ final_string);
    
  }

function getPlaceholders() {
  
  try {
    
    var txt = main_string;
    var placeholder=[];
    
   // var startFrom=0;
    //var counter=0;
    var endIndex=-1;
    var loop=true;
    //Find the placeholers 
      //write your logic here;
      for(var i=0 ; loop ; i++) {
 var result = txt.indexOf("{{", endIndex + 1);
 var result1 = txt.indexOf("}}",endIndex + 1);
 var string = txt.substring(result+2, result1);
   if(result==-1){
   loop=false;
    break;
   }
   placeholder.push(string);
    endIndex=result1;

}
    return placeholder; //Array of placeholder
  
  }catch(e){
    console.log(e)
  }
}
function placeholder_replace(placeholder_array){
  try {
    //replace placeholders with your values.
    var txt = main_string;
    var values_array = ['Imran Siddiqui','Frontend','Developer'];
 
    for ( var i = 0 ; i < values_array.length ; i++) {
   txt = txt.replace(array[i], values_array[i]);
   txt = txt.replace('{{', '');
   txt = txt.replace('}}', '');
}
    
    //write your replacement logic here
    
    return txt;
  }catch(e) {
    console.log(e)
  }
}



function main() {
  var placeholder_array = getPlaceholders();
  var final_string = placeholder_replace(placeholder_array);
  console.log("final_string"+ final_string);
  
}