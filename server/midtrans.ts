
import midtransClient from 'midtrans-client';

export const snap = new midtransClient.Snap({
  isProduction: false,
  serverKey: process.env.MIDTRANS_SERVER_KEY,
  clientKey: process.env.MIDTRANS_CLIENT_KEY
});

export async function createTransaction(orderId: string, amount: number, customerDetails: any) {
  const transaction = await snap.createTransaction({
    transaction_details: {
      order_id: orderId,
      gross_amount: amount
    },
    customer_details: customerDetails,
    credit_card: {
      secure: true
    }
  });
  
  return transaction;
}
