"use strict";
exports.__esModule = true;
//Write your typescript code here
var message = "Welcome to typescript"; //string message = "";
var cid = 12;
var cname = "Amy";
//print the message in console
console.log(message);
console.log("Customer Name " + cname + ", Customer Id " + cid); //
//lab-3 and lab-4
var itemPrice = 50; //let,var,const
var price = 50;
var deliveryCharge = 20;
var total = function (n1, n2) {
    return n1 + n2;
};
console.log("Lab-3 " + total(price, deliveryCharge));
//lab-5
var sum = 0;
var total5 = function (n1, n2, showRes) {
    sum = n1 + n2;
    if (showRes) {
        console.log(sum);
    }
    else {
        return sum;
    }
};
total5(itemPrice, deliveryCharge, true);
var res = total5(itemPrice, deliveryCharge, false);
console.log(res);
//lab-6 and lab-7
var total6 = function (n1, n2, showRes, customString) {
    sum = n1 + n2;
    if (showRes) {
        console.log("The Price of " + customString + " is Rs." + sum + " including delivery charge of Rs." + n2);
    }
    else {
        return sum;
    }
};
total6(itemPrice, deliveryCharge, true, 'Chocolate Milk Shake ');
//lab-8 object inference
var FoodItem = {
    itemId: 101,
    itemName: "Pasta",
    itemPrice: 250,
    itemCategory: "Italian"
};
console.log(FoodItem);
//lab-9
var arr = ["Sandwich", "Pizza", "Pasta", "Pani Puri", "Dimsum", "Momos"];
arr.forEach(function (element, index) {
    console.log(index + 1 + "." + element);
});
//lab-10 and lab-11
var RestaurantType;
(function (RestaurantType) {
    RestaurantType[RestaurantType["Fast Food"] = 0] = "Fast Food";
    RestaurantType[RestaurantType["Cafe"] = 1] = "Cafe";
    RestaurantType[RestaurantType["Bistos"] = 2] = "Bistos";
})(RestaurantType || (RestaurantType = {}));
;
var Subway = {
    Name: "Subway Restaurant",
    Address: "#123",
    Phone: 98765432,
    Type: RestaurantType[RestaurantType.Cafe]
};
var MTR = {
    Name: "MTR",
    Address: "#19/2",
    Phone: 9876312,
    Type: RestaurantType[RestaurantType["Fast Food"]]
};
var Paradise = {
    Name: "Paradise",
    Address: "#90/12",
    Phone: 9876123,
    Type: RestaurantType[RestaurantType.Bistos]
};
var RestaurantDetails = function (rest) {
    console.log("Name : " + rest.Name + ", Address: " + rest.Address + ", Phone: " + rest.Phone + ", Type: " + rest.Type);
};
//RestaurantDetails(Subway);
var RestaurantList = [
    Subway,
    MTR,
    Paradise
];
var GetRestaurantList = function (rest) {
    rest.forEach(function (restaurant, index) {
        // console.log(restaurant);
        console.log("RestaurantId: " + (index + 1) + "-->");
        RestaurantDetails(restaurant);
    });
};
GetRestaurantList(RestaurantList);
//lab-12
/// <reference path="PriceCalculator.ts"/>
var actual = PriceCalci.OrderPrice(100, 5);
console.log("Actual Price after discount: ", actual);
