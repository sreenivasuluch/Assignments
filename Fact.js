function factorial() {
 var Value = 0;
 var factValue = 1;
 Value = document.getElementById("num").value;
 for(var i=1;i<=Value;i++){
     factValue = factValue*i;
 }
 document.getElementById("ans").value = factValue;
}