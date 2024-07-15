export interface ICustomer_order{
    order_date: string;
    quantity: string;
    status: string;
}

// save(){
//     let bodydata ={
//         order_date: this.order_date,
//         quantity: this.quantity,
//         status: this.status
//     };
//     this.http.post("http://localhost:8080/api/v1/order_date/save",bodydata,[responseType:'text']).subscribe((resultData:any)=>
//     {
//         console.log(resultData);
//         alert(order sent);
//     }
// }