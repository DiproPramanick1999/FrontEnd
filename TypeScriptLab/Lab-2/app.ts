import { Restaurant } from "./IRestaurant";

//Write your typescript code here
var message:string = "Welcome to typescript"; //string message = "";
let cid:number=12;
let cname:string="Amy";

//print the message in console
console.log(message);
console.log(`Customer Name ${cname}, Customer Id ${cid}`);//

//lab-3 and lab-4
const itemPrice = 50;//let,var,const
const price=50;
const deliveryCharge = 20;

const total = function(n1:number,n2:number){
    return n1+n2;
}

console.log("Lab-3 "+total(price,deliveryCharge));

//lab-5
let sum=0;
const total5 = function(n1:number,n2:number,showRes:boolean){
    sum = n1+n2;
    if(showRes){
        console.log(sum);
    }
    else{
        return sum;
    }
}

total5(itemPrice,deliveryCharge,true);
let res = total5(itemPrice,deliveryCharge,false);
console.log(res);

//lab-6 and lab-7
const total6 = function(n1:number,n2:number,showRes:boolean,customString:string){
    sum = n1+n2;
    if(showRes){
        console.log(`The Price of ${customString} is Rs.${sum} including delivery charge of Rs.${n2}`);
    }
    else{
        return sum;
    }
}

total6(itemPrice,deliveryCharge,true,'Chocolate Milk Shake ');

//lab-8 object inference
const FoodItem :{
    itemId:number,
    itemName:string,
    itemPrice:number,
    itemCategory:string
} = 
{
    itemId : 101,
    itemName:"Pasta",
    itemPrice:250,
    itemCategory:"Italian"
};

console.log(FoodItem);

//lab-9
const arr = ["Sandwich","Pizza","Pasta","Pani Puri","Dimsum","Momos"];


arr.forEach((element,index) => {
    console.log(`${index+1}.${element}`);
});

//lab-10 and lab-11
enum RestaurantType {"Fast Food","Cafe","Bistos"};

let Subway:Restaurant = {
    Name:"Subway Restaurant",
    Address:"#123",
    Phone:98765432,
    Type:RestaurantType[RestaurantType.Cafe]
};

let MTR:Restaurant={
    Name:"MTR",
    Address:"#19/2",
    Phone:9876312,
    Type: RestaurantType[RestaurantType["Fast Food"]]
}

let Paradise:Restaurant={
    Name: "Paradise",
    Address: "#90/12",
    Phone: 9876123,
    Type: RestaurantType[RestaurantType.Bistos]
}
let RestaurantDetails = (rest:Restaurant) => {
    console.log(`Name : ${rest.Name}, Address: ${rest.Address}, Phone: ${rest.Phone}, Type: ${rest.Type}`);
}

//RestaurantDetails(Subway);

let RestaurantList : Restaurant[] = [
    Subway,
    MTR,
    Paradise
];

let GetRestaurantList = (rest:Restaurant[]) => {
    rest.forEach((restaurant,index) => {
       // console.log(restaurant);
        console.log(`RestaurantId: ${index+1}-->`);
        RestaurantDetails(restaurant);
    })
};

GetRestaurantList(RestaurantList);



   


