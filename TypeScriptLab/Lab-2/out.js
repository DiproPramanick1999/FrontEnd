var PriceCalci;
(function (PriceCalci) {
    function OrderPrice(orderAmount, discount) {
        let res = orderAmount - (orderAmount * (discount / 100));
        return res;
    }
    PriceCalci.OrderPrice = OrderPrice;
})(PriceCalci || (PriceCalci = {}));
//lab-12
/// <reference path="PriceCalculator.ts"/>
let actual = PriceCalci.OrderPrice(100, 5);
console.log("Actual Price after discount: ", actual);
