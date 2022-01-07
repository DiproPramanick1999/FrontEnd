fetch("./cars.json").then(response=>{
    return response.json();
})
.then(data=>(
    renderHTML(data)
))
var content = document.getElementById("info");
function renderHTML(data){
    for(let i=0;i<data.length;i++){
        htmlString = "<div class='row space'><div class='col-sm-6'><img src='"+ data[i].img +"' width='300vw'></div><div class='col-sm-6'  style='padding-left: 60px;' id='all'><p>" + data[i].name + "</p><p>Model: " + data[i].model + "</p><p>" + data[i].price + "/-</p><p>" + data[i].usage_info + "</p></div></div>";
        content.innerHTML += htmlString;
    }
}

// function func1(){
//     var check1 = document.getElementById("myCheck1").checked;
//     var val1 = document.getElementById("myCheck1").value;
//     val1 = val1.toLowerCase();
//     const list = document.querySelector("#info");
//     if(check1){
//         const books = list.querySelectorAll("#all");
//         Array.from(books).forEach(function(book){
//             var search = book.firstElementChild.innerHTML;
//             if(search.toLowerCase().includes(val1)){
//                 const a = book.parentElement;
//                 a.style.display = 'block';
//             }
//             else{
//                 const a = book.parentElement;
//                 a.style.display = 'none';
//             }
//         })
//     }
//     else{
//         const books = list.querySelectorAll("#all");
//         Array.from(books).forEach(function(book){
//             book.parentElement.style.display = 'block';
//         })
//     }
//     //console.log(val1);
// }

function func2(){
    var check1 = document.getElementById("myCheck1").checked;
    var val1 = document.getElementById("myCheck1").value;
    val1 = val1.toLowerCase();

    var check2 = document.getElementById("myCheck2").checked;
    var val2 = document.getElementById("myCheck2").value;
    val2 = val2.toLowerCase();
    const list = document.querySelector("#info");
    if(check1 && check2){
        const books = list.querySelectorAll("#all");
        Array.from(books).forEach(function(book){
            var search = book.firstElementChild.innerHTML;
            if(search.toLowerCase().includes(val1) || search.toLowerCase().includes(val2)){
                const a = book.parentElement;
                a.style.display = 'block';
            }
            else{
                const a = book.parentElement;
                a.style.display = 'none';
            }
        })
    }
    else{
        const books = list.querySelectorAll("#all");
        Array.from(books).forEach(function(book){
            book.parentElement.style.display = 'block';
        })
    }
    //console.log(val1);
}
