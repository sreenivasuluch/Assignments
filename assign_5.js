function OnfizzCnt() {
    var Value = 0;
    var ans = "";
    //var checkProvider = [3,5]
    Value = document.getElementById("num").value;
    for(var i=1;i<=Value;i++){
        if(i%3 == 0 ){
            ans += (i == Value) ? "Fizz" :  "Fizz"+",";
        }else if (i%5 == 0){
            ans += (i == Value) ? "Buzz" : "Buzz"+",";
        }else{
            ans += (i == Value) ? i : i+",";
        }
    }
    document.getElementById("ans").value = ans;
}