function natural() {
    var Value = 0;
    var naturalNum = 0;
    Value = document.getElementById("num").value;
    for(var i=1;i<Value;i++){
        naturalNum = naturalNum+i;
    }
    document.getElementById("ans").value = naturalNum;
}