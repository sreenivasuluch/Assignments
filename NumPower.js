function onNumber() {
    var Value;
    var Numcnt = 0;
    //var checkProvider = [3,5]
    Value = document.getElementById("num").value;
    for(i = Value;i > 1; i--){
       if(i && !(i&(i-1))){
           Numcnt++;
       }
    }
      document.getElementById("ans").value = Numcnt;
}