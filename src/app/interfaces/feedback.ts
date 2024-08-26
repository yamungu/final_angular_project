export interface IFeedback{
    name:string;
    messsage:string;
    date: string;
}

// save(){
//     let bodydata ={
//         message: this.message,
//         date: this.date,
//     };
//     this.http.post("http://localhost:8080/api/v1/feedback/save",bodydata,[responseType:'text']).subscribe((resultData:any)=>
//     {
//         console.log(resultData);
//         alert(feedback sent);
//     }
// }

