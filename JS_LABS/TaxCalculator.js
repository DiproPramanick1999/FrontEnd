var opt;
function myFunction(){
    opt = document.getElementById("opt").value;
    console.log(opt);
    if(opt == "Junior Software Developer" || opt == "Junior Quality Analyst"){
        document.getElementById("basic").value = 20000;
        document.getElementById("bonus").value = 5;
    }
    else if(opt == "Senior Software Developer" || opt == "Senior Quality Analyst"){
        document.getElementById("basic").value = 30000;
        document.getElementById("bonus").value = 10;
    }
    else if(opt == "Business Analyst"){
        document.getElementById("basic").value = 35000;
        document.getElementById("bonus").value = 7;
    }
    else if(opt == "Team Lead"){
        document.getElementById("basic").value = 50000;
        document.getElementById("bonus").value = 15;
    }
    else if(opt == "Manager"){
        document.getElementById("basic").value = 100000;
        document.getElementById("bonus").value = 20;
    }
    //console.log(opt.value);
}
var year;
function func(){
    var basic = document.getElementById("basic").value;
    var allow = document.getElementById("allowances").value;
    var monthlyGross = +basic + +allow;
    //console.log(monthlyGross);
    var bonus = ((monthlyGross*document.getElementById("bonus").value)/100)+monthlyGross;
    var annualGross = 12*bonus;
    document.getElementById("gross").value = annualGross;
    if(year==2016){
        if(annualGross<=250000){
            document.getElementById("taxpayable").value = 0;
            document.getElementById("netsalary").value = annualGross;
        }
        else if(annualGross>250000 && annualGross<=500000){
            var taxpayable = (0.1*annualGross)
            document.getElementById("taxpayable").value = taxpayable;
            document.getElementById("netsalary").value = annualGross-taxpayable;
        }
        else if(annualGross>500000 && annualGross<=1000000){
            var taxpayable = (0.2*annualGross)
            document.getElementById("taxpayable").value = taxpayable;
            document.getElementById("netsalary").value = annualGross-taxpayable;
        }
        else if(annualGross>1000000){
            var taxpayable = (0.3*annualGross)
            document.getElementById("taxpayable").value = taxpayable;
            document.getElementById("netsalary").value = annualGross-taxpayable;
        }
    }
    else if(year>=2017 && year <=2020){
        if(annualGross<=250000){
            document.getElementById("taxpayable").value = 0;
            document.getElementById("netsalary").value = annualGross;
        }
        else if(annualGross>250000 && annualGross<=500000){
            var taxpayable = (0.05*annualGross)
            document.getElementById("taxpayable").value = taxpayable;
            document.getElementById("netsalary").value = annualGross-taxpayable;
        }
        else if(annualGross>500000 && annualGross<=1000000){
            var taxpayable = (0.2*annualGross)
            document.getElementById("taxpayable").value = taxpayable;
            document.getElementById("netsalary").value = annualGross-taxpayable;
        }
        else if(annualGross>1000000){
            var taxpayable = (0.3*annualGross)
            document.getElementById("taxpayable").value = taxpayable;
            document.getElementById("netsalary").value = annualGross-taxpayable;
        }
    }
}
// var BonusCalculation = function(){
//     var basic = document.getElementById("basic").value;
//     var allow = document.getElementById("allowances").value;
//     var monthlyGross = basic+allow;
//     var bonus = (monthlyGross*document.getElementById("bonus").value/100)+monthlyGross;
//     var annualGross = 12*bonus;
// }
function changdate(){
    var input = document.getElementById("date").value;
    //console.log(input);
    var date = new Date(input);
    year = date.getFullYear();
    if(year>=2016 && year<=2018)
        document.getElementById("taxincome").value = 150000;
    else if(year>=2019 && year<=2020)
        document.getElementById("taxincome").value = 200000;
}


//Local Storage
// let submitForm=()=>{
// form1 = document.getElementById('form1')
// console.log({form1:new FormData(form1)})
// window.localStorage.setItem('hello','mister')
// return false
// }
function submitbtn(){
    var key = document.getElementById("empId").value;
    const res = localStorage.getItem(key);
    console.log(res);
    //alert(res);
    if(res){
        alert("Id is present.");
        location.reload();
        //return false;
    }
    else{
        var key = document.getElementById("empId").value;
        var arr = {'name':document.getElementById("name").value,'option':document.getElementById("sel1").value,'date':document.getElementById("date").value};
        window.localStorage.setItem(key,JSON.stringify(arr));
    }
    
}

function submitSearch(){
    var key = document.getElementById("empId").value;
    const res = localStorage.getItem(key);
    if(res){
        var res1 = JSON.parse(res);
        console.log(res1.name);
        document.getElementById("dispName").innerHTML = res1.name;
        document.getElementById("roleName").innerHTML = res1.option;
        document.getElementById("date").innerHTML = res1.date;

    }
    else{
        alert("Id is not present");   
        location.reload();
        return false;     
    }
}


