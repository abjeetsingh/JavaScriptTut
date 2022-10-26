let count = 0;
function increase(){
  count+=1;
  document.getElementById("counter").innerText=count; 
}
let value = [];
function saved(){
  value.push(count);
  document.getElementById("saved").innerHTML= value.join("\t-\t");
}

function deletes(){
  value.pop();

  if(value.length > 0){
    document.getElementById("saved").innerHTML= value.join("\t-\t");}
  else{
    document.getElementById("saved").innerHTML= "Saved Values Here";}

}