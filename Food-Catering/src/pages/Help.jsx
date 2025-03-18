

  

import { useState } from "react";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      category: "Orders & Delivery",
      questions: [
        { 
          question: "How can I track my order?", 
          answer: "You can track your order from the 'My Orders' section after logging in." 
        },
        { 
          question: "What if my food is delayed?", 
          answer: "If your order is delayed, you can contact the delivery partner via the 'Track Order' page." 
        },
        { 
          question: "How do I cancel my order?", 
          answer: "Go to 'My Orders', select the order, and click 'Cancel Order' before preparation starts." 
        },
      ],
    },
    {
      category: "Payments & Refunds",
      questions: [
        { 
          question: "What payment methods are accepted?", 
          answer: "We accept credit/debit cards, UPI, wallets, and cash on delivery (COD)." 
        },
        { 
          question: "How do I get a refund?", 
          answer: "Refunds are processed within 3-5 business days based on the payment method used." 
        },
        { 
          question: "Why was my payment declined?", 
          answer: "Check if your bank allows online transactions or try using a different payment method." 
        },
      ],
    },
    {
      category: "Account & Support",
      questions: [
        { 
          question: "How do I reset my password?", 
          answer: "Click on 'Forgot Password' on the login page and follow the instructions." 
        },
        { 
          question: "How can I contact customer support?", 
          answer: "You can reach our support team via chat or call from the 'Help' section in the app." 
        },
        { 
          question: "How do I delete my account?", 
          answer: "To delete your account, go to 'Account Settings' and request account deletion." 
        },
      ],
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">
        Help & Support
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        Find answers to common questions or contact support for assistance.
      </p>

      <div className="space-y-6">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.category}</h2>
            {section.questions.map((faq, index) => (
              <div key={index} className="border-b py-2">
                <button
                  onClick={() => toggleAnswer(`${sectionIndex}-${index}`)}
                  className="w-full text-left flex justify-between items-center font-medium text-gray-700 hover:text-orange-600"
                >
                  {faq.question}
                  <span className="text-lg">{openIndex === `${sectionIndex}-${index}` ? "▲" : "▼"}</span>
                </button>
                {openIndex === `${sectionIndex}-${index}` && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
