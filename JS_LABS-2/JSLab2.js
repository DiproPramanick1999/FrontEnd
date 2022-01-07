function fun1(){
    console.log("hello diprs");

    var arr = document.getElementById('num').value; //"12,13,14"
    var num = arr.split(',').map(function(n){
        return parseInt(n);
    });
    fun(num);
}
// //12,13,14----{2:12 3:13 4:14}

var fun = function(args){
    console.log("hello dipr1");
    const arr1 = args.map(function(n){
    var res = 1;
    var value = n;
     while(n !== 0){
        let rem = n%10;
        res = res*rem;
        n=n/10;
        n = Math.floor(n);
        }
        return res;
    });
    console.log(arr1.sort());
}
