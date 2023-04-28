import axios from "axios";


const PayButton = ({Price}) => {
  

  const handleCheckout = async () => { 

    const {data:{key}}=await axios.get("https://e-commerce-backend-itur.onrender.com/getkey")

    const {data:{order}}= await axios.post("https://e-commerce-backend-itur.onrender.com/checkout",{
      Price
    })

   console.log(order,123456,Price,key);
   console.log("order.razorpay_payment_id",order.razorpay_payment_id)
    const options = {
      key:key,
      amount: order.amount,
      currency: "INR",
      name: "6 Pack Programmer",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/25058652?v=4",
      order_id: order.id,
      
      callback_url:"https://e-commerce-backend-itur.onrender.com/paymentverification", 

      prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  console.log(window);
  const razor = new window.Razorpay(options);
  console.log(razor.razorpay_payment_id);
  razor.open();
  };



  return (
    <>
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
