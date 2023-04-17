import {Payouts} from "@cashfreepayments/cashfree-sdk";
// const { Payouts } = require('@cashfreepayments/cashfree-sdk');

  




// export default class CashfreeClient {
//   constructor() {
//     this.cf = new Cashfree({
//       appId: client_Id,
//       secretKey: secret
//     });
//   }

//   createOrder(orderId, orderAmount, orderCurrency) {
//     return new Promise((resolve, reject) => {
//       this.cf.order.create({
//         orderId: orderId,
//         orderAmount: orderAmount,
//         orderCurrency: orderCurrency
//       }, (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   }

//   handleWebhook(body) {
//     return new Promise((resolve, reject) => {
//       this.cf.event.webhook(body, (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   }
// }
