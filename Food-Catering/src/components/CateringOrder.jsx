import React, { useState } from "react";
import axios from "axios";
import CateringOrderPhoto from "../assets/CateringOrder.avif"

const CateringOrder = () => {
  const [formData, setFormData] = useState({
    noOfPerson: "",
    email: "",
    date: "",
    phoneNo: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8003/action/api/cateringorders/addCateringOrder",
        formData // ✅ Date remains in "YYYY-MM-DD"
      );
      console.log("Response:", response.data);
      setMessage("Catering order request sent successfully!");
      setFormData({ noOfPerson: "", email: "", date: "", phoneNo: "" });

      setTimeout(() => {
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to send the catering order request.");
    }
  };

  return (
    <div className="w-full py-16 px-4 sm:px-10 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-lg shadow-lg">
        
        {/* Left Side - Form */}
        <div className="flex-1 w-full p-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Reserve for the big day!
          </h2>
          <p className="text-gray-600 mb-6">
            Please fill in the details, we will call you back soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Number of Persons */}
            <div>
              <label className="block text-gray-700 font-medium">Person</label>
              <select
                name="noOfPerson"
                value={formData.noOfPerson}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select persons</option>
                {[50, 100, 150, 200, 300, 500].map((num) => (
                  <option key={num} value={num}>
                    {num} persons
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            {/* Date Picker */}
            <div>
              <label className="block text-gray-700 font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>

          {/* Success/Error Message */}
          {message && <p className="mt-4 text-center text-green-600">{message}</p>}
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 hidden md:flex justify-center">
          <img
            src={CateringOrderPhoto}// Update with the correct path
            alt="Catering Service"
            className="w-96 h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CateringOrder;


// import React, { useState } from "react";
// import axios from "axios";
// import CateringOrderPhoto from "../assets/CateringOrder.avif";

// const CateringOrder = () => {
//   const [formData, setFormData] = useState({
//     noOfPerson: "",
//     email: "",
//     date: "",
//     phoneNo: "",
//     amount: 0, // New field for payment
//   });

//   const [message, setMessage] = useState("");
//   const [orderId, setOrderId] = useState(null);
//   const [loading, setLoading] = useState(false); // Loading state for button

//   // Pricing logic based on number of persons
//   const personPriceMapping = {
//     50: 5000,
//     100: 10000,
//     150: 15000,
//     200: 20000,
//     300: 30000,
//     500: 50000,
//   };

//   // Handle input change & update amount dynamically
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     let updatedFormData = { ...formData, [name]: value };

//     if (name === "noOfPerson") {
//       updatedFormData.amount = personPriceMapping[value] || 0; // Set amount based on selection
//     }

//     setFormData(updatedFormData);
//   };

//   // Handle form submission and payment together
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Step 1: Submit Catering Order
//       const orderResponse = await axios.post(
//         "http://localhost:8003/action/api/cateringorders/addCateringOrder",
//         formData
//       );
//       console.log("Order Response:", orderResponse.data);

//       // Step 2: Payment Processing
//       const paymentResponse = await axios.post(
//         "http://localhost:8003/action/api/payment/create",
//         {
//           amount: formData.amount * 100, // Convert to paisa (Razorpay requirement)
//           currency: "INR",
//           receipt: `order_rcptid_${orderResponse.data.orderId}`,
//         }
//       );

//       setOrderId(orderResponse.data.orderId);
//       setMessage("Order placed successfully! Proceeding to payment...");

//       // Step 3: Initiate Razorpay Payment
//       const options = {
//         key: "YOUR_RAZORPAY_KEY",
//         amount: paymentResponse.data.amount,
//         currency: paymentResponse.data.currency,
//         name: "Food Catering Service",
//         description: "Payment for Catering Order",
//         order_id: paymentResponse.data.orderId,
//         handler: function (response) {
//           alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
//           setMessage("Payment successful! Your catering order is confirmed.");
//         },
//         prefill: {
//           email: formData.email,
//           contact: formData.phoneNo,
//         },
//         theme: {
//           color: "#F37254",
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();

//       setFormData({ noOfPerson: "", email: "", date: "", phoneNo: "", amount: 0 });
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("Failed to process the request. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full py-16 px-4 sm:px-10 bg-gray-100">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center bg-white p-6 rounded-lg shadow-lg">
        
//         {/* Left Side - Form */}
//         <div className="flex-1 w-full p-6">
//           <h2 className="text-3xl font-bold text-orange-600 mb-4">
//             Reserve for the big day!
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Please fill in the details, we will call you back soon.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Number of Persons */}
//             <div>
//               <label className="block text-gray-700 font-medium">Person</label>
//               <select
//                 name="noOfPerson"
//                 value={formData.noOfPerson}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//               >
//                 <option value="">Select persons</option>
//                 {Object.keys(personPriceMapping).map((num) => (
//                   <option key={num} value={num}>
//                     {num} persons
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-medium">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Date Picker */}
//             <div>
//               <label className="block text-gray-700 font-medium">Date</label>
//               <input
//                 type="date"
//                 name="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block text-gray-700 font-medium">Phone Number</label>
//               <input
//                 type="tel"
//                 name="phoneNo"
//                 value={formData.phoneNo}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border border-gray-300 rounded-lg"
//                 placeholder="Enter your phone number"
//               />
//             </div>

//             {/* Amount Display */}
//             <div>
//               <label className="block text-gray-700 font-medium">Amount to Pay</label>
//               <input
//                 type="text"
//                 value={formData.amount ? `₹${formData.amount}` : ""}
//                 readOnly
//                 className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100"
//               />
//             </div>

//             {/* Submit & Pay Button */}
//             <button
//               type="submit"
//               disabled={loading || !formData.amount}
//               className={`w-full py-2 rounded-lg transition ${
//                 loading
//                   ? "bg-gray-400 text-white cursor-not-allowed"
//                   : "bg-orange-500 text-white hover:bg-orange-600"
//               }`}
//             >
//               {loading ? "Processing..." : "Send Request & Pay"}
//             </button>
//           </form>

//           {/* Success/Error Message */}
//           {message && <p className="mt-4 text-center text-green-600">{message}</p>}
//         </div>

//         {/* Right Side - Image */}
//         <div className="flex-1 hidden md:flex justify-center">
//           <img
//             src={CateringOrderPhoto}
//             alt="Catering Service"
//             className="w-96 h-96 object-cover rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CateringOrder;
