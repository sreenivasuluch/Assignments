function naturalNumCnt() {
    var Value = 0;
    var ans = 0;
    //var checkProvider = [3,5]
    Value = document.getElementById("num").value;
    for(var i=1;i<Value;i++){
        if(i%3 == 0 || i%5 == 0){
            ans = ans+i;
    }
    }
    document.getElementById("ans").value = ans;
}
