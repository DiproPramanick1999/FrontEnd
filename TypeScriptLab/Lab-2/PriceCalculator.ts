namespace PriceCalci{
    export function OrderPrice(orderAmount:number,discount:number){
        let res = orderAmount-(orderAmount*(discount/100));
        return res;
    }
}